'use client'

import DataService from "@/app/utils/DataService";
import { DotsCrud } from "../DotsCrud";
import { useEffect, useState } from "react";

type userAttributes = {
    id: number,
    name: string,
    company: string
    role: string,
    verified: string,
    status: string
}

/* const fakeUsers: userAttributes[] = [
    {
        id: 1,
        name: "Hart Hagerty",
        company: 'Windler Group',
        role: "UI Designer",
        verified: "yes",
        status: "active"
    },
    {
        id: 2,
        name: "Hart Hagerty",
        company: 'Reliance',
        role: "Front-end develop",
        verified: "Yes",
        status: "Active"
    }
] */

export function OldaTable() {

    const [dataService] = useState(new DataService());
    const [users, setUsers] = useState<userAttributes[]>([]);

    async function listUsers() {
        const allUsers = await dataService.getAllUsers();

        //  converte o objeto allUsers em uma matriz de pares chave-valor ([id, userData]), onde id é a chave e userData é o valor associado.
        const userList = Object.entries(allUsers)
            .map(([id, userData]) => {
                if (userData) {
                    const user = JSON.parse(userData);
                    return {                        
                        name: user.name,
                        company: user.company,
                        role: user.role,
                        verified: user.verified,
                        status: user.status
                    };
                }
                return null;
            }).filter(user => user !== null) as userAttributes[]; // Filtra valores nulos e ajusta o tipo

        setUsers(userList);
    };

    useEffect(() => {
        listUsers();
    }, [dataService]);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-slate-100">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Verified</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            {/* img */}
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {user.company}
                                </td>

                                <td>
                                    {user.role}
                                </td>

                                <td>
                                    {user.verified ? 'Yes' : 'No'}
                                </td>

                                <td>
                                    {user.status}
                                </td>

                                <th>
                                    {/* Assume DotsCrud is another component */}
                                    <DotsCrud />
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}