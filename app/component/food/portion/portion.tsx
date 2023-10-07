'use client'

import { usePortionsDispatch  } from '../../../context/portions-context';
import { useSettings } from '../../../context/settings-context';
import { Group } from '../../../context/portions-reducer';
import { handleFullPortionClick, handleHalfPortionClick } from './utils';

import './portion.css'
import { Dispatch } from 'react';

interface PortionProps {
    width: number,
    height: number,
    children: React.ReactNode,
    group: Group,
    index: number,
    checked: number,
}

export default function Portion({ width, height, children, group, index, checked }: PortionProps): JSX.Element {
    const dispatch = usePortionsDispatch();
    const settings = useSettings();

    const handleClick = () => {
        if(settings.halfPortions) {
            handleHalfPortionClick(index, checked, group, dispatch);
        } else {
            handleFullPortionClick(index, checked, group, dispatch);
        }
    };

    const calculateClassname = (): string => {
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

    return <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={calculateClassname()} onClick={handleClick} data-testid="portion">

        {children}

        <rect x="0" y="0" width={width} height={height} className="portion-rect"></rect>
    </svg>
}