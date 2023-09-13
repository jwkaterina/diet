"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fats } from '../../portion/type/fats';
import { PortionsContext, Group } from '../../../../context/portions-context';

export const FatsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.fats;

    let fatsArr = [];
    for(let i = 0; i < number; i++) {
        fatsArr.push(<Fats key={ i + 1 } index={ i + 1 }/>);
    }

    return <PortionsGroup title={'Fats'} group={Group.FATS} calories={calories} checked={checked}>
        {fatsArr}
    </PortionsGroup>
};