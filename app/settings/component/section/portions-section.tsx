'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { PortionsCell } from '../cells/portions-cell';
import { PortionsContext } from '../../../context/portions-context';

export const PortionsSection: FunctionComponent = (props) => {
    const portions = useContext(PortionsContext).portions;

    return (
        <SettingsSection>
            <div className="Settings__section-title">
                <h2>Portions</h2>
                <h2>1210 k</h2>
            </div>
            <div className="Settings__section-body Settings__portions-grid">
                <PortionsCell count={portions.fruit.number}>FRUITS:</PortionsCell>
                <PortionsCell count={portions.veggies.number}>VEGGIES:</PortionsCell>
                <PortionsCell count={portions.carbs.number}>CARBS:</PortionsCell>
                <PortionsCell count={portions.prots.number}>PROTS:</PortionsCell>
                <PortionsCell count={portions.fats.number}>FATS:</PortionsCell>
                <PortionsCell count={portions.sweets.number}>SWEETS:</PortionsCell>        
            </div>                
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}