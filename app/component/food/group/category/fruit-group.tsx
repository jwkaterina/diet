"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fruit } from '../../portion/type/fruit';
import { PortionsContext } from '../../../../context/portions-context';
import { SettingsContext } from '../../../../context/settings-context';

export const FruitGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.fruit;
    const { settings } = React.useContext(SettingsContext);

    let n; 
    if(settings.halfPortions) {
        if(checked > 2 * number) {
            n = (checked / 2);
            n = Math.ceil(n);
        } else {
            n = number;
        }
    } else {
        if(checked > number) {
            n = checked;
        } else {
            n = number;
        }
    }

    const [currentNumber, setCurrentNumber] = React.useState<number>(n);

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