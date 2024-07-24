import Routes from "@/app/app.routing";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import DataService from "@/app/utils/DataService";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface DotsCrudProps {
    userId: any;
    userName?: any;
}

export function DotsCrud({ userId, userName }: DotsCrudProps) {

    const routers = useRouter();
    const { setName } = useContext(CreateUserContext)

    const [dataService] = useState(new DataService());

    // new DataService().getUser(2);

    /**
     * TALVEZ APLICAR UM MAP EM CIMA DE USER, SEGUIDO DE UM FILTER POR ID IGUAL AO USERID
    */

    return (
        <div className="dropdown dropdown-left dropdown-end">

            <button tabIndex={0} role="button" className="btn p-2 m-1 bg-white border-0">
                <EllipsisVertical size={20} />
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <button onClick={() => { routers.push(Routes.userEdit(userId)), setName(userName) }}>
                        Edit
                    </button>
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