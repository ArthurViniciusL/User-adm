'use client'
import '@/app/styles/globals.css';
import { Header } from "@/app/components/Header";
import { EditContext } from "@/app/context/EditContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";


export default function Edit() {

    const router = useRouter();

    const {
        id, name, company, role, verified, status,
        loadSectionStorage,
        saveUserEdition,
        handleEditImage,
        handleEditName,
        handleEditCompany,
        handleEditRole,
        handleEditStatus,
        handleEditVerified
    } = useContext(EditContext);


    useEffect(() => {
        loadSectionStorage()
    }, []);

    return (
        <main>
            <Header title={`Edit`}>
                <button className='app-btn' onClick={saveUserEdition}>
                    Save changes
                </button>
            </Header>
            <section className="">
                < div className="ContentBox p-2">

                    <label onChange={handleEditImage} className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input type="text" className="grow" placeholder="Image" />
                    </label>

                    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input type="text" className="grow" value={name} onChange={handleEditName} />
                    </label>

                    <select value={company} onChange={handleEditCompany} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="Hemakes">Hemakes</option>
                        <option value="Wemake">Wemake</option>
                        <option value="Youmake">Youmake</option>
                    </select>

                    <select value={role} onChange={handleEditRole} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="" disabled>What is the role? *</option>
                        <option value="UI Designer">UI Designer</option>
                        <option value="Hr Manager">Hr Manager</option>
                        <option value="Leader">Leader</option>
                        <option value="Developer">Developer</option>
                    </select>

                    <select value={status} onChange={handleEditStatus} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="Banned">Banned</option>
                        <option value="Active">Active</option>
                        <option value="Idle">Idle</option>
                    </select>

                    <div className='flex justify-center gap-4'>
                        <label className="ml-2">
                            Verified
                        </label>

                        <input type="checkbox" className="toggle" checked={verified} onChange={handleEditVerified} />
                    </div>
                </div>
            </section>

        </main>
    )
}