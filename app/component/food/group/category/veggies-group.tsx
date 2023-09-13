"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { PortionsContext, Group } from '../../../../context/portions-context'

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.veggies;

    let veggiesArr = [];
    for(let i = 0; i < number; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup title={'Veggies'} group={Group.VEGGIES} calories={calories} checked={checked}>
        {veggiesArr}
    </PortionsGroup>
};