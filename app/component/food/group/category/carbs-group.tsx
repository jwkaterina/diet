"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { FoodContext } from '../../../../context/food-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x70k';
    const title = 'Carbs';
    const count = useContext(FoodContext).carbs;
    let carbsArr = [];
    for(let i = 0; i < count; i++) {
        carbsArr.push(<Carbs index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {carbsArr}
    </PortionsGroup>
};