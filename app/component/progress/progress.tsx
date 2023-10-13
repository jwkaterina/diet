'use client'

import styles from './progress.module.css'
import { usePortions } from '@/app/context/portions-context'
import { useMeals } from '@/app/context/meals-context'
import { useSettings } from '@/app/context/settings-context'
import { useCalories } from '@/app/context/calories-context'
import { calculateCurrent, calculateTarget, timeTargetCalories, completedCalories, exceededCalories } from './utils'

export default function ProgressBar(): JSX.Element {
    const portions = usePortions();
    const { firstMeal, lastMeal, mealsNumber } = useMeals();
    const settings = useSettings();
    const calories = useCalories();

    const currentCalories =  calculateCurrent(portions, settings.halfPortions, calories);
    const targetCalories = calculateTarget(portions, calories);  

    const time = new Date().getHours();
    const timeTarget = timeTargetCalories(targetCalories, mealsNumber, lastMeal, firstMeal, time);
    const completed = completedCalories(currentCalories, targetCalories);
    const exceeded = exceededCalories(currentCalories, targetCalories);

    const calculateClassName = (): string => {
        const completed = currentCalories / targetCalories * 100;
        if (completed > 55) {
            return styles.calories + ' ' + styles.white;
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