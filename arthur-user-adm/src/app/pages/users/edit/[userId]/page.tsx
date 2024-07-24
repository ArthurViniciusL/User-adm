'use client'

import Routes from "@/app/app.routing";
import { Header } from "@/app/components/Header";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Edit() {

    const router = useRouter();

    const {
        name
    } = useContext(CreateUserContext);
    
    return (
        <main>
            <Header title="Edit">
                <h1>Olá, {name}</h1>

                <button className='app-btn' onClick={() => router.push(Routes.list)}>
                    Save changes
                </button>
            </Header>

        </main>
    )
}