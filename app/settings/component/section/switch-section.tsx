'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { SectionBody} from './section-body';
import { SwitchCell } from '../cells/switch-cell';

export const SwitchSection: FunctionComponent = (props) => {
    return (
        <SettingsSection>
            <h2>General</h2>
            <SectionBody>
                <SwitchCell>Use Half Portions:</SwitchCell>
                <SwitchCell>Automatic Portions Reset:</SwitchCell>
            </SectionBody>
        </SettingsSection>
    )
}

export interface SwitchSectionProps {
    children: React.ReactNode;
}

