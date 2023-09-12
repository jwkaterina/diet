'use client'

import React, { FunctionComponent } from 'react';
import { PortionsContext, Group } from '../../../context/food-context';
import './portion.css'

export const Portion: FunctionComponent<PortionProps> = (props) => {
    const { dispatch} = React.useContext(PortionsContext);

    const handleClick = () => {
        if(props.index <= props.checked) {
            dispatch({
                type: 'check',
                group: props.group,
                checked: props.index - 1,
              }); 
        } else {
            dispatch({
                type: 'check',
                group: props.group,
                checked: props.index,
              }); 
        }
    };

    const checked = props.checked >= props.index;

    return <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} className={checked ? "portion-svg checked" : "portion-svg"} onClick={handleClick}>

        {props.children}

        <rect x="0" y="0" width={props.width} height={props.height} className="portion-rect"></rect>
    </svg>
}

export interface PortionProps {
    width: number,
    height: number,
    children: React.ReactNode,
    group: Group,
    index: number,
    checked: number,
}