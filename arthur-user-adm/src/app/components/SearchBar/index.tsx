import styles from './SearchBar.module.css';
import { Search } from "lucide-react";
export function SearchBar() {
    return (
        <div className={styles.SearchBar}>
            <label className="input max-w-80 input-bordered flex items-center gap-4">
                <Search size={20}/>
                <input type="text" className="grow" placeholder="Search user..." />   
            </label>
        </div>
    )
}