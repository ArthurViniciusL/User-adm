'use client';

import styles from './Create.module.css';

import { Header } from '@/app/components/Header';
import { DataUserContext } from '@/app/context/DataUserContext';
import { useContext, useEffect } from 'react';

export default function Create() {

    const {
        saveDataUser,
        handleSetName,
        handleSetCompany,
        handleSetRole,
        handleSetVerified, verified, setVerified,
        handleSetStatus
    } = useContext(DataUserContext)

    useEffect(() => {
        setVerified(false);
    }, [])

    return (
        <main>
            <Header title="User Registration" >
                <button className="app-btn" onClick={saveDataUser}>Save</button>
            </Header>
            <section className="">
                < div className={`${styles.createUserContent} p-2`}>

                    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
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

                    {/* defaultChecked */}
                    {/* <input type="checkbox" className="toggle" /> */}

                    <select defaultValue="" onChange={handleSetStatus} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option value="" disabled>Select status *</option>
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