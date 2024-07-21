'use client'
import { createContext } from "react";
import { DataUserProvider } from "./DataUserContext";


export const AppContext = createContext<any>({});

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{}}>
            <DataUserProvider>
                {children}
            </DataUserProvider>
        </AppContext.Provider>
    );
}