'use client'

import React, {ReactNode} from 'react';
import Header from "@/components/header";
import {useRouter} from "next/router";

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Provider;
