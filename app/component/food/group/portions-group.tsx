'use client'

import styles from './portions-group.module.css'
import { useSettings } from '@/app/context/settings-context';

interface PortionsGroupProps {
    title: string,
    calories: number,
    checked: number,
    children: React.ReactNode,
    onPlusClick: () => void
}

export default function PortionsGroup({ title, calories, checked, children, onPlusClick}: PortionsGroupProps): JSX.Element {
    const settings = useSettings();

    if(settings.halfPortions) {
        checked = checked / 2;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3 className={styles.checked}>{checked}</h3>
                    <h3 className={styles.calories_hint}>x{calories}k</h3>
                    <h3>{title}</h3>
                    <div className={styles.plus_btn} onClick={onPlusClick}></div>
                </div>         
                <div className={styles.portions}>
                    {children}
                </div>        
            </div>
        </div>  
    )  
}