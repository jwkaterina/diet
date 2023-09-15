'use client'

import React, { FunctionComponent, useContext } from 'react';
import {SettingsContext} from '../../../context/settings-context'
import { SettingsSection } from './settings-section';

export const SwitchSection: FunctionComponent = (props) => {
    const {settings, setSettings} = useContext(SettingsContext);

    const handleHalfPortionsChange = () => {
        setSettings({...settings, halfPortions: !settings.halfPortions})
    }

    const handleAutoResetChange = () => {
        setSettings({...settings, autoReset: !settings.autoReset})
    }

    return (
        <SettingsSection>
            <h2>General</h2>
            <div className="Settings__section-body Settings__general-grid">
                <h3 className="Settings__units-cell">Use Half Portions:</h3>
                <label className="Settings__switch Settings__controls-cell">
                    <input type="checkbox" onChange={handleHalfPortionsChange}></input>
                    <span className="Settings__switch-slider Settings__switch-round"></span>
                </label>   
                    <h3 className="Settings__units-cell">Automatic Portions Reset:</h3>
                <label className="Settings__switch Settings__controls-cell">
                    <input type="checkbox" onChange={handleAutoResetChange}></input>
                    <span className="Settings__switch-slider Settings__switch-round"></span>
                </label>   
            </div>       
        </SettingsSection>
    )
}

export interface SwitchSectionProps {
    children: React.ReactNode;
}

