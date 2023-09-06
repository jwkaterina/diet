"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { useContext } from 'react';
import { FoodContext } from '../../../../context/food-context'

export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x75k';
    const title = 'Sweets';
    const count = useContext(FoodContext).sweets;
    let sweetsArr = [];
    for(let i = 0; i < count; i++) {
        sweetsArr.push(<Sweets index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {sweetsArr}
    </PortionsGroup>
};