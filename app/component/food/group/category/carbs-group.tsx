"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { PortionsContext, Group } from '../../../../context/food-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.carbs;

    let carbsArr = [];
    for(let i = 0; i < number; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup title={'Carbs'} group={Group.CARBS} calories={calories} number={number} count={checked}>
        {carbsArr}
    </PortionsGroup>
};