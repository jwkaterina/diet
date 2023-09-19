'use client'

import './cell.css'
import CellProps from './cell-props'

export default function PortionsCell({ children, count, onPlusClick, onMinusClick }: CellProps): JSX.Element {
    
    return (
        <>
            <h3 className="Settings__portions-cell">{children}</h3>
            <div className="Settings__number-minus-btn Settings__portions-cell Settings__controls-cell" onClick={onMinusClick}></div>
            <h3 className="Settings__portions-cell Settings__count-cell">{count}</h3>
            <div className="Settings__number-plus-btn Settings__portions-cell Settings__controls-cell" onClick={onPlusClick}></div>
        </> 
        )
}