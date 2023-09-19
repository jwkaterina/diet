"use client"

import { useState, useContext } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Veggies from '../../portion/type/veggies';
import { PortionsContext } from '../../../../context/portions-context';
import { useSettings } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function VeggiesGroup({ calories }: CategoryProps): JSX.Element {
    const { portions } = useContext(PortionsContext);
    const { number, checked } = portions.veggies;
    const settings = useSettings();

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