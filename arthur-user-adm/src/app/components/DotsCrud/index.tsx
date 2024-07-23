import Routes from "@/app/app.routing";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import DataService from "@/app/utils/DataService";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
interface DotsCrudProps {
    userId: any;
}

export function DotsCrud({ userId }: DotsCrudProps) {

    const [dataService] = useState(new DataService());


    return (
        <div className="dropdown dropdown-left dropdown-end">
            <button tabIndex={0} role="button" className="btn p-2 m-1 bg-white border-0">
                <EllipsisVertical size={20} />
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <Link href={Routes.userEdit(userId)} >
                        <button>
                            Edit
                        </button>
                    </Link>
                </li>
                <li>
                    <button onClick={() => { dataService.deleteUser(userId), window.location.reload() }} >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    )
}