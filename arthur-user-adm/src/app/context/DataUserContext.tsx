'use client';

import { createContext, useEffect, useState } from "react";
import DataService from "../utils/DataService";
import { useRouter } from "next/navigation";
import Routes from "../app.routing";

export const DataUserContext = createContext<any>({});

interface CreateUserProviderProps {
    children: React.ReactNode;
}

export function DataUserProvider({ children }: CreateUserProviderProps) {

    const router = useRouter();
    
    const [users, setUsers] = useState([{}]);

    const [name, setName] = useState<string>('');

    const image = "https://img.daisyui.com/images/profile/demo/3@94.webp";

    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');


    function handleSetName(event: any) {
        setName(event.target.value);
    };

    async function saveDataUser() {
        await new DataService().createUser(name, image, company, role, verified, status);
        // listAllUsers();
        router.push(Routes.list);
    };

    function handleSetCompany(event: any) {
        setCompany(event.target.value)
    };

    function handleSetRole(event: any) {
        setRole(event.target.value)
    }

    function handleSetVerified() {
        setVerified(!verified)
    };

    function handleSetStatus(event: any) {
        setStatus(event.target.value)
    };

    return (
        <DataUserContext.Provider value={{
            users,
            setUsers,
            setName,
            handleSetName,
            handleSetCompany,
            handleSetRole,
            handleSetVerified, verified, setVerified,
            handleSetStatus,
            saveDataUser
        }}>
            {children}
        </DataUserContext.Provider>
    )
}