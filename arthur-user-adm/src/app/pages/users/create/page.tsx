'use client';

import DataService from '@/app/utils/DataService';
import { useState } from 'react';

import Routes from '@/app/app.routing';
import { useRouter } from 'next/navigation';
import { Header } from '@/app/components/Header';

export default function Create() {

    const router = useRouter();
    const [dataService] = useState(new DataService());

    const [userName, setUserName] = useState('');

    function handleSetName(e: any) {
        setUserName(e.target.value)
    }

    async function handleClick() {

        // const userName = name;
        const image = 'https://example.com/image.jpg';
        const role = 'Developer';
        const verified = true;
        const status = 'Active';
        const company = 'Tech Corp';

        await dataService.createUser(userName, image, role, verified, status, company);
        router.push(Routes.list)

    };



    return (
        <main>
            <Header title="User Registration" >
                <button className="app-btn" onClick={handleClick}>Save</button>
            </Header>
            <section>
                {/*  <h1>User Registration</h1> */}
                <div>
                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input type="text" className="grow" placeholder="Image" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input onChange={handleSetName} type="text" className="grow" placeholder="Name" />

                    </label>

                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input type="text" className="grow" placeholder="Company" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input type="text" className="grow" placeholder="Role" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input type="text" className="grow" placeholder="Verified" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 m-5">
                        <input type="text" className="grow" placeholder="Status" />
                    </label>

                </div>
            </section>
        </main>
    )
}