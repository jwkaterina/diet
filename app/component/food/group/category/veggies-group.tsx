"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { FoodContext } from '../../../../context/food-context'

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x25k';
    const title = 'Veggies';
    const count = useContext(FoodContext).veggies;
    let veggiesArr = [];
    for(let i = 0; i < count; i++) {
        veggiesArr.push(<Veggies index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {veggiesArr}
    </PortionsGroup>
};