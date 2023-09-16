'use client'

import './progress-bar.css'
import { useContext } from 'react';
import { PortionsContext } from '../../context/portions-context'
import { MealsContext } from '../../context/meals-context'
import { SettingsContext } from '../../context/settings-context'
import { currentCalories } from './utils'
import { calculateTarget } from './utils'

export const ProgressBar = () => {
    const portions = useContext(PortionsContext).portions;
    const {firstMeal, lastMeal, mealsNumber} = useContext(MealsContext).meals;
    const {settings} = useContext(SettingsContext);

    const calories =  currentCalories(portions, settings.halfPortions);
    const targetCalories = calculateTarget(portions);

    const timeTargetCalories = () => {
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

    const completedCalories = () => {
        const fraction = calories / targetCalories;
        const percentage = fraction * 100;
        return {
            width: `${percentage}%`
        };    
    }

    const exceededCalories = () => {
        const fraction = (calories - targetCalories) / targetCalories;
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

    const calculateClassName = () => {
        const completed = calories / targetCalories * 100;
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
        <div className={calculateClassName()}>{calories} kcal</div>
    </div>)
}