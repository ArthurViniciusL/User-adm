'use client';

import { createContext, useState } from "react";
import DataService from "../utils/DataService";
import { useRouter } from "next/navigation";
import Routes from "../app.routing";

export const DataUserContext = createContext<any>({});

interface CreateUserProviderProps {
    children: React.ReactNode;
}

export function DataUserProvider({ children }: CreateUserProviderProps) {

    const [dataService] = useState(new DataService());
    const router = useRouter();

    const [name, setName] = useState('');

    const image = 'https://example.com/image.jpg';

    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    function handleSetName(event: any) {
        setName(event.target.value);
    };

    function handleSetCompany(event: any) {
        setCompany(event.target.value)
    };

    function handleSetRole(event: any) {
        setRole(event.target.value)
    }

    function handleSetVerified(event: any) {
        setVerified(event.target.value)
    };

    function handleSetStatus(event: any) {
        setStatus(event.target.value)
    };

    async function saveDataUser() {
        await dataService.createUser(name, image, company, role, verified, status);
        router.push(Routes.list);
    };

    return (
        <DataUserContext.Provider value={{handleSetName, handleSetCompany, handleSetRole, verified, handleSetVerified, handleSetStatus, saveDataUser}}>
            {children}
        </DataUserContext.Provider>
    )
}