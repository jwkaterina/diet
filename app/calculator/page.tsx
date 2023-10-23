'use client'

import { useState } from 'react'
import styles from './page.module.css'
import DataInputs from './section/data-inputs'
import WeightAnalysis from './section/weight-analysis'
import CaloriesPlan from './section/calories-plan'
import { Gender, BodyData } from './bmr-utils'

export default function Calories() {

    const [bmi, setBmi] = useState<number | null>(null);
    const [status, setStatus] = useState<string>('');
    const [range, setRange] = useState<string>('');
    const [recommendation, setRecommendation] = useState<string>('');
    const [gender, setGender] = useState<Gender>(Gender.FEMALE);
    const [body, setBody] = useState<BodyData | null>(null);

    return (
        <div className={styles.CaloriesPage}>
            <DataInputs submitBmi={setBmi} submitStatus={setStatus} submitRange={setRange} submitRecommendation={setRecommendation} submitGender={setGender} submitBody={setBody}/>
            <WeightAnalysis bmi={bmi} status={status} range={range} recommendation={recommendation}/>
            <CaloriesPlan gender={gender} body={body} status={status}/>
        </div>
  )
}