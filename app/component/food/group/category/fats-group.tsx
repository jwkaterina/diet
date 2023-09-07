"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fats } from '../../portion/type/fats';
import { PortionsNumberContext, PortionsCheckedContext, CaloriesContext } from '../../../../context/food-context';

export const FatsGroup: FunctionComponent<CategoryProps> = (props) => {
    const calories = useContext(CaloriesContext).fats;
    const title = 'Fats';
    const count = useContext(PortionsCheckedContext).portionsChecked.fats;
    const portions = useContext(PortionsNumberContext).fats;    
    let fatsArr = [];
    for(let i = 0; i < portions; i++) {
        fatsArr.push(<Fats key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup calories={calories} title={title} count={count}>
        {fatsArr}
    </PortionsGroup>
};