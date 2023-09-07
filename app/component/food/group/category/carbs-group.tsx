"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { PortionsNumberContext, PortionsCheckedContext } from '../../../../context/food-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x70k';
    const title = 'Carbs';
    const count = useContext(PortionsCheckedContext).portionsChecked.carbs;
    const portions = useContext(PortionsNumberContext).carbs;
    let carbsArr = [];
    for(let i = 0; i < portions; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }

    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {carbsArr}
    </PortionsGroup>
};