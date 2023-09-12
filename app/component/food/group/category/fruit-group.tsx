"use client"

import React, { FunctionComponent, useContext } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fruit } from '../../portion/type/fruit';
import { PortionsNumberContext, PortionsCheckedContext, CaloriesContext } from '../../../../context/food-context'

export const FruitGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portionsNumber, setPortionsNumber} = React.useContext(PortionsNumberContext);

    const calories = useContext(CaloriesContext).fruit;
    const title = 'Fruit';
    const count = useContext(PortionsCheckedContext).portionsChecked.fruit.checked;
    const portions = portionsNumber.fruit;    
    let fruitArr = [];
    for(let i = 0; i < portions; i++) {
        fruitArr.push(<Fruit key={ i + 1 } index={ i + 1 }/>);
    }
    const handlePlusClick = () => {
        setPortionsNumber({...portionsNumber, fruit: portionsNumber.fruit + 1});
    }
    return <PortionsGroup calories={calories} title={title} count={count} onclick={handlePlusClick}>
        {fruitArr}
    </PortionsGroup>
};