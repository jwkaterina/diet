import './progress-bar.css'
import './progress-completed.css'
import './progress-exceeded.css'
import './progress-target.css'
import { useContext } from 'react';
import { CaloriesContext, PortionsCheckedContext } from '../../../context/food-context'

export const ProgressBar = () => {

    const fruitCal = useContext(CaloriesContext).fruit * useContext(PortionsCheckedContext).portionsChecked.fruit;
    console.log(useContext(PortionsCheckedContext).portionsChecked.fruit)
    const veggiesCal = useContext(CaloriesContext).veggies * useContext(PortionsCheckedContext).portionsChecked.veggies;
    const carbsCal = useContext(CaloriesContext).carbs * useContext(PortionsCheckedContext).portionsChecked.carbs;
    const protsCal = useContext(CaloriesContext).prots * useContext(PortionsCheckedContext).portionsChecked.prots;
    const fatsCal = useContext(CaloriesContext).fats * useContext(PortionsCheckedContext).portionsChecked.fats;
    const sweetsCal = useContext(CaloriesContext).sweets * useContext(PortionsCheckedContext).portionsChecked.sweets;

    const calculateCalories = () => {
     
        const calories = fruitCal + veggiesCal + carbsCal + protsCal + fatsCal + sweetsCal;
        console.log(calories)

        return calories;
    }

    return  (
    <div className="ProgressBar">
        <div className="ProgressBar__completed"></div>
        <div className="ProgressBar__exceeded"></div>
        <div className="ProgressBar__calories">{calculateCalories()} kcal</div>
    </div>)
}