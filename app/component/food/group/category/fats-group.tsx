"use client"

import { useState } from 'react';
import PortionsGroup from '../portions-group';
import Fats from '../../portion/type/fats';
import { usePortions } from '@/app/context/portions-context';
import { useSettings } from '@/app/context/settings-context';
import { useCalories } from '@/app/context/calories-context';
import calculateCurrentNumber from './utils';

export default function FatsGroup(): JSX.Element {
    const portions = usePortions();
    const { number, checked } = portions.fats;
    const settings = useSettings();
    const calories = useCalories().fats;

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let fatsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        fatsArr.push(<Fats key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Fats'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {fatsArr}
    </PortionsGroup>
};