'use client'

import styles from './page.module.css'
import SwitchSection from './component/section/switch-section'
import PortionsSection from './component/section/portions-section'
import ProgressSection from './component/section/progress-section'

export default function Settings(): JSX.Element {
    return (
    <div className={styles.container}>
        <SwitchSection/>
        <PortionsSection/>
        <ProgressSection/>
    </div>
    )
}