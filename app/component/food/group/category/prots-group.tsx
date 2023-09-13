"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Prots } from '../../portion/type/prots';
import { PortionsContext } from '../../../../context/portions-context';
import { Group } from '../../../../context/portions-reducer';


export const ProtsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.prots;

    let protsArr = [];
    for(let i = 0; i < number; i++) {
        protsArr.push(<Prots key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup title={'Props'} group={Group.PROTS} calories={calories} checked={checked}>
        {protsArr}
    </PortionsGroup>
};