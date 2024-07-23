'use client'
import { createContext } from "react";
import { CreateUserProvider } from "./CreateUserContext";


export const AppContext = createContext<any>({});

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{}}>
            <CreateUserProvider>
                {children}
            </CreateUserProvider>
        </AppContext.Provider>
    );
}