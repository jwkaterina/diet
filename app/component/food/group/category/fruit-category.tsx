import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Fruit } from '../../portion/type/fruit';

export const FruitCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x60k';
    const title = 'Fruit';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Fruit index={1}/>
    </PortionGroup>
};