'use client'

import React, { FunctionComponent } from 'react';
import { PortionsContext  } from '../../../context/portions-context';
import { SettingsContext } from '../../../context/settings-context';
import { Group } from '../../../context/portions-reducer';

import './portion.css'

export const Portion: FunctionComponent<PortionProps> = (props) => {
    const { dispatch} = React.useContext(PortionsContext);
    const { settings } = React.useContext(SettingsContext);

    const handleClick = () => {
        if(settings.halfPortions) {
            handleHalfPortionClick();
        } else {
            handleFullPortionClick();
        }
    };

    const handleFullPortionClick = () => {
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
    }

    const handleHalfPortionClick = () => {
        if(props.index <= props.checked / 2) {
            dispatch({
                type: 'check',
                group: props.group,
                checked: 2 * (props.index - 1),
              }); 
        } else if(props.index == props.checked / 2 + 0.5) {
            dispatch({
                type: 'check',
                group: props.group,
                checked: props.index * 2,
              }); 
        } else {
            dispatch({
                type: 'check',
                group: props.group,
                checked: props.index * 2 - 1,
              }); 
        }
    }

    const calculateClassname = () => {
        if(settings.halfPortions) {
            if(props.index <= props.checked / 2) {
                return "portion-svg checked"
            } else if(props.index == props.checked / 2 + 0.5) {
                return "portion-svg checked-left"
            } else {
                return "portion-svg"
            }
        } else {
            if(props.index <= props.checked) {
                return "portion-svg checked"
            } else {
                return "portion-svg"
            }
        }
    }

    return <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} className={calculateClassname()} onClick={handleClick}>

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