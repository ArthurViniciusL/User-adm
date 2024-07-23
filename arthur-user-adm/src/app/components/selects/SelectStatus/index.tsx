import { CreateUserContext } from "@/app/context/CreateUserContext";
import { useContext } from "react"

export function SelectStatus() {

    const { handleSetStatus } = useContext(CreateUserContext);

    return (
        <select defaultValue="" onChange={handleSetStatus} className="select select-bordered w-full max-w-xs gap-2 m-5">
            <option value="" disabled>Select status *</option>
            <option value="Banned">Banned</option>
            <option value="Active">Active</option>
            <option value="Idle">Idle</option>
        </select>
    )
}