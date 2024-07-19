import { DotSquareIcon, EllipsisVertical } from "lucide-react";

export function DotsCrud() {
    return (
        <div className="dropdown dropdown-left dropdown-end">
            <button tabIndex={0} role="button" className="btn p-2 m-1 bg-white border-0">
                <EllipsisVertical size={20}/>
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}