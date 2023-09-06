import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Sweets } from '../../portion/type/sweets';

export const SweetsCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x75k';
    const title = 'Sweets';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Sweets index={1}/>
    </PortionGroup>
};