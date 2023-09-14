'use client'

import React, { FunctionComponent, useContext } from 'react';
import { SettingsSection } from './settings-section';
import { ProgressCell } from '../cells/progress-cell';
import { MealsContext } from '../../../context/meals-context';

export const ProgressSection: FunctionComponent = (props) => {
    const {meals, dispatch} = useContext(MealsContext);
    const {firstMeal, lastMeal, mealsNumber} = meals;

    const handeFirstMealMinusClick = () => {
        if (firstMeal < 1) return;
        dispatch({
            type: 'reduce',
            group: 'firstMeal',
          });
    }

    const handleFirstMealPlusClick = () => {
        if (firstMeal >= 23 || lastMeal - firstMeal <= 1 ) return;
        dispatch({
            type: 'add',
            group: 'firstMeal',
          });
    }

    const handleLastMealMinusClick = () => {
        if (lastMeal - firstMeal <= 1 ) return;
        dispatch({
            type: 'reduce',
            group: 'lastMeal',
          });
    }

    const handleLastMealPlusClick = () => {
        if (lastMeal >= 23 ) return;
        dispatch({
            type: 'add',
            group: 'lastMeal',
          });
    }

    const handleMealsNumberMinusClick = () => {
        if (mealsNumber <= 2 ) return;
        dispatch({
            type: 'reduce',
            group: 'mealsNumber',
          });
    }

    const handleMealsNumberPlusClick = () => {
        dispatch({
            type: 'add',
            group: 'mealsNumber',
          });
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