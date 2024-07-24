import { useContext } from 'react';
import styles from './SearchBar.module.css';
import { Search } from "lucide-react";
import { CreateUserContext } from '@/app/context/CreateUserContext';
export function SearchBar() {

    const { name, setName } = useContext(CreateUserContext);

    function handleSearch(event:any) {
        setName(event.target.value);
    }

    return (
        <div className={styles.SearchBar}>
            <label className="input max-w-80 input-bordered flex items-center gap-4">
                <Search size={20} />
                <input onChange={handleSearch} type="text" className="grow" placeholder="Search user..." />
            </label>
        </div>
    )
}