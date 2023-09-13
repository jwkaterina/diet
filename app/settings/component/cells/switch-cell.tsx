'use client'

import React, { FunctionComponent } from 'react';

export const SwitchCell: FunctionComponent<SwitchCellProps> = (props) => {
    return (
        <>
            <h3 className="Settings__units-cell">{props.children}</h3>
            <label className="Settings__switch Settings__controls-cell">
                <input type="checkbox"></input>
                <span className="Settings__switch-slider Settings__switch-round"></span>
            </label>    
        </>
    )
}

export interface SwitchCellProps {
    children: React.ReactNode;
}