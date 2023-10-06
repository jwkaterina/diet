'use client'

import './portions-group.css'
import { useSettings } from '../../../context/settings-context';

interface PortionsGroupProps {
    title: string,
    calories: number,
    checked: number,
    children: React.ReactNode,
    onPlusClick: () => void
}

export default function PortionsGroup({ title, calories, checked, children, onPlusClick}: PortionsGroupProps): JSX.Element {
    const settings = useSettings();

    if(settings.halfPortions) {
        checked = checked / 2;
    }

    return (
        <div className="PortionsGroup-cell">
            <div className="PortionsGroup-card">
                <div className="PortionsGroup-header">
                    <h3 className="PortionsGroup__checked">{checked}</h3>
                    <h3 className="PortionsGroup__calories-hint">x{calories}k</h3>
                    <h3>{title}</h3>
                    <div className="plus-btn" data-testid="btn" onClick={onPlusClick}></div>
                </div>         
                <div className="PortionsGroup__portions">
                    {children}
                </div>        
            </div>
        </div>  
    )  
}