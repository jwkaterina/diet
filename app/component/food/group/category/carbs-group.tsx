"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { PortionsContext } from '../../../../context/portions-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.carbs;
    let n; 
    if(checked > number) {
        n = checked;
    } else {
        n = number;
    }
    const [currentNumber, setCurrentNumber] = React.useState<number>(n);

    let carbsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Carbs'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {carbsArr}
    </PortionsGroup>
}