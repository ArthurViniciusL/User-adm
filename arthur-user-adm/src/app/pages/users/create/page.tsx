'use client';

import styles from './Create.module.css'

import DataService from '@/app/utils/DataService';
import { useState } from 'react';

import Routes from '@/app/app.routing';
import { useRouter } from 'next/navigation';
import { Header } from '@/app/components/Header';

export default function Create() {

    const router = useRouter();

    const [dataService] = useState(new DataService());

    const [name, setName] = useState('');

    const image = 'https://example.com/image.jpg';

    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [verified, setVerified] = useState(false);
    const [status, setStatus] = useState('');

    function handleSetName(name: any) {
        setName(name.target.value);
    };

    function handleSetCompany(company: any) {
        setCompany(company.target.value)
    };

    function handleSetRole(role: any) {
        setRole(role.target.value)
    }

    function handleSetVerified(verified: any) {
        setVerified(verified.target.value)
    };

    function handleSetStatus(status: any) {
        setStatus(status.target.value)
    };

    async function saveDataUser() {

        // const userName = name;
        // const company = 'Tech Corp';
        // const role = 'Developer';
        // const verified = true;
        // const status = 'Active';

        await dataService.createUser(name, image, company, role, verified, status);
        router.push(Routes.list);
    };


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