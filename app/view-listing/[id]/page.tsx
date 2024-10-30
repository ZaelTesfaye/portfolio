'use client'

import React, {useEffect, useState} from 'react';
import {createClient} from "@/utils/supabase/client";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import Image from "next/image";
import {BiArea, BiLocationPlus} from "react-icons/bi";
import {Bath, BedDouble, Car, Drill, House} from "lucide-react";

const Page = ({params}) => {
    const [listingDetail, setListingDetail] = useState();
    const [userInfo, setUserInfo] = useState();
    const supabase = createClient()

    useEffect(() => {

       const getUserInfo = async () => {
           const {data, error } = await supabase.auth.getUser();
           if (error) return console.log(error)
           if(data) setUserInfo(data);

       }
       getUserInfo();
    }, []);



    const getListing = async () => {

        const {data, error} = await supabase
            .from('listing')
            .select("*, listingImages(url)")
            .eq('id', params.id)

        if (error) return console.log(error);

        if (data) setListingDetail(data);
    }
    useEffect(() => {
        getListing();
    }, []);

    return (
        listingDetail &&
        <div className={"w-4/5 pl-52"}>
            <Carousel>
                <CarouselContent>
                    {
                        listingDetail && listingDetail[0].listingImages.map((image, index) => {
                                return (
                                    <CarouselItem key={index} className={"flex justify-center"}>
                                        <Image height={400} width={400} src={image.url} alt="Property Image"
                                               className={"rounded-xl object-cover"}/>
                                    </CarouselItem>
                                )
                            }
                        )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
            <div className={"flex flex-col gap-3 pt-10 pl-40 pb-28 "}>
                <h1 className={"font-bold text-2xl"}>${listingDetail[0].price}</h1>
                <h1 className={"flex gap-2"}><BiLocationPlus className={"text-2xl"}/> {listingDetail[0].address}</h1>
                <div className={"flex flex-col gap-3 pt-5"}>
                    <h1 className={"text-2xl text-primary font-medium"}>Key features</h1>
                    <div className={"grid grid-cols-3 py-5 gap-10"}>
                        <h2 className={"flex gap-4"}><House className={"text-primary"}/> {listingDetail[0].propertyType}
                        </h2>
                        <h2 className={"flex gap-4"}><Drill className={"text-primary"}/> {listingDetail[0].builtIn}</h2>
                        <h2 className={"flex gap-4"}><BiArea className={"text-primary"}/> {listingDetail[0].area}</h2>
                        <h2 className={"flex gap-4"}><BedDouble className={"text-primary"}/> {listingDetail[0].bedroom}
                        </h2>
                        <h2 className={"flex gap-4"}><Bath className={"text-primary"}/> {listingDetail[0].bathroom}</h2>
                        <h2 className={"flex gap-4"}><Car className={"text-primary"}/> {listingDetail[0].parking}</h2>
                    </div>

                    <div>
                        <h1 className={"text-primary text-2xl font-medium"}>Description</h1>
                        <p className={"text-lg font-medium pt-5"}>{listingDetail[0].description}</p>
                    </div>
                    <div className={"pt-5"}>
                        <h1 className={"text-primary text-2xl font-medium"}>Contact</h1>
                        <p className={"text-xl font-medium text-gray-500 pt-5"}>{userInfo?.user.email}</p>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default Page;