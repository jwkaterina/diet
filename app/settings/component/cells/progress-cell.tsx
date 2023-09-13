'use client'

import React, { FunctionComponent } from 'react';

export const ProgressCell: FunctionComponent<ProgressCellProps> = (props) => {
    return (
        <>
            <h3 className="Settings__time-cell">{props.children}</h3>
            <div className="Settings__number-minus-btn Settings__time-cell Settings__controls-cell" onClick={props.onMinusClick}></div>
            <h3 className="Settings__time-cell Settings__count-cell">{props.count}</h3>
            <div className="Settings__number-plus-btn Settings__time-cell Settings__controls-cell" onClick={props.onPlusClick}></div>
        </> 
        )
}

export interface ProgressCellProps {
    children: React.ReactNode;
    count: number,
    onPlusClick: () => void
    onMinusClick: () => void
}