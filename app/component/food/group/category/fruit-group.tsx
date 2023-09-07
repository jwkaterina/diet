"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fruit } from '../../portion/type/fruit';
import { PortionsNumberContext, PortionsCheckedContext } from '../../../../context/food-context'

export const FruitGroup: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x60k';
    const title = 'Fruit';
    const count = useContext(PortionsCheckedContext).portionsChecked.fruit;
    const portions = useContext(PortionsNumberContext).fruit;    
    let fruitArr = [];
    for(let i = 0; i < portions; i++) {
        fruitArr.push(<Fruit key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup caloriesHint={caloriesHint} title={title} count={count}>
        {fruitArr}
    </PortionsGroup>
};