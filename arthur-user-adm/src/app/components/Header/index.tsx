'use client'
import styles from './Header.module.css';;

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

export function Header({title, children}: HeaderProps) {
    return (
        <header className={styles.appHeader}>
            <h1>{title}</h1>
            {children}
        </header>
    )
}