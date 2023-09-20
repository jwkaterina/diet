'use client'

import './progress-bar.css'
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

    type Style = {
        left?: string,
        width?: string
    }

    const timeTargetCalories = (): Style => {
        const oneMealCalories = targetCalories / mealsNumber;
        const timeBetweenMeals = (lastMeal - firstMeal) / (mealsNumber - 1);
        const time = new Date().getHours();
        const timeCalories = (((time - firstMeal) / timeBetweenMeals) + 1) * (oneMealCalories);
        const fraction = timeCalories / targetCalories;
        const percentage = fraction * 100;
        return {
            left: `${percentage}%`
            
        };;
    }

    const completedCalories = (): Style => {
        const fraction = currentCalories / targetCalories;
        const percentage = fraction * 100;
        return {
            width: `${percentage}%`
        };    
    }

    const exceededCalories = (): Style => {
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

    const calculateClassName = (): string => {
        const completed = currentCalories / targetCalories * 100;
        if (completed > 55) {
            return "ProgressBar__calories white";
        } else {
            return "ProgressBar__calories";
        }   
    }

    return  (
    <div className="ProgressBar">
        <div className="ProgressBar__target" style={timeTargetCalories()}></div>
        <div className="ProgressBar__completed" style={completedCalories()}></div>
        <div className="ProgressBar__exceeded" style={exceededCalories()}></div>
        <div className={calculateClassName()}>{currentCalories} kcal</div>
    </div>)
}