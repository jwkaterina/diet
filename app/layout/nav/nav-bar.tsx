'use client'

import styles from './nav-bar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCalculator, faBroom } from '@fortawesome/free-solid-svg-icons'

interface NavBarProps {
    onClearClick: () => void
}

export default function NavBar({onClearClick}: NavBarProps): JSX.Element {

    return (
        <header className={styles.header}>
            <Link className={styles.app_title} href="/">
                <i className={styles.main_icon}></i>
                <h1> My Diet</h1>
            </Link>
            <div className={styles.controls}>
                <Link href="/calculator" className={styles.link}>
                    <FontAwesomeIcon icon={faCalculator} className={styles.icon}/>
                </Link>
                <Link href="/settings" className={styles.link}>
                    <FontAwesomeIcon icon={faGear}className={styles.icon}/>            
                </Link>
                <Link href="" className={styles.link}>
                    <FontAwesomeIcon icon={faBroom} onClick={onClearClick} className={styles.icon}/>
                </Link>
            </div>
        </header>
        )
}