"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Carbs } from '../../portion/type/carbs';
import { PortionsNumberContext, PortionsContext, CaloriesContext } from '../../../../context/food-context';

export const CarbsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portionsNumber, setPortionsNumber} = React.useContext(PortionsNumberContext);

    const calories = useContext(CaloriesContext).carbs;
    const title = 'Carbs';
    const count = useContext(PortionsContext).portions.carbs.checked;
    const portions = portionsNumber.carbs;
    let carbsArr = [];
    for(let i = 0; i < portions; i++) {
        carbsArr.push(<Carbs key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        setPortionsNumber({...portionsNumber, carbs: portionsNumber.carbs + 1});
    }

    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {carbsArr}
    </PortionsGroup>
};