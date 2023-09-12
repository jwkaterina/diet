import './progress-bar.css'
import { useContext } from 'react';
import { PortionsContext } from '../../../context/food-context'
import { TargetCaloriesContext, MealsTimeContext, MealsNumberContext } from '../../../context/settings-context'

export const ProgressBar = () => {

    const fruitCal = useContext(PortionsContext).portions.fruit.calories * useContext(PortionsContext).portions.fruit.checked;
    const veggiesCal = useContext(PortionsContext).portions.veggies.calories * useContext(PortionsContext).portions.veggies.checked;
    const carbsCal = useContext(PortionsContext).portions.carbs.calories * useContext(PortionsContext).portions.carbs.checked;
    const protsCal = useContext(PortionsContext).portions.prots.calories * useContext(PortionsContext).portions.prots.checked;
    const fatsCal = useContext(PortionsContext).portions.fats .calories* useContext(PortionsContext).portions.fats.checked;
    const sweetsCal = useContext(PortionsContext).portions.sweets.calories * useContext(PortionsContext).portions.sweets.checked;
    const targetCalories = useContext(TargetCaloriesContext);
    const mealsNumber = useContext(MealsNumberContext);
    const firstMeal = useContext(MealsTimeContext).firstMeal;
    const lastMeal = useContext(MealsTimeContext).lastMeal;

    const currentCalories = () => {
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    }

    const calories =  currentCalories();

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