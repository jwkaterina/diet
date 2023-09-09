"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Sweets } from '../../portion/type/sweets';
import { PortionsNumberContext, PortionsCheckedContext, CaloriesContext } from '../../../../context/food-context'

export const SweetsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portionsNumber, setPortionsNumber} = React.useContext(PortionsNumberContext);

    const calories = useContext(CaloriesContext).sweets;
    const title = 'Sweets';
    const count = useContext(PortionsCheckedContext).portionsChecked.sweets;
    const portions = portionsNumber.sweets;    
    let sweetsArr = [];
    for(let i = 0; i < portions; i++) {
        sweetsArr.push(<Sweets key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        setPortionsNumber({...portionsNumber, sweets: portionsNumber.sweets + 1});
    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {sweetsArr}
    </PortionsGroup>
};