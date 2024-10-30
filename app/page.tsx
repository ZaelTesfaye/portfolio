'use client'

import Listings from "@/components/Listings";
import GoogleMapComp from "@/components/GoogleMaps";
import {useState} from "react";
import {useAuth} from "@/context/AuthContextProvider";


const Page = () => {
    const {forSell, setForSell} = useAuth()
    const [coordinates, setCoordinates] = useState();
    return (
        <div className={"grid grid-cols-6 gap-10 px-10 "}>

            <div className={"col-span-4"}>
                <Listings forSell={forSell} setCoordinates={(value)=>setCoordinates(value)} />
            </div>
            <div className={"col-span-2 sticky pt-10 hidden md:block"}>
                <GoogleMapComp coordinates={coordinates}/>
            </div>
        </div>
    );
};

export default Page;