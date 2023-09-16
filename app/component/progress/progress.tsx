'use client'

import './progress-bar.css'
import { useContext } from 'react';
import { PortionsContext } from '../../context/portions-context'
import { MealsContext } from '../../context/meals-context'
import { SettingsContext } from '../../context/settings-context'

export const ProgressBar = () => {
    const portions = useContext(PortionsContext).portions;
    const {firstMeal, lastMeal, mealsNumber} = useContext(MealsContext).meals;
    const {settings} = useContext(SettingsContext);

    let fruitCalories: number, 
    veggiesCalories: number,
    carbsCalories: number,
    protsCalories: number,
    fatsCalories: number,
    sweetsCalories: number;

    if(settings.halfPortions) {
        fruitCalories = portions.fruit.calories / 2;
        veggiesCalories = portions.veggies.calories / 2;
        carbsCalories = portions.carbs.calories / 2;
        protsCalories = portions.prots.calories / 2;
        fatsCalories = portions.fats.calories / 2;
        sweetsCalories = portions.sweets.calories / 2;
    } else {
        fruitCalories = portions.fruit.calories;
        veggiesCalories = portions.veggies.calories;
        carbsCalories = portions.carbs.calories;
        protsCalories = portions.prots.calories;
        fatsCalories = portions.fats.calories;
        sweetsCalories = portions.sweets.calories;
    }        

    const currentCalories = () => {
        const fruitCal = fruitCalories * portions.fruit.checked;
        const veggiesCal = veggiesCalories * portions.veggies.checked;
        const carbsCal = carbsCalories * portions.carbs.checked;
        const protsCal = protsCalories * portions.prots.checked;
        const fatsCal = fatsCalories* portions.fats.checked;
        const sweetsCal = sweetsCalories * portions.sweets.checked;
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    }

    const calculateTarget = () => {
        const fruitCal = fruitCalories * portions.fruit.number;
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