'use client'

import CellProps from './cell-props'

export default function ProgressCell({ children, count, onPlusClick, onMinusClick }: CellProps): JSX.Element {
    
    return (
        <div className="progress-cell">
            <h3 className="Settings__time-cell">{children}</h3>
            <div className="Settings__number-minus-btn Settings__time-cell Settings__controls-cell" onClick={onMinusClick}></div>
            <h3 className="Settings__time-cell Settings__count-cell">{count}</h3>
            <div className="Settings__number-plus-btn Settings__time-cell Settings__controls-cell" onClick={onPlusClick}></div>
        </div> 
        )
}