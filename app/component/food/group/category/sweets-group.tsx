"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { PortionsContext } from '../../../../context/food-context'

export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);

    const calories = portions.sweets.calories;
    const title = 'Sweets';
    const count = portions.sweets.checked;
    const number = portions.sweets.number;    
    let sweetsArr = [];
    for(let i = 0; i < number; i++) {
        sweetsArr.push(<Sweets key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'sweets',
            number: number + 1,
        });    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {sweetsArr}
    </PortionsGroup>
};