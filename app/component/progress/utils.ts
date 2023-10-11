import { Portions } from '../../context/portions-context';
import { Calories } from '../../page';

type Style = {
    left?: string,
    width?: string
}

export const calculateCurrent = (portions: Portions, halfPortions: boolean, calories: Calories): number => {
    const fruitPortion = calories.fruit;
    const veggiesPortion = calories.veggies;
    const carbsPortion = calories.carbs;
    const protsPortion = calories.prots;
    const fatsPortion = calories.fats;
    const sweetsPortion = calories.sweets;

    if(halfPortions) {
        const fruitCal = Math.floor(fruitPortion / 2 * portions.fruit.checked);
        const veggiesCal = Math.floor(veggiesPortion / 2 * portions.veggies.checked);
        const carbsCal = Math.floor(carbsPortion / 2 * portions.carbs.checked);
        const protsCal = Math.floor(protsPortion / 2 * portions.prots.checked);
        const fatsCal = Math.floor(fatsPortion / 2 * portions.fats.checked);
        const sweetsCal = Math.floor(sweetsPortion / 2 * portions.sweets.checked);
        const currentCalories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return currentCalories;
    } else {
        const fruitCal = fruitPortion* portions.fruit.checked;
        const veggiesCal = veggiesPortion * portions.veggies.checked;
        const carbsCal = carbsPortion * portions.carbs.checked;
        const protsCal = protsPortion * portions.prots.checked;
        const fatsCal = fatsPortion * portions.fats.checked;
        const sweetsCal = sweetsPortion * portions.sweets.checked;
        const currentCalories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return currentCalories;
    }
}

export const calculateTarget = (portions: Portions, calories: Calories): number => {
    const fruitCal = calories.fruit * portions.fruit.number;
    const veggiesCal = calories.veggies * portions.veggies.number;
    const carbsCal = calories.carbs * portions.carbs.number;
    const protsCal = calories.prots * portions.prots.number;
    const fatsCal = calories.fats * portions.fats.number;
    const sweetsCal = calories.sweets * portions.sweets.number;
    const targetCalories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
    return targetCalories;
}

export const timeTargetCalories = (targetCalories: number,mealsNumber: number, lastMeal: number, firstMeal: number): Style => {
    const oneMealCalories = targetCalories / mealsNumber;
    const timeBetweenMeals = (lastMeal - firstMeal) / (mealsNumber - 1);
    const time = new Date().getHours();
    const timeCalories = (((time - firstMeal) / timeBetweenMeals) + 1) * (oneMealCalories);
    const fraction = timeCalories / targetCalories;
    console.log(fraction)

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