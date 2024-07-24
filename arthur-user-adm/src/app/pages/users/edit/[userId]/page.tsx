'use client'

import Routes from "@/app/app.routing";
import { Header } from "@/app/components/Header";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import { EditContext } from "@/app/context/EditContext";
import DataService from "@/app/utils/DataService";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

interface USER {
    id: number;
    image: string;
    name: string;
    company: string;
    role: string;
}

export default function Edit() {

    const router = useRouter();

    const {
        loadSectionStorage,
        name,
        company,
        role,
        verified,
        status
    } = useContext(EditContext);

    useEffect(() => {
        loadSectionStorage()
    }, [])

    return (
        <main>
            <Header title={`Edit, ${name}`}>
                <button className='app-btn' onClick={() => router.push(Routes.list)}>
                    Save changes
                </button>
            </Header>
            <ul>
                <li>{name}</li>
                <li>{company}</li>
                <li>{role}</li>
                <li>{verified}</li>
                <li>{status}</li>                
            </ul>
        </main>
    )
}