export type USER = {
    id: number,
    name: string;
    image: string;
    role: string;
    verified: boolean;
    status: string;
    company: string
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

    public getAllUsers() {
        const DATA_LOCAL_STORAGE: {
            [key: string]: string | null
        } = {};

        for (let i = 1; i <= DataService.id; i++) {
            DATA_LOCAL_STORAGE[String(i)] = window.localStorage.getItem(String(i));
        }
        return DATA_LOCAL_STORAGE;
    }

    public getUser(userId: number): USER | null {
        const userData = window.localStorage.getItem(String(userId));
        if (userData) {
            return JSON.parse(userData);
        }
        return null;
    }

    public createUser(name: string, image: string, company: string, role: string, verified: boolean, status: string) {
        DataService.id++;
        const id = DataService.id;
        const data = JSON.stringify({
            id: id,
            name,
            image,
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