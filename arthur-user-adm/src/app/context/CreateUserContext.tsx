'use client';

import { createContext, useEffect, useState } from "react";
import DataService from "../utils/DataService";
import { useRouter } from "next/navigation";
import Routes from "../app.routing";

export const CreateUserContext = createContext<any>({});

interface CreateUserProviderProps {
    children: React.ReactNode;
}

export function CreateUserProvider({ children }: CreateUserProviderProps) {

    const router = useRouter();

    const [users, setUsers] = useState<any>([])
    const [image, setImage] = useState('');
    const [name, setName] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    // async
    function getUsers() { // await
        const Users = Object.entries(new DataService().getUsers())
        /*
        * Montando uma matriz de pares chave-valor ([id, dataStorage]), onde id é a chave e userData é
        * o valor associado para ser usado no map do componente de tabela
        */
        const usersList: any = Users.map(([key, dataStorage]) => {
            if (dataStorage) {
                const user = JSON.parse(dataStorage);
                return {
                    id: user.id,
                    image: user.image,
                    name: user.name,
                    company: user.company,
                    role: user.role,
                    verified: user.verified,
                    status: user.status
                };

            } else {
                return null;
            }
        })
        setUsers(usersList);
    };

    function handleSetImage(event:any) {
        setImage(event.target.value)
    }
    
    function handleSetName(event: any) {
        setName(event.target.value);
    };

    function handleSetCompany(event: any) {
        setCompany(event.target.value);
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

    async function saveDataUser() {
        await new DataService().postUser(name, image, company, role, verified, status);
        router.push(Routes.list);
    };

    function clearStates() {
        setName('');
        setImage('');
        setCompany('');
        setRole('');
        setVerified(false);
        setStatus('');
    };

    return (
        <CreateUserContext.Provider value={{
            users, getUsers,
            name, setName,
            handleSetImage,
            handleSetName,
            handleSetCompany,
            handleSetRole,
            handleSetVerified, setVerified,
            handleSetStatus,
            saveDataUser,
            clearStates
        }}>
            {children}
        </CreateUserContext.Provider>
    )
}