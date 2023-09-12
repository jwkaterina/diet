"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fruit } from '../../portion/type/fruit';
import { PortionsContext } from '../../../../context/food-context'

export const FruitGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);

    const calories = portions.fruit.calories;
    const title = 'Fruit';
    const count = portions.fruit.checked;
    const number = portions.fruit.number;    
    let fruitArr = [];
    for(let i = 0; i < number; i++) {
        fruitArr.push(<Fruit key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'fruit',
            number: number + 1,
        });    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {fruitArr}
    </PortionsGroup>
};