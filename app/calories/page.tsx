'use client'

import styles from './page.module.css'
import DataInputs from './section/data-inputs'
import WeightAnalysis from './section/weight-analysis'
import CaloriesPlan from './section/calories-plan'

export default function Calories() {

    return (
        <div className={styles.CaloriesPage}>
            <DataInputs/>
            <WeightAnalysis/>
            <CaloriesPlan/>
        </div>
  )
}