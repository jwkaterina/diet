'use client'

import styles from './progress.module.css'
import { usePortions } from '../../context/portions-context'
import { useMeals } from '../../context/meals-context'
import { useSettings } from '../../context/settings-context'
import { Calories } from '../../page'
import { calculateCurrent, calculateTarget, timeTargetCalories, completedCalories, exceededCalories } from './utils'

interface ProgressProps {
    calories: Calories;
}

export default function ProgressBar({ calories }: ProgressProps): JSX.Element {
    const portions = usePortions();
    const { firstMeal, lastMeal, mealsNumber } = useMeals();
    const settings = useSettings();

    const currentCalories =  calculateCurrent(portions, settings.halfPortions, calories);
    const targetCalories = calculateTarget(portions, calories);  

    const timeTarget = timeTargetCalories(targetCalories, mealsNumber, lastMeal, firstMeal);
    const completed = completedCalories(currentCalories, targetCalories);
    const exceeded = exceededCalories(currentCalories, targetCalories);

    const calculateClassName = (): string => {
        const completed = currentCalories / targetCalories * 100;
        if (completed > 55) {
            return styles.calories + ' ' + styles.completed;
        } else {
            return styles.calories;
        }   
    }

    return  (
    <div className={styles.container}>
        <div className={styles.target} style={timeTarget}></div>
        <div className={styles.completed} style={completed}></div>
        <div className={styles.exceeded} style={exceeded}></div>
        <div className={calculateClassName()}>{currentCalories} kcal</div>
    </div>)
}