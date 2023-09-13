'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { ProgressCell } from '../cells/progress-cell';
import { MealsContext } from '../../../context/meals-context';

export const ProgressSection: FunctionComponent = (props) => {
    const {meals, setMeals} = useContext(MealsContext);
    const {firstMeal, lastMeal, mealsNumber} = meals;

    const handeFirstMealMinusClick = () => {
        if (firstMeal < 1) return;
        setMeals({...meals, firstMeal: firstMeal - 1})
    }

    const handleFirstMealPlusClick = () => {
        if (firstMeal >= 23 || lastMeal - firstMeal <= 1 ) return;
        setMeals({...meals, firstMeal: firstMeal + 1})
    }

    const handleLastMealMinusClick = () => {
        if (lastMeal - firstMeal <= 1 ) return;
        setMeals({...meals, lastMeal: lastMeal - 1})
    }

    const handleLastMealPlusClick = () => {
        if (lastMeal >= 23 ) return;
        setMeals({...meals, lastMeal: lastMeal + 1})
    }

    const handleMealsNumberMinusClick = () => {
        if (mealsNumber <= 2 ) return;
        setMeals({...meals, mealsNumber: mealsNumber - 1})
    }

    const handleMealsNumberPlusClick = () => {
        setMeals({...meals, mealsNumber: mealsNumber + 1})
    }

    return (
        <SettingsSection>
            <h2>Progress Bar</h2>
            <div className="Settings__section-body Settings__time-grid">
                <ProgressCell count={firstMeal} onPlusClick={handleFirstMealPlusClick} onMinusClick={handeFirstMealMinusClick}>First Meal At:</ProgressCell>
                <ProgressCell count={lastMeal} onPlusClick={handleLastMealPlusClick} onMinusClick={handleLastMealMinusClick}>Last Meal At:</ProgressCell>
                <ProgressCell count={mealsNumber} onPlusClick={handleMealsNumberPlusClick} onMinusClick={handleMealsNumberMinusClick}>Daily Meals Number:</ProgressCell>        
            </div>                
        </SettingsSection>
    )
}

export interface GeneralSectionProps {
    children: React.ReactNode;
}