"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { PortionsContext } from '../../../../context/food-context'

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.veggies;

    const title = 'Veggies';  
    let veggiesArr = [];
    for(let i = 0; i < number; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'veggies',
            number: number + 1,
        });    }
    return <PortionsGroup calories={calories} title={title} count={checked} onclick={handlePlusClick}>
        {veggiesArr}
    </PortionsGroup>
};