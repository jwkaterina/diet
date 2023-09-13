'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { PortionsCell } from '../cells/portions-cell';
import { PortionsContext, Group } from '../../../context/portions-context';

export const PortionsSection: FunctionComponent = (props) => {
    const {portions, dispatch} = useContext(PortionsContext);

    const handlePlusClick = (group: Group) => {
        dispatch({
            type: 'add',
            group: group,
        });
    }

    const handleMinusClick = (group: Group) => {
        dispatch({
            type: 'reduce',
            group: group,
        });
    }

    return (
        <SettingsSection>
            <div className="Settings__section-title">
                <h2>Portions</h2>
                <h2>1210 k</h2>
            </div>
            <div className="Settings__section-body Settings__portions-grid">
                <PortionsCell count={portions.fruit.number} onPlusClick={() => handlePlusClick(Group.FRUIT)} onMinusClick={() => handleMinusClick(Group.FRUIT)}>FRUITS:</PortionsCell>
                <PortionsCell count={portions.veggies.number} onPlusClick={() => handlePlusClick(Group.VEGGIES)} onMinusClick={() => handleMinusClick(Group.VEGGIES)}>VEGGIES:</PortionsCell>
                <PortionsCell count={portions.carbs.number} onPlusClick={() => handlePlusClick(Group.CARBS)} onMinusClick={() => handleMinusClick(Group.CARBS)}>CARBS:</PortionsCell>
                <PortionsCell count={portions.prots.number} onPlusClick={() => handlePlusClick(Group.PROTS)} onMinusClick={() => handleMinusClick(Group.PROTS)}>PROTS:</PortionsCell>
                <PortionsCell count={portions.fats.number} onPlusClick={() => handlePlusClick(Group.FATS)} onMinusClick={() => handleMinusClick(Group.FATS)}>FATS:</PortionsCell>
                <PortionsCell count={portions.sweets.number} onPlusClick={() => handlePlusClick(Group.SWEETS)} onMinusClick={() => handleMinusClick(Group.SWEETS)}>SWEETS:</PortionsCell>        
            </div>                
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}