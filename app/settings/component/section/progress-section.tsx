'use client'

import SettingsSection from './settings-section';
import ProgressCell from '../cells/progress-cell';
import { useMeals, useMealsDispatch } from '../../../context/meals-context';
import { handleFirstMealPlusClick, handleFirstMealMinusClick, handleLastMealPlusClick, handleLastMealMinusClick, handleMealsNumberPlusClick, handleMealsNumberMinusClick } from './progress-utils';

import styles from './section.module.css'


export default function ProgressSection(): JSX.Element {
    const {firstMeal, lastMeal, mealsNumber}  = useMeals();
    const dispatch = useMealsDispatch();

    return (
        <SettingsSection>
            <h2>Progress Bar</h2>
            <div className={styles.grid}>
                <ProgressCell count={firstMeal} 
                    onPlusClick={() =>handleFirstMealPlusClick(firstMeal, lastMeal, dispatch)} 
                    onMinusClick={() => handleFirstMealMinusClick(firstMeal, dispatch)}
                >First Meal At:</ProgressCell>
                <ProgressCell count={lastMeal} 
                    onPlusClick={() => handleLastMealPlusClick(lastMeal, dispatch)} 
                    onMinusClick={() => handleLastMealMinusClick(firstMeal, lastMeal, dispatch)}
                >Last Meal At:</ProgressCell>
                <ProgressCell count={mealsNumber} 
                    onPlusClick={() => handleMealsNumberPlusClick(dispatch)}          
                    onMinusClick={() => handleMealsNumberMinusClick(mealsNumber, dispatch)}
                >Daily Meals Number:</ProgressCell>        
            </div>                
        </SettingsSection>
    )
}