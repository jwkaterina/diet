"use client"

import { useState } from 'react';
import PortionsGroup from '../portions-group';
import Carbs from '../../portion/type/carbs';
import { usePortions } from '@/app/context/portions-context';
import { useSettings } from '@/app/context/settings-context';
import { useCalories } from '@/app/context/calories-context';
import calculateCurrentNumber from './utils';

export default function CarbsGroup(): JSX.Element {
    const portions = usePortions();
    const { number, checked } = portions.carbs;
    const settings = useSettings();
    const calories = useCalories().carbs;
    
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

