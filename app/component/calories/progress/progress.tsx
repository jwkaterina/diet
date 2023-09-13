'use client'

import './progress-bar.css'
import { useContext } from 'react';
import { PortionsContext } from '../../../context/portions-context'
import { MealsContext } from '../../../context/meals-context'

export const ProgressBar = () => {
    const portions = useContext(PortionsContext).portions;
    const {firstMeal, lastMeal, mealsNumber} = useContext(MealsContext).meals;

    const currentCalories = () => {
        const fruitCal = portions.fruit.calories * portions.fruit.checked;
        const veggiesCal = portions.veggies.calories * portions.veggies.checked;
        const carbsCal = portions.carbs.calories * portions.carbs.checked;
        const protsCal = portions.prots.calories * portions.prots.checked;
        const fatsCal = portions.fats .calories* portions.fats.checked;
        const sweetsCal = portions.sweets.calories * portions.sweets.checked;
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    }

    const calculateTarget = () => {
        const fruitCal = portions.fruit.calories * portions.fruit.number;
        const veggiesCal = portions.veggies.calories * portions.veggies.number;
        const carbsCal = portions.carbs.calories * portions.carbs.number;
        const protsCal = portions.prots.calories * portions.prots.number;
        const fatsCal = portions.fats .calories* portions.fats.number;
        const sweetsCal = portions.sweets.calories * portions.sweets.number;
        const targetCalories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return targetCalories;
    }

    const calories =  currentCalories();
    const targetCalories = calculateTarget();

    const completedCalories = () => {
        const fraction = calories / targetCalories;
        const percentage = fraction * 100;
        return {
            width: `${percentage}%`
        };    
    }

   
    const calculateClassName = () => {
        const completed = calories / targetCalories * 100;
        if (completed > 55) {
            return "ProgressBar__calories white";
        } else {
            return "ProgressBar__calories";
        }   
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

    return  (
    <div className="ProgressBar">
        <div className="ProgressBar__target" style={timeTargetCalories()}></div>
        <div className="ProgressBar__completed" style={completedCalories()}></div>
        <div className="ProgressBar__exceeded" style={exceededCalories()}></div>
        <div className={calculateClassName()}>{currentCalories()} kcal</div>
    </div>)
}