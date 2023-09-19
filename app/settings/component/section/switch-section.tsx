'use client'

import React, { FunctionComponent, useContext } from 'react';
import {SettingsContext} from '../../../context/settings-context'
import SettingsSection from './settings-section';

export default function SwitchSection(): JSX.Element {
    const { settings, dispatchSettings } = useContext(SettingsContext);

    const handleHalfPortionsChange = () => {
        dispatchSettings({
            type: 'setHalfPortions',
        }); 
    }

    const handleAutoResetChange = () => {
        dispatchSettings({
            type: 'setAutoReset',
        }); 
    }

    return (
        <SettingsSection>
            <h2>General</h2>
            <div className="Settings__section-body Settings__general-grid">
                <h3 className="Settings__units-cell">Use Half Portions:</h3>
                <label className="Settings__switch Settings__controls-cell">
                    <input type="checkbox" onChange={handleHalfPortionsChange} checked={settings.halfPortions}></input>
                    <span className="Settings__switch-slider Settings__switch-round"></span>
                </label>   
                    <h3 className="Settings__units-cell">Automatic Portions Reset:</h3>
                <label className="Settings__switch Settings__controls-cell">
                    <input type="checkbox" onChange={handleAutoResetChange} checked={settings.autoReset}></input>
                    <span className="Settings__switch-slider Settings__switch-round"></span>
                </label>   
            </div>       
        </SettingsSection>
    )
}

