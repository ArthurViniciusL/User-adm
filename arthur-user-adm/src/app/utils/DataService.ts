export type USER = {
    id: number,
    image: string;
    name: string;
    company: string;
    role: string;
    verified: boolean;
    status: string;
}

export default class DataService {

    private static id: number;

    constructor() {
        if (typeof window !== 'undefined') {
            const localStorage = window.localStorage.getItem('lastId');
            DataService.id = Number(localStorage) || 0;
        } else {
            DataService.id = 0;
        }
    }

    public getUsers() {
        const dataLocalStorage: { [key: string]: string | null } = {};
        for (let i = 1; i <= DataService.id; i++) {
            dataLocalStorage[String(i)] = window.localStorage.getItem(String(i));
        }
        return dataLocalStorage;
    }

    public getUser(userId: number): USER | null {
        if (typeof window !== 'undefined') {
            const userData = window.localStorage.getItem(String(userId));
            if (userData) {
                return JSON.parse(userData);

            }
        }
        return null;
    }

    public createUser(name: string, image: string, company: string, role: string, verified: boolean, status: string) {
        DataService.id++;
        const id = DataService.id;
        const data = JSON.stringify({
            id: id,
            image,
            name,
            company,
            role,
            verified,
            status,
        });

        let updateId = window.localStorage.setItem('lastId', String(DataService.id));
        let insertData = window.localStorage.setItem(String(DataService.id), data);
    }

    public deleteUser(userId: number): void {
        window.localStorage.removeItem(String(userId));
    }
}
