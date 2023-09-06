import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Fats } from '../../portion/type/fats';

export const FatsCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x45k';
    const title = 'Fats';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Fats index={1}/>
    </PortionGroup>
};