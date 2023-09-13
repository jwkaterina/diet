'use client'

import './section.css'

import React, {FunctionComponent} from 'react';

export const SettingsSection: FunctionComponent<SettingsSectionProps> = (props: SettingsSectionProps) => {
    return (
        <div className="Settings__section">
            {props.children}
        </div>
    )
}

export interface SettingsSectionProps {
    children: React.ReactNode;
}