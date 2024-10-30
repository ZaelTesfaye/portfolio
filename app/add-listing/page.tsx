'use client'

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {autoComplete, findAndSetCoordinate} from "@/app/add-listing/actions";
import debounce from "@/utils/debounce";
import {ChevronDown, Loader} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";


interface Address {
    properties: {
        formatted: string;
    }
}

const Page = () => {


    const {toast} = useToast()
    const [addressValue, setAddressValue] = useState("");
    const [addressList, setAddressList] = useState<Address[]>([]);
    const [showAddressSelection, setShowAddressSelection] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const dropdownRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = useCallback(
        debounce(async (input: string) => {
            if (input !== "") {
                const addressOptions: { features: Address[] } = await autoComplete(input);
                setAddressList(addressOptions.features);
            }
        }, 500),
        []
    );


    const handleAddressSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowAddressSelection(false);
        setAddressValue(e.currentTarget.textContent as string);
    };

    const handleAddressSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const address = formData.get("address") as string;

        const status = await findAndSetCoordinate(address);
        if (!status.status || !status.propData) {
            toast({
                title: "Error",
                description: status.message,
            })
            return;
        }

        const id = status.propData[0].id;

        setIsLoading(false);
        await router.push(`/edit-listing/${id}`);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowAddressSelection(false);
            }
        };


        document.addEventListener("mousedown", handleClickOutside);


        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={"flex flex-col gap-4 items-center justify-center w-full pt-20"}>
            <h1 className={"text-xl"}>
                Add New Listing
            </h1>
            <form onSubmit={handleAddressSubmission} className={"w-full flex justify-center"}>
                <div className="flex flex-col w-96 items-center gap-4 relative" ref={dropdownRef}>
                    <div className={"flex flex-row w-96 relative items-center"}>
                        <Input
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            value={addressValue}
                            className={"outline outline-2"}
                            onChange={(e) => {
                                setAddressValue(e.target.value);
                                handleChange(e.target.value); // Use the debounced function
                            }}
                            onFocus={() => setShowAddressSelection(true)}

                        />
                        <ChevronDown
                            className={`font-black ml-2  cursor-pointer  transform transition-transform duration-200 hover:scale-125 ${!showAddressSelection && "rotate-180"}`}

                            onClick={(e) => {
                                if (addressValue) {
                                    e.stopPropagation()
                                    setShowAddressSelection((prev) => !prev)
                                }
                            }
                            }/>
                    </div>
                    <div

                        className={`absolute top-14 bg-white font-medium flex flex-col gap-3 ${(!showAddressSelection) && "hidden"}`}>
                        {addressList.length > 0 && addressList.map((address) => (
                            <Button
                                type="button"
                                variant="outline"
                                key={address.properties.formatted}
                                className={"text-base hover:text-primary"}
                                onClick={handleAddressSelection}
                            >
                                {address.properties.formatted}
                            </Button>
                        ))}
                    </div>
                    <Button type="submit"
                            className={`w-36`}
                            disabled={addressValue === "" || isLoading}>

                        {isLoading && <Loader className={"animate-spin"}/>}
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Page;
