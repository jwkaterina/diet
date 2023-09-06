import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionGroup } from '../portion-group';
import { Prots } from '../../portion/type/prots';

export const ProtsCategory: FunctionComponent<CategoryProps> = (props) => {
    const caloriesHint = 'x110k';
    const title = 'Prots';
    return <PortionGroup caloriesHint={caloriesHint} title={title} count={props.count}>
        <Prots index={1}/>
    </PortionGroup>
};