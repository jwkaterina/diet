'use client'

import React, { FunctionComponent } from 'react';
import { SettingsSection } from './settings-section';
import { ProgressCell } from '../cells/progress-cell';

export const ProgressSection: FunctionComponent = (props) => {
    return (
        <SettingsSection>
            <h2>Progress Bar</h2>
            <div className="Settings__section-body Settings__time-grid">
                <ProgressCell count={8}>First Meal At:</ProgressCell>
                <ProgressCell count={9}>Last Meal At:</ProgressCell>
                <ProgressCell count={5}>Daily Meals Number:</ProgressCell>        
            </div>                
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}