import { createContext, useState } from "react";
import DataService from "../utils/DataService";
import { useRouter } from "next/navigation";
import Routes from "../app.routing";

export const EditContext = createContext<any>({});

interface EditProviderProps {
    children: React.ReactNode;
};

export function EditProvider({ children }: EditProviderProps) {
    
    const router = useRouter();

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>('');

    const image = "https://img.daisyui.com/images/profile/demo/3@94.webp";

    const [company, setCompany] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    function getUserForEdit(id: number) {
        const editThe: any = new DataService().getUser(id);

        const user = {
            id: id,
            nome: editThe.name,
            image: '',
            company: editThe.company,
            role: editThe.role,
            verified: editThe.verified,
            status: editThe.status
        }

        sessionStorage.setItem('edit', JSON.stringify(user));
    };

    function loadSectionStorage() {
        const localResult: any = sessionStorage.getItem('edit');
        const parse = JSON.parse(localResult);

        setId(parse.id);
        setName(parse.nome);
        // setImage('');
        setCompany(parse.company);
        setRole(parse.role);
        setVerified(parse.verified);
        setStatus(parse.status);
    };

    function handleEditName(event: any) {
        setName(event.target.value)
    };

    function handleEditCompany(event: any) {
        setCompany(event.target.value)
    };

    function handleEditRole(event: any) {
        setRole(event.target.value)
    };

    function handleEditVerified() {
        setVerified(!verified);
    };

    function handleEditStatus(event:any) {
        setStatus(event.target.value)
    }
    
    async function saveUserEdition() {
        await new DataService().patchUser(id, name, image, company, role, verified, status);
        router.push(Routes.list);
    }

    return (
        <EditContext.Provider value={{
            id,
            name, setName,
            image,
            company, setCompany,
            role, setRole,
            verified, setVerified,
            status, setStatus,
            
            handleEditName,
            handleEditCompany,
            handleEditRole,

            handleEditVerified,
            handleEditStatus,

            getUserForEdit,
            loadSectionStorage,
            saveUserEdition
        }}>
            {children}
        </EditContext.Provider>
    )
}