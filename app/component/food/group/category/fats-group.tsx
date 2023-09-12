"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fats } from '../../portion/type/fats';
import { PortionsContext } from '../../../../context/food-context';

export const FatsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.fats;

    const title = 'Fats';
    let fatsArr = [];
    for(let i = 0; i < number; i++) {
        fatsArr.push(<Fats key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'fats',
            number: number + 1,
        });
    }
    return <PortionsGroup calories={calories} title={title} count={checked} onclick={handlePlusClick}>
        {fatsArr}
    </PortionsGroup>
};