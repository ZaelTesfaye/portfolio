"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    loginAuth: boolean;
    setLoginAuth: React.Dispatch<React.SetStateAction<boolean>>;
    forSell: boolean;
    setForSell: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextType | null>(null);


export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [loginAuth, setLoginAuth] = useState<boolean>(true);
    const [forSell, setForSell]=useState(true);

    return (
        <AuthContext.Provider value={{ loginAuth, setLoginAuth, forSell, setForSell }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be called within AuthProvider");
    }
    return context;
};