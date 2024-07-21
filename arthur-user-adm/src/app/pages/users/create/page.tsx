'use client';

import styles from './Create.module.css';

import { Header } from '@/app/components/Header';
import { DataUserContext } from '@/app/context/DataUserContext';
import { useContext } from 'react';

export default function Create() {

    const {
        handleSetName,
        handleSetCompany,
        handleSetRole,
        verified, handleSetVerified,
        handleSetStatus,
        saveDataUser
    } = useContext(DataUserContext)

    return (
        <main>
            <Header title="User Registration" >
                <button className="app-btn" onClick={saveDataUser}>Save</button>
            </Header>
            <section className="">
                <div className={`${styles.createUserContent} p-2`}>

                    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input type="text" className="grow" placeholder="Image" />
                    </label>

                    <label className="input input-bordered flex items-center w-full max-w-xs gap-2 m-5">
                        <input onChange={handleSetName} type="text" className="grow" placeholder="Name *" />
                    </label>

                    <select onChange={handleSetCompany} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option disabled selected>Select company *</option>
                        <option value="Hemakes">Hemakes</option>
                        <option value="Wemake">Wemake</option>
                        <option value="Youmake">Youmake</option>
                    </select>

                    <select onChange={handleSetRole} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option disabled selected>What is the role? *</option>
                        <option value="UI Designer">UI Designer</option>
                        <option value="Hr Manager">Hr Manager</option>
                        <option value="Leader">Leader</option>
                        <option value="Developer">Developer</option>
                    </select>

                    {/* defaultChecked */}
                    {/* <input type="checkbox" className="toggle" /> */}

                    <select onChange={handleSetStatus} className="select select-bordered w-full max-w-xs gap-2 m-5">
                        <option disabled selected>Select status *</option>
                        <option value="Banned">Banned</option>
                        <option value="Active">Active</option>
                        <option value="Idle">Idle</option>
                    </select>

                    <div className='flex justify-center'>
                        <input type="checkbox" className="toggle" checked={verified} onChange={handleSetVerified} />
                        <label className="ml-2">
                            Is Verified?
                        </label>
                    </div>


                </div>
            </section>
        </main>
    )
}