'use client'

import Routes from "@/app/app.routing";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";

export default function Edit() {
    const router = useRouter()
    return (
        <main>
            <Header title="Edit">
                <button className='app-btn' onClick={() => router.push(Routes.list)}>
                    Save changes
                </button>
            </Header>

        </main>
    )
}