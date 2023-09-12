"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Veggies } from '../../portion/type/veggies';
import { PortionsNumberContext, PortionsCheckedContext, CaloriesContext } from '../../../../context/food-context'

export const VeggiesGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portionsNumber, setPortionsNumber} = React.useContext(PortionsNumberContext);

    const calories = useContext(CaloriesContext).veggies;
    const title = 'Veggies';
    const count = useContext(PortionsCheckedContext).portionsChecked.veggies.checked;
    const portions = portionsNumber.veggies;    
    let veggiesArr = [];
    for(let i = 0; i < portions; i++) {
        veggiesArr.push(<Veggies key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        setPortionsNumber({...portionsNumber, veggies: portionsNumber.veggies + 1});
    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {veggiesArr}
    </PortionsGroup>
};