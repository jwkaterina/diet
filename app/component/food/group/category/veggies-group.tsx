"use client"

import { useState } from 'react';
import PortionsGroup from '../portions-group';
import Veggies from '../../portion/type/veggies';
import { usePortions } from '@/app/context/portions-context';
import { useSettings } from '@/app/context/settings-context';
import { useCalories } from '@/app/context/calories-context';
import calculateCurrentNumber from './utils';

export default function VeggiesGroup(): JSX.Element {
    const portions = usePortions();
    const { number, checked } = portions.veggies;
    const settings = useSettings();
    const calories = useCalories().veggies;

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let veggiesArr = [];
    for(let i = 0; i < currentNumber; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Veggies'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {veggiesArr}
    </PortionsGroup>
};