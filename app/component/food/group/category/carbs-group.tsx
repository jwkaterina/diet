"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { PortionsContext } from '../../../../context/food-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);

    const calories = portions.carbs.calories;
    const title = 'Carbs';
    const count = portions.carbs.checked;
    const number = portions.carbs.number;
    let carbsArr = [];
    for(let i = 0; i < number; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'carbs',
            number: number + 1,
        });
    }

    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {carbsArr}
    </PortionsGroup>
};