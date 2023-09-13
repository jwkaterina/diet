"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Fruit } from '../../portion/type/fruit';
import { PortionsContext } from '../../../../context/portions-context';
import { Group } from '../../../../context/portions-reducer';


export const FruitGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.fruit;

    let fruitArr = [];
    for(let i = 0; i < number; i++) {
        fruitArr.push(<Fruit key={ i + 1 } index={ i + 1 }/>);
    }
    return <PortionsGroup title={'Fruit'} group={Group.FRUIT} calories={calories} checked={checked}>
        {fruitArr}
    </PortionsGroup>
};