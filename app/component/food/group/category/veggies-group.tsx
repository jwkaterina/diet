"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { PortionsContext } from '../../../../context/food-context'

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);

    const calories = portions.veggies.calories;
    const title = 'Veggies';
    const count = portions.veggies.checked;
    const number = portions.veggies.number;    
    let veggiesArr = [];
    for(let i = 0; i < number; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'veggies',
            number: number + 1,
        });    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {veggiesArr}
    </PortionsGroup>
};