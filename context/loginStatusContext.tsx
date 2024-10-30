"use client"

import {createContext, useContext, useState} from "react";

const LoginStatusContext = createContext(null)


export const LoginStatusProvider = ({children}) => {

    const [loginStatus, setLoginStatus] = useState(false)

    return (
        <LoginStatusContext.Provider value={{loginStatus, setLoginStatus}}>
            {children}
        </LoginStatusContext.Provider>
    )
}

export const useLoginStatus = () => {

    const context = useContext(LoginStatusContext)

    if (!context) {
        throw new Error("useLoginStatus must be called within LoginStatusProvider")
    }

    return context
}