'use client'

import styles from './calories.module.css'

interface CaloriesSectionProps {
    children: React.ReactNode;
}

export default function CaloriesSection({ children }: CaloriesSectionProps): JSX.Element {

    return (
        <div className={styles.section}>
            { children }
        </div>
    )
}