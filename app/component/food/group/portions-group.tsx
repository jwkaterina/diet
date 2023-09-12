import React, { FunctionComponent } from 'react';
import { PortionsContext } from '../../../context/food-context';
import './portions-group.css'

export const PortionsGroup: FunctionComponent<PortionsGroupProps> = (props) => {
    const { dispatch} = React.useContext(PortionsContext);

    const handlePlusClick = () => {
        dispatch({
            type: 'add',
            group: props.group,
            number: props.number + 1,
        });
    }
    return (
        <div className="PortionsGroup-cell">
            <div className="PortionsGroup-card">
                <div className="PortionsGroup-header">
                    <h3 className="PortionsGroup__count">{props.count}</h3>
                    <h3 className="PortionsGroup__calories-hint">x{props.calories}k</h3>
                    <h3>{props.title}</h3>
                    <div className="plus-btn" onClick={handlePlusClick}></div>
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
    group: string,
    calories: number,
    number: number,
    count: number,
    children: React.ReactNode
}