"use client"

import { useState, useContext } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Fats from '../../portion/type/fats';
import { PortionsContext } from '../../../../context/portions-context';
import { useSettings } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function FatsGroup({ calories }: CategoryProps): JSX.Element {
    const { portions } = useContext(PortionsContext);
    const { number, checked } = portions.fats;
    const settings = useSettings();

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