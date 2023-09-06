"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fats } from '../../portion/type/fats';
import { useContext } from 'react';
import { FoodContext } from '../../../../context/food-context';

export const FatsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x45k';
    const title = 'Fats';
    const count = useContext(FoodContext).fats;
    let fatsArr = [];
    for(let i = 0; i < count; i++) {
        fatsArr.push(<Fats index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {fatsArr}
    </PortionsGroup>
};