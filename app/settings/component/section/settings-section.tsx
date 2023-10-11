'use client'

import styles from  './section.module.css'

interface SettingsSectionProps {
    children: React.ReactNode;
}

export default function SettingsSection({ children }: SettingsSectionProps): JSX.Element {
    
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}