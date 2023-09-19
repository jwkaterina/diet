'use client'

import { useContext } from 'react';
import { PortionsContext  } from '../../../context/portions-context';
import { useSettings } from '../../../context/settings-context';
import { Group } from '../../../context/portions-reducer';

import './portion.css'

interface PortionProps {
    width: number,
    height: number,
    children: React.ReactNode,
    group: Group,
    index: number,
    checked: number,
}

export default function Portion({ width, height, children, group, index, checked }: PortionProps): JSX.Element {
    const { dispatch } = useContext(PortionsContext);
    const settings = useSettings();

    const handleClick = () => {
        if(settings.halfPortions) {
            handleHalfPortionClick();
        } else {
            handleFullPortionClick();
        }
    };

    const handleFullPortionClick = () => {
        if(index <= checked) {
            dispatch({
                type: 'check',
                group: group,
                checked: index - 1,
              }); 
        } else {
            dispatch({
                type: 'check',
                group: group,
                checked: index,
              }); 
        }
    }

    const handleHalfPortionClick = () => {
        if(index <= checked / 2) {
            dispatch({
                type: 'check',
                group: group,
                checked: 2 * (index - 1),
              }); 
        } else if(index == checked / 2 + 0.5) {
            dispatch({
                type: 'check',
                group: group,
                checked: index * 2,
              }); 
        } else {
            dispatch({
                type: 'check',
                group: group,
                checked: index * 2 - 1,
              }); 
        }
    }

    const calculateClassname = () => {
        if(settings.halfPortions) {
            if(index <= checked / 2) {
                return "portion-svg checked"
            } else if(index == checked / 2 + 0.5) {
                return "portion-svg checked-left"
            } else {
                return "portion-svg"
            }
        } else {
            if(index <= checked) {
                return "portion-svg checked"
            } else {
                return "portion-svg"
            }
        }
    }

    return <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={calculateClassname()} onClick={handleClick}>

        {children}

        <rect x="0" y="0" width={width} height={height} className="portion-rect"></rect>
    </svg>
}