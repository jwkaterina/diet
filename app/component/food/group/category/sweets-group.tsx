"use client"

import { useState, useContext } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Sweets from '../../portion/type/sweets';
import { PortionsContext } from '../../../../context/portions-context';
import { useSettings } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function SweetsGroup({ calories }: CategoryProps): JSX.Element {
    const { portions } = useContext(PortionsContext);
    const { number, checked } = portions.sweets;
    const settings = useSettings();

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = useState<number>(current);

    let sweetsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        sweetsArr.push(<Sweets key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Sweets'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {sweetsArr}
    </PortionsGroup>
};