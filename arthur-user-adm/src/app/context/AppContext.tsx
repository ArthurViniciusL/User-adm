'use client'
import { createContext, useContext } from "react";
import { CreateUserContext, CreateUserProvider } from "./CreateUserContext";
import { EditProvider } from "./EditContext";


export const AppContext = createContext<any>({});

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <AppContext.Provider value={{}}>
            <CreateUserProvider>
                <EditProvider>
                    {children}
                </EditProvider>
            </CreateUserProvider>
        </AppContext.Provider>
    );
}