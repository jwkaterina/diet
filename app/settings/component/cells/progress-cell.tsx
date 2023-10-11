'use client'

import CellProps from './cell-props'
import styles from './cell.module.css'

export default function ProgressCell({ children, count, onPlusClick, onMinusClick }: CellProps): JSX.Element {
    
    return (
        <div className={styles.progress_cell}>
            <h3>{children}</h3>
            <div className={`${styles.minus_btn} ${styles.controls}`} onClick={onMinusClick}></div>
            <h3 className={styles.count}>{count}</h3>
            <div className={`${styles.plus_btn} ${styles.controls}`} onClick={onPlusClick}></div>
        </div> 
        )
}