"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Prots } from '../../portion/type/prots';
import { PortionsNumberContext, PortionsCheckedContext, CaloriesContext } from '../../../../context/food-context'

export const ProtsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portionsNumber, setPortionsNumber} = React.useContext(PortionsNumberContext);

    const calories = useContext(CaloriesContext).prots;
    const title = 'Prots';
    const count = useContext(PortionsCheckedContext).portionsChecked.prots;
    const portions = portionsNumber.prots;    
    let protsArr = [];
    for(let i = 0; i < portions; i++) {
        protsArr.push(<Prots key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        setPortionsNumber({...portionsNumber, prots: portionsNumber.prots + 1});
    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {protsArr}
    </PortionsGroup>
};