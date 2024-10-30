"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Plus, User} from "lucide-react";
import Link from "next/link";
import {useAuth} from "@/context/AuthContextProvider";
import {createClient} from "@/utils/supabase/client";
import {useRouter} from "next/navigation";


const Header = () => {
    const router = useRouter();

    const {forSell, setForSell} = useAuth()
    const [authStatus, setAuthStatus] = useState(false)

    useEffect(() => {
        const supabase = createClient();

        const getUser = async () => {
            const {data, error} = await supabase.auth.getUser();
            if (data) setAuthStatus(true);
        }
        getUser();

    }, [])

    return (

        <div className="flex justify-between p-7 px-10 sticky w-full bg-white">
            <div className="flex items-center gap-10">
                <a href={"/"}> <Image src={"/logo.png"} alt="Logo" width={100} height={100}/> </a>
                <ul className="hidden md:flex gap-10 ">
                    <Link href="/" onClick={() => setForSell(true)}>
                        <li className={`hover:text-primary cursor-pointer font-medium text-base ${forSell && "text-primary"}`}>
                            For sell
                        </li>
                    </Link>
                    <Link href="/" onClick={() => setForSell(false)}>
                        <li className={`hover:text-primary cursor-pointer font-medium text-base ${!forSell && "text-primary"}`}>For
                            rent
                        </li>
                    </Link>



                </ul>
            </div>
            <div className="flex gap-2">
                <Link href={"./add-listing"}>
                    <Button> <Plus/> Post your add</Button>
                </Link>
                {authStatus ?
                    <Button variant={"outline"} onClick={() => router.push("/profile")}>
                        <User size={48} className={"text-primary text-2xl"}/>
                    </Button>
                    :
                    <Button variant="outline">Login</Button>}


            </div>
        </div>

    );
};

export default Header;