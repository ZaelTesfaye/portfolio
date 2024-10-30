'use client'
import React, {useEffect, useState} from 'react';
import {createClient} from "@/utils/supabase/client";
import Image from "next/image";
import {BiLocationPlus} from "react-icons/bi";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import logout from "@/app/logout/actions";
import {Power} from "lucide-react";
import {CgSpinner} from "react-icons/cg";

const Page = () => {
    const [listings, setListings] = useState();
    const supabase = createClient()
    const router = useRouter();
    const [deletion, setDeletion] = useState(false);
    const [deletionStatus, setDeletionStatus] = useState(false);
    const [deletedItem, setDeletedItem] = useState();

    const deleteHandler = async (listing) => {
        setDeletedItem(listing.id);
        setDeletionStatus(true);
        const {error: imagesError} = await supabase
            .from('listingImages')
            .delete()
            .eq('listing_id', listing.id);


        if (imagesError)  {
            console.log(imagesError)
            setDeletionStatus(false)
            return
        };

        const {error} = await supabase
            .from('listing')
            .delete()
            .eq('id', listing.id);

        if (error) {
            console.log(error)
            setDeletionStatus(false)
            return
        }
        setDeletionStatus(false);
        setDeletion(!deletion);
    }

    useEffect(() => {

        const getListings = async () => {
            const {data, error} = await supabase.auth.getUser();

            if (error) return console.log(error)
            if (data) {
                const {data: listingsData, error: listingsError} = await supabase
                    .from('listing')
                    .select('*, listingImages(url, listing_id)')
                    .eq('createdBy', data.user.email);

                if (listingsError) return console.log(listingsError)
                if (listingsData) {
                    setListings(listingsData)
                    console.log(listingsData)

                }
            }
        }
        getListings();

    }, [deletion]);

    return (
        listings &&
        <div>
            <div className={"flex justify-between pr-12"}>
                <h1 className={"text-2xl font-medium text-primary pl-16"}>Manage your listings</h1>
                <Button variant={"destructive"} onClick={async () => await logout()}>
                    <Power size={48} color="#ffff" strokeWidth={2.5} />Logout
                </Button>
            </div>

            <div className={"grid grid-cols-5 gap-16 p-16"}>
            {listings.map((listing) => (
                    <div className={"flex flex-col justify-between p-2 rounded-lg hover:  hover:border-gray-400 hover: border-2"} key={listing.id}>
                        <div>
                            <div className={"w-full h-64"}>
                                <Image className={"object-cover w-full h-full rounded-lg"} width={300} height={300}
                                       alt={"Posted Image"} src={listing?.listingImages[0]?.url}/>
                            </div>

                            <h2 className={"font-bold text-lg pt-5"}>${listing.price}</h2>

                            <h3 className={"flex gap-3 text-gray-600 pt-3 items-center"}><BiLocationPlus
                                className={"text-xl"}/>{listing.address}</h3>
                        </div>
                        <div className={"flex pt-5 justify-start gap-4 "}>
                            <Button onClick={() => router.push(`/edit-listing/${listing.id}`)}>Edit</Button>
                            <Button onClick={() => deleteHandler(listing)} variant={"destructive"}>
                                {deletionStatus&& deletedItem ===listing.id && <CgSpinner/>} Delete
                            </Button>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;