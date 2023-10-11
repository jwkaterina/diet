'use client'

import styles from './cell.module.css'
import CellProps from './cell-props'

export default function PortionsCell({ children, count, onPlusClick, onMinusClick }: CellProps): JSX.Element {
    
    return (
        <div className={styles.portions_cell}>
            <h3 className={styles.portions}>{children}</h3>
            <div className={`${styles.minus_btn} ${styles.controls}`} onClick={onMinusClick}></div>
            <h3 className={`${styles.portions} ${styles.count}`}>{count}</h3>
            <div className={`${styles.plus_btn} ${styles.controls}`} onClick={onPlusClick}></div>
        </div> 
        )
}