"use client"

import { useState, useContext } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Carbs from '../../portion/type/carbs';
import { PortionsContext } from '../../../../context/portions-context';
import { SettingsContext } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function CarbsGroup({ calories }: CategoryProps): JSX.Element {
    const { portions } = useContext(PortionsContext);
    const { number, checked } = portions.carbs;
    const { settings } = useContext(SettingsContext);
    
    const current = calculateCurrentNumber(settings.halfPortions, checked, number);
    
    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let carbsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Carbs'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {carbsArr}
    </PortionsGroup>
}

