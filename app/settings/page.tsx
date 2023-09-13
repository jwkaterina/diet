'use client'

import styles from './page.module.css'
import { SwitchSection } from './component/section/switch-section'
import { PortionsSection } from './component/section/portions-section'
import { ProgressSection } from './component/section/progress-section'

export default function Settings() {
    return (
    <div className={styles.SettingsPage}>
        <SwitchSection/>
        <PortionsSection/>
        <ProgressSection/>
    </div>
    )
}