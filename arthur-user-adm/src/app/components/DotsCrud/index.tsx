import DataService from "@/app/utils/DataService";
import { DotSquareIcon, EllipsisVertical } from "lucide-react";
import { useState } from "react";

export function DotsCrud() {

    const [dataService] = useState(new DataService());

    return (
        <div className="dropdown dropdown-left dropdown-end">
            <button tabIndex={0} role="button" className="btn p-2 m-1 bg-white border-0">
                <EllipsisVertical size={20} />
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                    <button>
                        Edit
                    </button>
                </li>
                <li>
                    <button onClick={() => dataService.deleteUser(1)} >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    )
}