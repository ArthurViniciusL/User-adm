import { useContext, useEffect, useState } from "react";
import { DotsCrud } from "../DotsCrud";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import { StatusTag } from "../StatusTag";
import Image from "next/image";
import { CircleUserRound, UserCircle, UserCircle2, UserRound } from "lucide-react";

export function Table() {

    const { users, name } = useContext(CreateUserContext);

    /*  
    useEffect(() => {
        getUsers();
    }, []); */

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
                        users.map((user: any, index: number) => (user) && (
                            <tr key={index}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            {
                                            user.image === '' ? <CircleUserRound size={30} /> :
                                                <img src={user.image} width={40} alt={`${user.name} picture`}/>
                                            }
                                        </div>

                                        <div className="font-bold">{user.name === null ? '' : user.name}</div>
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
                                    <StatusTag status={user.status} />
                                </td>

                                <td>
                                    <DotsCrud userId={user.id} userName={user.na} />
                                </td>
                            </tr>
                        )
                        )

                    }
                </tbody>
            </table>
        </div>
    )

}