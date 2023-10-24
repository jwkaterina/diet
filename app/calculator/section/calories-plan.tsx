'use client'

import CaloriesSection from './calories-section'
import { Gender, BodyData } from '../bmr-utils';
import { maintainWeightCalories, gainWeightCalories, loseWeightCalories, NONE, LOW, NORMAL, HIGH, PhysicalActivity } from '../daily-calories-utils';
import { WeightClass } from '../bmi-utils';
import styles from './calories.module.css'

interface CaloriesPlanProps {
    gender: Gender;
    body: BodyData | null;
    status: string;
}

export default function CaloriesPlan({ gender, body, status}: CaloriesPlanProps): JSX.Element {

    const header = (status: string): string => {
        switch (status) {
            case WeightClass.UNDERWEIGHT:
                return 'Gain Some Weight';
            case WeightClass.NORMAL:
                return '';
            case WeightClass.OVERWEIGHT:
                return 'Lose Some Weight';
            case WeightClass.OBESE:
                return 'Lose Some Weight';
            default:
                return '';
        }
    }

    const maintainCalories = (physicalActivity: PhysicalActivity): number | string => {
        if(!body) return '';
        return maintainWeightCalories(gender, body, physicalActivity);
    }

    const ajustCalories = (physicalActivity: PhysicalActivity): number | string => {
        const calories = maintainCalories(physicalActivity);
        switch (status) {
            case(WeightClass.UNDERWEIGHT):
                return gainWeightCalories(calories as number);
            case(WeightClass.NORMAL):
                return '';
            case(WeightClass.OVERWEIGHT):
                return loseWeightCalories(calories as number , gender);
            case(WeightClass.OBESE):
                return loseWeightCalories(calories as number, gender);
            default:
                return '';
        }
    }

    return (
        <>
            <CaloriesSection>
                <h2>Calories Plan</h2>
                <div className={styles.plan}>
                    <h3 className={styles.header}>Physical Activity</h3>
                    <h3 className={styles.header}>Maintain Weight</h3>
                    <h3 className={styles.header}>{header(status)}</h3>
                    <h3 className={styles.title}>Inactive:</h3>
                    <span className={styles.data}>{maintainCalories(NONE)}</span>
                    <span className={styles.data}>{ajustCalories(NONE)}</span>
                    <h3 className={styles.title}>Low Active:</h3>
                    <span className={styles.data}>{maintainCalories(LOW)}</span>
                    <span className={styles.data}>{ajustCalories(LOW)}</span>
                    <h3 className={styles.title}>Active:</h3>
                    <span className={styles.data}>{maintainCalories(NORMAL)}</span>
                    <span className={styles.data}>{ajustCalories(NORMAL)}</span>
                    <h3 className={styles.title}>High Active:</h3>
                    <span className={styles.data}>{maintainCalories(HIGH)}</span>
                    <span className={styles.data}>{ajustCalories(HIGH)}</span>
                </div>
            </CaloriesSection>
        </>
    )
}