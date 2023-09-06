import React, { FunctionComponent } from 'react';

export const Portion: FunctionComponent<PortionProps> = (props) => {
    return <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} className="portion-svg">

        {props.children}

        <rect x="0" y="0" width={props.width} height={props.height} className="portion-rect"></rect>
    </svg>
}

export interface PortionProps {
    width: number,
    height: number,
    children: React.ReactNode
}