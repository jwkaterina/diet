'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { SectionBody} from './section-body';
import { PortionsCell } from '../cells/portions-cell';

export const PortionsSection: FunctionComponent = (props) => {
    return (
        <SettingsSection>
            <div className="Settings__section-title">
                <h2>Portions</h2>
                <h2>1210 k</h2>
            </div>
            <SectionBody>
                <PortionsCell count={3}>FRUITS:</PortionsCell>
                <PortionsCell count={4}>VEGGIES:</PortionsCell>
                <PortionsCell count={4}>CARBS:</PortionsCell>
                <PortionsCell count={4}>PROTS:</PortionsCell>
                <PortionsCell count={3}>FATS:</PortionsCell>
                <PortionsCell count={1}>SWEETS:</PortionsCell>
            </SectionBody>
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}