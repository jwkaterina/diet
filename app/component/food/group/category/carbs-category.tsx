import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Carbs } from '../../portion/type/carbs';

export const CarbsCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x70k';
    const title = 'Carbs';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Carbs index={1}/>
    </PortionGroup>
};