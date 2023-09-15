"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { PortionsContext } from '../../../../context/portions-context';


export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.sweets;

    let n; 
    if(checked > number) {
        n = checked;
    } else {
        n = number;
    }
    const [currentNumber, setCurrentNumber] = React.useState<number>(n);

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