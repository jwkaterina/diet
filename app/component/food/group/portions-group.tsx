'use client'

import React, { FunctionComponent } from 'react';

import './portions-group.css'

export const PortionsGroup: FunctionComponent<PortionsGroupProps> = (props) => {

    return (
        <div className="PortionsGroup-cell">
            <div className="PortionsGroup-card">
                <div className="PortionsGroup-header">
                    <h3 className="PortionsGroup__checked">{props.checked}</h3>
                    <h3 className="PortionsGroup__calories-hint">x{props.calories}k</h3>
                    <h3>{props.title}</h3>
                    <div className="plus-btn" onClick={props.onPlusClick}></div>
                </div>         
                <div className="PortionsGroup__portions">
                    {props.children}
                </div>        
            </div>
        </div>  
    )  
}

export interface PortionsGroupProps {
    title: string,
    calories: number,
    checked: number,
    children: React.ReactNode,
    onPlusClick: () => void
}