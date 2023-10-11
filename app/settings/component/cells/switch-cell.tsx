'use client'

import styles from './cell.module.css'

interface CellProps {
    children: React.ReactNode,
    check: boolean,
    onChange: () => void,
}

export default function PortionsCell({ children, check, onChange }: CellProps): JSX.Element {
    
    return (
        <div className={styles.switch_cell}>
            <h3>{children}</h3>
            <label className={`${styles.switch} ${styles.controls}`}>
                <input data-testid="portions" type="checkbox" onChange={onChange} checked={check}></input>
                <span className={`${styles.switch_slider} ${styles.switch_round}`}></span>
            </label>   
        </div> 
        )
}