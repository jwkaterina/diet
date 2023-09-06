"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Prots } from '../../portion/type/prots';
import { useContext } from 'react';
import { FoodContext } from '../../../../context/food-context'

export const ProtsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x110k';
    const title = 'Prots';
    const count = useContext(FoodContext).prots;
    let protsArr = [];
    for(let i = 0; i < count; i++) {
        protsArr.push(<Prots index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {protsArr}
    </PortionsGroup>
};