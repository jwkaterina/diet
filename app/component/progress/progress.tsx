'use client'

import styles from './progress.module.css'
import { usePortions } from '../../context/portions-context'
import { useMeals } from '../../context/meals-context'
import { useSettings } from '../../context/settings-context'
import { Calories } from '../../page'
import { calculateCurrent } from './utils'
import { calculateTarget } from './utils'

interface ProgressProps {
    calories: Calories;
}

export default function ProgressBar({ calories }: ProgressProps): JSX.Element {
    const portions = usePortions();
    const { firstMeal, lastMeal, mealsNumber } = useMeals();
    const settings = useSettings();

    const currentCalories =  calculateCurrent(portions, settings.halfPortions, calories);
    const targetCalories = calculateTarget(portions, calories);  

    const time = new Date().getHours();

    const timeTarget = timeTargetCalories(targetCalories, mealsNumber, lastMeal, firstMeal, time);
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

type Style = {
    left?: string,
    width?: string
}

export const timeTargetCalories = (targetCalories: number,mealsNumber: number, lastMeal: number, firstMeal: number, time: number): Style => {
    const oneMealCalories = targetCalories / mealsNumber;
    const timeBetweenMeals = (lastMeal - firstMeal) / (mealsNumber - 1);
    const timeCalories = (((time - firstMeal) / timeBetweenMeals) + 1) * (oneMealCalories);
    const fraction = timeCalories / targetCalories;
    const percentage = fraction * 100;
    return {
        left: `${percentage}%`
        
    };;
}

export const completedCalories = (currentCalories: number, targetCalories: number): Style => {
    const fraction = currentCalories / targetCalories;
    const percentage = fraction * 100;
    return {
        width: `${percentage}%`
    };    
}

export const exceededCalories = (currentCalories: number, targetCalories: number): Style => {
    const fraction = (currentCalories - targetCalories) / targetCalories;
    const percentage = fraction * 100;
    if (percentage > 0) {
        return {
            width: `${percentage}%`
        };
    } else {
        return {
            width: `0%`
        };
    }
}
