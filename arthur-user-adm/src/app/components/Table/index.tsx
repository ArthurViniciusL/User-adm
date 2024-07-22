import { useContext, useEffect, useState } from "react";
import { DotsCrud } from "../DotsCrud";
import { DataUserContext } from "@/app/context/DataUserContext";

export function Table() {

    const { allUsers } = useContext(DataUserContext);

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
                        allUsers.map((user: any, index: number) => (
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
                                    <DotsCrud userId={user.id} />
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}