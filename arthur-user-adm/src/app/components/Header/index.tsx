import { Plus } from 'lucide-react'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>User</h1>
            <button className={styles.headButton}>
                <Plus />
                New User
            </button>
        </header>
    )
}