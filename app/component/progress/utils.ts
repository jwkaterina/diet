import { Portions } from '../../context/portions-context';

export const currentCalories = (portions: Portions, halfPortions: boolean) => {
    if(halfPortions) {
        const fruitCal = portions.fruit.calories / 2 * portions.fruit.checked;
        const veggiesCal = portions.veggies.calories / 2 * portions.veggies.checked;
        const carbsCal = portions.carbs.calories / 2 * portions.carbs.checked;
        const protsCal = portions.prots.calories / 2 * portions.prots.checked;
        const fatsCal = portions.fats.calories / 2 * portions.fats.checked;
        const sweetsCal = portions.sweets.calories / 2 * portions.sweets.checked;
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    } else {
        const fruitCal = portions.fruit.calories * portions.fruit.checked;
        const veggiesCal = portions.veggies.calories * portions.veggies.checked;
        const carbsCal = portions.carbs.calories * portions.carbs.checked;
        const protsCal = portions.prots.calories * portions.prots.checked;
        const fatsCal = portions.fats .calories* portions.fats.checked;
        const sweetsCal = portions.sweets.calories * portions.sweets.checked;
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    }

}

export const calculateTarget = (portions: Portions) => {
    const fruitCal = portions.fruit.calories * portions.fruit.number;
    const veggiesCal = portions.veggies.calories * portions.veggies.number;
    const carbsCal = portions.carbs.calories * portions.carbs.number;
    const protsCal = portions.prots.calories * portions.prots.number;
    const fatsCal = portions.fats .calories* portions.fats.number;
    const sweetsCal = portions.sweets.calories * portions.sweets.number;
    const targetCalories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
    return targetCalories;
}