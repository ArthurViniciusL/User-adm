interface StatusTagProps {
    status: string;
}

export function StatusTag({ status }: StatusTagProps) {
    switch (status) {
        case "Banned":
            return (
                <span className="bg-red-200 text-red-700 rounded-md w-fit p-2 font-bold">
                    Banned
                </span>
            );
            break;

        case "Active":
            return (
                <span className="bg-green-200 text-green-700 rounded-md w-fit p-2 font-bold">
                    Active
                </span>
            );
            break;

        case "Idle":
            return (
                <span className="bg-slate-300 text-slate-700 rounded-md w-fit p-2 font-bold">
                    Idle
                </span>
            );
            break;

        default:
            return (
                <span className="bg-slate-300 text-slate-700 rounded-md w-fit p-2 font-bold">
                    No status
                </span>
            )
            break;
    }
}