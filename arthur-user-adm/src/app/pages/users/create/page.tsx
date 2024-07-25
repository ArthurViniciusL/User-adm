'use client';
import '@/app/styles/globals.css';

import { Header } from '@/app/components/Header';
import { CreateUserContext } from '@/app/context/CreateUserContext';
import { useContext, useEffect } from 'react';

export default function Create() {

    const {
        clearStates,
        saveDataUser,
        handleSetImage,
        handleSetName,
        handleSetCompany,
        handleSetRole,
        handleSetStatus,
        handleSetVerified, verified,
    } = useContext(CreateUserContext)

    useEffect(() => {
        clearStates();
    }, []);

    return (
        <main>
            <Header title="User Registration" >
                <button className="app-btn" onClick={saveDataUser}>Save</button>
            </Header>
            <section className="">
                < div className="ContentBox p-2">

                    <label onChange={handleSetImage} className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input type="text" className="grow" placeholder="Image" />
                    </label>

                    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input onChange={handleSetName} type="text" className="grow" placeholder="Name *" />
                    </label>

                    <select defaultValue="" onChange={handleSetCompany} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="" disabled>Select company *</option>
                        <option value="Hemakes">Hemakes</option>
                        <option value="Wemake">Wemake</option>
                        <option value="Youmake">Youmake</option>
                    </select>

                    <select defaultValue="" onChange={handleSetRole} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="" disabled>What is the role? *</option>
                        <option value="UI Designer">UI Designer</option>
                        <option value="Hr Manager">Hr Manager</option>
                        <option value="Leader">Leader</option>
                        <option value="Developer">Developer</option>
                    </select>

                    <select value="" onChange={handleSetStatus} className="select select-bordered w-full max-w-xs gap-2 m-5">
                    <option value="" disabled>What is the status*</option>
                        <option value="Banned">Banned</option>
                        <option value="Active">Active</option>
                        <option value="Idle">Idle</option>
                    </select>

                    <div className='flex justify-center gap-4'>
                        <label className="ml-2">
                            Verified
                        </label>

                        <input type="checkbox" className="toggle" checked={verified} onChange={handleSetVerified} />
                    </div>
                </div>
            </section>
        </main>
    )
}