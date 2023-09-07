"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { PortionsNumberContext, PortionsCheckedContext } from '../../../../context/food-context'

export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x75k';
    const title = 'Sweets';
    const count = useContext(PortionsCheckedContext).portionsChecked.sweets;
    const portions = useContext(PortionsNumberContext).sweets;    
    let sweetsArr = [];
    for(let i = 0; i < portions; i++) {
        sweetsArr.push(<Sweets key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {sweetsArr}
    </PortionsGroup>
};