import { createContext, useState } from "react";
import DataService from "../utils/DataService";

export const EditContext = createContext<any>({});

interface EditProviderProps {
    children: React.ReactNode;
};

export function EditProvider({ children }: EditProviderProps) {
         
    const [name, setName] = useState<string>('');

    const image = "https://img.daisyui.com/images/profile/demo/3@94.webp";

    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    function getUserForEdit(id: number) {
        const editThe: any = new DataService().getUser(id);

        const user = {
            nome: editThe.name,
            image: '',
            company: editThe.company,
            role: editThe.role,
            verified: editThe.verified,
            status: editThe.status
        }

        sessionStorage.setItem('edit', JSON.stringify(user));
    }

    function loadSectionStorage() {        
        const localResult:any = sessionStorage.getItem('edit');
        const parse = JSON.parse(localResult);

        setName(parse.nome);
        // setImage('');
        setCompany(parse.company);
        setRole(parse.role);
        setVerified(parse.verified);
        setStatus(parse.status);
    }

    return (
        <EditContext.Provider value={{
            name, setName,
            image,
            company, setCompany,
            role, setRole,
            verified, setVerified,
            status, setStatus,

            getUserForEdit,

            loadSectionStorage
        }}>
            {children}
        </EditContext.Provider>
    )
}