'use client'
import React from 'react';
import {CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/context/AuthContextProvider";

const AuthMode = () => {
    const {loginAuth, setLoginAuth} = useAuth();
    return (
        <div>
            <CardTitle className="text-2xl">
                <Button
                    variant={"outline"}
                    onClick={() => setLoginAuth(true)}
                    className={`font-medium text-base hover:text-blue-800 pl-0 ${loginAuth && "text-lg text-blue-800"}`}> Login</Button>
                <Button
                    variant={"outline"}
                    onClick={() => setLoginAuth(false)}
                    className={`font-medium text-base hover:text-blue-800 pl-0 ${!loginAuth && "text-lg text-blue-800"}`}> Signup</Button>
            </CardTitle>
        </div>
    );
};

export default AuthMode;