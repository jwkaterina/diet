"use client"

import { useState } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Fruit from '../../portion/type/fruit';
import { usePortions } from '../../../../context/portions-context';
import { useSettings } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function FruitGroup({ calories }: CategoryProps): JSX.Element{
    const portions = usePortions();
    const { number, checked } = portions.fruit;
    const settings = useSettings();

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let fruitArr = [];
    for(let i = 0; i < currentNumber; i++) {
        fruitArr.push(<Fruit key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Fruit'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {fruitArr}
    </PortionsGroup>
};