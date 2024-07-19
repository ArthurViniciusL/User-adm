import { DotsCrud } from "../DotsCrud";

type userAttributes = {
    id: number,
    name: string,
    country: string,
    job: string,
    favorite_color: string
}

const users: userAttributes[] = [
    {
        id: 1,
        name: "Hart Hagerty",
        country: "United States",
        job: "Zemlak, Daniel and Leannon",
        favorite_color: "Purple"
    },
    {
        id: 2,
        name: "Arthur",
        country: "Brasil",
        job: "Your Job Here",
        favorite_color: "Black"
    }
]



export function Table() {
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
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(users).map(([key, user]) => (
                            <tr key={key}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.country}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {user.job}
                                </td>

                                <td>{user.favorite_color}</td>
                                <th>
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