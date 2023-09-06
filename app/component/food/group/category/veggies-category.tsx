import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Veggies } from '../../portion/type/veggies';

export const VeggiesCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x25k';
    const title = 'Veggies';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Veggies index={1}/>
    </PortionGroup>
};