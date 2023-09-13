"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { PortionsContext, Group } from '../../../../context/portions-context'

export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.sweets;

    let sweetsArr = [];
    for(let i = 0; i < number; i++) {
        sweetsArr.push(<Sweets key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup title={'Sweets'} group={Group.SWEETS} calories={calories} checked={checked}>
        {sweetsArr}
    </PortionsGroup>
};