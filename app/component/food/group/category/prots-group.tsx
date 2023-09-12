"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Prots } from '../../portion/type/prots';
import { PortionsContext } from '../../../../context/food-context'

export const ProtsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions, dispatch} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.prots;

    const title = 'Prots'; 
    let protsArr = [];
    for(let i = 0; i < number; i++) {
        protsArr.push(<Prots key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: 'prots',
            number: number + 1,
        });    }
    return <PortionsGroup calories={calories} title={title} count={checked} onclick={handlePlusClick}>
        {protsArr}
    </PortionsGroup>
};