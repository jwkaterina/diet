'use client'

import CaloriesSection from './calories-section'
import styles from './calories.module.css'

interface CaloriesSectionProps {
    bmi: number | null;
    status: string;
    range: string;
    recommendation: string;
}

export default function WeightAnalysis( { bmi, status, range, recommendation}: CaloriesSectionProps): JSX.Element {

    return (
        <>
            <CaloriesSection>
                <h2>Weight Analysis</h2>
                <div className={styles.weight_data}>
                    <h3 className={styles.title}>Body Mass Index (BMI):</h3>
                    <h3 className={styles.data}>{bmi ? bmi : ''}</h3>
                    <h3 className={styles.title}>Weight Status:</h3>
                    <h3 className={styles.data}>{status}</h3>
                    <h3 className={styles.title}>Normal Weight Range (kg):</h3>
                    <h3 className={styles.data}>{range}</h3>
                    <h3 className={styles.title}>Recommendation:</h3>
                    <h3 className={styles.data}>{recommendation}</h3>
                </div>
            </CaloriesSection>
        </>
    )
}