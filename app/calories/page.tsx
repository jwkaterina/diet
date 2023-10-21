'use client'

import { useState } from 'react'
import styles from './page.module.css'
import DataInputs from './section/data-inputs'
import WeightAnalysis from './section/weight-analysis'
import CaloriesPlan from './section/calories-plan'

export default function Calories() {

    const [bmi, setBmi] = useState<number | string>("");
    const [status, setStatus] = useState<string>('');
    const [range, setRange] = useState<string>('');
    const [recommendation, setRecommendation] = useState<string>('');

    return (
        <div className={styles.CaloriesPage}>
            <DataInputs setBmi={setBmi} setStatus={setStatus} setRange={setRange} setRecommendation={setRecommendation}/>
            <WeightAnalysis bmi={bmi} status={status} range={range} recommendation={recommendation}/>
            <CaloriesPlan/>
        </div>
  )
}