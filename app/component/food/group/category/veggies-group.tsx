"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { PortionsContext } from '../../../../context/portions-context';
import { SettingsContext } from '../../../../context/settings-context';
import { calculateCurrentNumber } from './utils';

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {number, checked} = portions.veggies;
    const { settings } = React.useContext(SettingsContext);

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = React.useState<number>(current);

    let veggiesArr = [];
    for(let i = 0; i < currentNumber; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Veggies'} calories={props.calories} checked={checked} onPlusClick={handlePlusClick}>
        {veggiesArr}
    </PortionsGroup>
};