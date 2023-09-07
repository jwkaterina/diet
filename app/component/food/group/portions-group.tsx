import React, { FunctionComponent } from 'react';
import './portions-group.css'

export const PortionsGroup: FunctionComponent<PortionsGroupProps> = (props) => {
    return (
        <div className="PortionsGroup-cell">
            <div className="PortionsGroup-card">
                <div className="PortionsGroup-header">
                    <h3 className="PortionsGroup__count">{props.count}</h3>
                    <h3 className="PortionsGroup__calories-hint">{props.caloriesHint}</h3>
                    <h3>{props.title}</h3>
                    <div className="plus-btn"></div>
                </div>         
                <div className="PortionsGroup__portions">
                    {props.children}
                </div>        
            </div>
        </div>  
    )  
}

export interface PortionsGroupProps {
    count: number,
    caloriesHint: string,
    title: string,
    children: React.ReactNode
}