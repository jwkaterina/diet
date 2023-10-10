'use client'

import styles from './nav-bar.module.css'
import Link from 'next/link'

interface NavBarProps {
    onMenuClick: () => void,
    onClearClick: () => void
}

export default function NavBar({ onMenuClick, onClearClick}: NavBarProps): JSX.Element {

    return (
        <header className={styles.header}>
            <div className={styles.app_title}>
                <Link className={styles.icon} href="/"></Link>
                <h1> My Diet</h1>
            </div>
            <button className={styles.toggle} id="menu-toggle" onClick={onMenuClick}>
                <span className={styles.hamburger}></span>
            </button>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a className={styles.link} href="/">Main</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="/calories">Calories</a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="/settings">Settings</a>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.link} onClick={onClearClick}>Clear Portions</span>
                    </li>
                </ul>
            </div>
        </header>
        )
}