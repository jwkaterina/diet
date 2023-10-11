'use client'

import { useSettings, useSettingsDispatch} from '../../../context/settings-context'
import SettingsSection from './settings-section';
import SwitchCell from '../cells/switch-cell';

import styles from './section.module.css'

export default function SwitchSection(): JSX.Element {
    const settings = useSettings();
    const settingsDispatch = useSettingsDispatch();

    const handleHalfPortionsChange = () => {
        settingsDispatch({
            type: 'setHalfPortions',
        }); 
    }

    const handleAutoResetChange = () => {
        settingsDispatch({
            type: 'setAutoReset',
        }); 
    }

    return (
        <SettingsSection>
            <h2>General</h2>
            <div className={styles.grid}>
                <SwitchCell onChange={handleHalfPortionsChange} check={settings.halfPortions}>Use Half Portions:</SwitchCell>
                <SwitchCell onChange={handleAutoResetChange} check={settings.autoReset}>Automatic Portions Reset:</SwitchCell> 
            </div>       
        </SettingsSection>
    )
}

