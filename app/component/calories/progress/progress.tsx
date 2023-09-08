import './progress-bar.css'
// import './progress-target.css'
import { useContext } from 'react';
import { CaloriesContext, PortionsCheckedContext } from '../../../context/food-context'
import { TargetCaloriesContext } from '../../../context/settings-context'

export const ProgressBar = () => {

    const fruitCal = useContext(CaloriesContext).fruit * useContext(PortionsCheckedContext).portionsChecked.fruit;
    const veggiesCal = useContext(CaloriesContext).veggies * useContext(PortionsCheckedContext).portionsChecked.veggies;
    const carbsCal = useContext(CaloriesContext).carbs * useContext(PortionsCheckedContext).portionsChecked.carbs;
    const protsCal = useContext(CaloriesContext).prots * useContext(PortionsCheckedContext).portionsChecked.prots;
    const fatsCal = useContext(CaloriesContext).fats * useContext(PortionsCheckedContext).portionsChecked.fats;
    const sweetsCal = useContext(CaloriesContext).sweets * useContext(PortionsCheckedContext).portionsChecked.sweets;

    const calculateCalories = () => {
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        return calories;
    }

    const calories =  calculateCalories();

    const calculateCompleted = () => {
        const fraction = calories / useContext(TargetCaloriesContext);
        const percentage = fraction * 100;
        return {
            width: `${percentage}%`
        };;
    }

    const calculateExceeded = () => {
        const fraction = (calories - useContext(TargetCaloriesContext)) / useContext(TargetCaloriesContext);
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
    return  (
    <div className="ProgressBar">
        <div className="ProgressBar__completed" style={calculateCompleted()}></div>
        <div className="ProgressBar__exceeded" style={calculateExceeded()}></div>
        <div className="ProgressBar__calories">{calculateCalories()} kcal</div>
    </div>)
}