'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { SwitchCell } from '../cells/switch-cell';

export const SwitchSection: FunctionComponent = (props) => {
    return (
        <SettingsSection>
            <h2>General</h2>
            <div className="Settings__section-body Settings__general-grid">
                <SwitchCell>Use Half Portions:</SwitchCell>
                <SwitchCell>Automatic Portions Reset:</SwitchCell>        
            </div>                
        </SettingsSection>
    )
}

export interface SwitchSectionProps {
    children: React.ReactNode;
}

