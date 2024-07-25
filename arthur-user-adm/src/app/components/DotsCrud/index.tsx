import Routes from "@/app/app.routing";
import { EditContext } from "@/app/context/EditContext";
import DataService from "@/app/utils/DataService";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface DotsCrudProps {
    userId: any;
    userName?: any;
}

export function DotsCrud({ userId, userName }: DotsCrudProps) {

    const routers = useRouter();
    const [dataService] = useState(new DataService());

    const { getUserForEdit } = useContext(EditContext);

    return (
        <div className="dropdown dropdown-left dropdown-end">

            <button tabIndex={0} role="button" className="btn p-2 m-1 bg-white border-0">
                <EllipsisVertical size={20} />
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <button onClick={() => { getUserForEdit(userId), routers.push(Routes.userEdit(userId)) }}>
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