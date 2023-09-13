'use client'

import React, { FunctionComponent } from 'react';

export const PortionsCell: FunctionComponent<PortionsCellProps> = (props) => {
    return (
        <>
            <h3 className="Settings__portions-cell">{props.children}</h3>
            <div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell"></div>
            <h3 className="Settings__portions-cell Settings__count-cell">{props.count}</h3>
            <div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell"></div>
        </> 
        )
}

export interface PortionsCellProps {
    children: React.ReactNode;
    count: number
}