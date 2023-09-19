"use client"

import { useState, useContext } from 'react';
import CategoryProps from './category-props';
import PortionsGroup from '../portions-group';
import Prots from '../../portion/type/prots';
import { PortionsContext } from '../../../../context/portions-context';
import { SettingsContext } from '../../../../context/settings-context';
import calculateCurrentNumber from './utils';

export default function ProtsGroup({ calories }: CategoryProps): JSX.Element {
    const { portions } = useContext(PortionsContext);
    const { number, checked } = portions.prots;
    const { settings } = useContext(SettingsContext);

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