"use client"

import React, { FunctionComponent } from 'react';
import { CategoryProps } from './category-props';
import { PortionsGroup } from '../portions-group';
import { Prots } from '../../portion/type/prots';
import { PortionsContext } from '../../../../context/portions-context';


export const ProtsGroup: FunctionComponent<CategoryProps> = (props) => {
    const {portions} = React.useContext(PortionsContext);
    const {calories, number, checked} = portions.prots;

    let n; 
    if(checked > number) {
        n = checked;
    } else {
        n = number;
    }
    const [currentNumber, setCurrentNumber] = React.useState<number>(n);

    let protsArr = [];
    for(let i = 0; i < currentNumber; i++) {
        protsArr.push(<Prots key={ i + 1 } index={ i + 1 }/>);
    }    

    const handlePlusClick = () => {
        setCurrentNumber(currentNumber + 1);
    }

    return <PortionsGroup title={'Props'} calories={calories} checked={checked} onPlusClick={handlePlusClick}>
        {protsArr}
    </PortionsGroup>
};