"use client"

import { useState } from 'react';
import PortionsGroup from '../portions-group';
import Prots from '../../portion/type/prots';
import { usePortions } from '@/app/context/portions-context';
import { useSettings } from '@/app/context/settings-context';
import { useCalories } from '@/app/context/calories-context';
import calculateCurrentNumber from './utils';

export default function ProtsGroup(): JSX.Element {
    const portions = usePortions();
    const { number, checked } = portions.prots;
    const settings = useSettings();
    const calories = useCalories().prots;

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let protsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        protsArr.push(<Prots key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Props'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {protsArr}
    </PortionsGroup>
};