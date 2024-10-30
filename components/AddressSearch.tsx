'use client'

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BiLocationPlus} from "react-icons/bi";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import debounce from "@/utils/debounce";
import {autoComplete} from "@/app/add-listing/actions";
import {createClient} from "@/utils/supabase/client";

interface Address {
    properties: {
        formatted: string;
    }
}

const AddressSearch = ({setSearchInput}) => {
    const supabase = createClient();


    const [addressList , setAddressList] = useState([]);
    const [addressValue, setAddressValue] = useState('');
    const [showAddressSelection, setShowAddressSelection] = useState(false);

    const addressRef = useRef();

    const handleAddressSelection = (value, city) => {

        setShowAddressSelection(false);
        setAddressValue(value);
        setSearchInput(city? city : addressValue);

    }

    const handleAutoComplete = useCallback(
        debounce(async (input: string) => {
            if (input !== "") {
                const addressOptions: { features: Address[] } = await autoComplete(input);
                setAddressList(addressOptions.features);
            }
        }, 500),
        []
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (addressRef.current && !addressRef.current.contains(event.target)) {
                setShowAddressSelection(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [addressRef]);

    return (
        <div className={"w-8/12 pt-10"}>
            <div ref={addressRef} className={"flex gap-3 items-center relative"}>

                <div className={"flex gap-4 w-full"}>
                    <BiLocationPlus className={"text-3xl text-primary"}/>
                    <Input
                        type="text"
                        name="address"
                        placeholder="Enter address"
                        value={addressValue}
                        className={"outline outline-2"}
                        onChange={(e) => {
                            setAddressValue(e.target.value);
                            e.target.value !== '' ? setShowAddressSelection(true) : setShowAddressSelection(false);
                            handleAutoComplete(e.target.value); // Use the debounced function
                        }}
                        onFocus={() => {
                            addressValue !== '' && setShowAddressSelection(true)
                        }}
                    />
                </div>


                <div
                    className={`absolute top-14 bg-gray-300 z-10 w-full font-medium flex flex-col gap-3 ${(!showAddressSelection) && "hidden"}`}>
                    {addressList.length > 0 && addressList.map((address) => {
                        return <Button
                            type="button"
                            variant="outline"
                            key={address.properties.formatted}
                            className={"text-base hover:text-primary whitespace-normal  "}

                            onClick={() => {
                                handleAddressSelection(address.properties.formatted, address.properties.county)
                                console.log(address);
                            }}

                        >
                           {address.properties.formatted}
                        </Button>
                    })}

                </div>


            </div>
        </div>
    );
};

export default AddressSearch;