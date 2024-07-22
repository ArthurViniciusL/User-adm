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

    const [dataService] = useState(new DataService());
    const [allUsers, setAllUser] = useState([]);
    const [name, setName] = useState<string>('');


    const image = 'https://example.com/image.jpg';

    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    async function listAllUsers() {
        const Users = Object.entries(await dataService.getAllUsers())

        // console.log(dataService.getAllUsers())
        /*
        * Montando uma matriz de pares chave-valor ([id, dataStorage]), onde id é a chave e userData é
        * o valor associado para ser usado no map do componente de tabela
        */
        const listUsers: any = Users.map(([id, dataStorage]) => {
            if (dataStorage) {
                const user = JSON.parse(dataStorage);
                return {
                    id: user.id,
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
        setAllUser(listUsers);
    };

    useEffect(() => {
        listAllUsers();
    }, [dataService]);


    function handleSetName(event: any) {
        setName(event.target.value);
    };

    async function saveDataUser() {
        await dataService.createUser(name, image, company, role, verified, status);
        listAllUsers();
        //setVerified(false);
        router.push(Routes.list);
    };

    function handleSetCompany(event: any) {
        setCompany(event.target.value)
    };

    function handleSetRole(event: any) {
        setRole(event.target.value)
    }

    function handleSetVerified() {
        // setVerified(event.target.value);
        setVerified(!verified)
    };

    function handleSetStatus(event: any) {
        setStatus(event.target.value)
    };

    return (
        <DataUserContext.Provider value={{
            allUsers,
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