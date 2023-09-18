"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fats } from '../../portion/type/fats';
import { PortionsContext } from '../../../../context/portions-context';
import { SettingsContext } from '../../../../context/settings-context';
import { calculateCurrentNumber } from './utils';

export const FatsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {number, checked} = portions.fats;
    const { settings } = React.useContext(SettingsContext);

    const current = calculateCurrentNumber(settings.halfPortions, checked, number);

    const [currentNumber, setCurrentNumber] = React.useState<number>(current);

    let fatsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        fatsArr.push(<Fats key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Fats'} calories={props.calories} checked={checked} onPlusClick={handlePlusClick}>
        {fatsArr}
    </PortionsGroup>
};