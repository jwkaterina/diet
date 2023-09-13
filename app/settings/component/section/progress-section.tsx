'use client'

import React, { FunctionComponent } from 'react';
import { SettingsSection } from './settings-section';
import { SectionBody} from './section-body';
import { ProgressCell } from '../cells/progress-cell';

export const ProgressSection: FunctionComponent = (props) => {
    return (
        <SettingsSection>
            <h2>Progress Bar</h2>
            <SectionBody>
                <ProgressCell count={8}>First Meal At:</ProgressCell>
                <ProgressCell count={9}>Last Meal At:</ProgressCell>
                <ProgressCell count={5}>Daily Meals Number:</ProgressCell>
            </SectionBody>
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}