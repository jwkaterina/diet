"use client"

import { createContext } from 'react';

export const MealsNumberContext = createContext(3);

export interface MealTimeProperty {
    firstMeal: number;
    lastMeal: number;
}

export const MealsTimeContext = createContext<MealTimeProperty>({
    firstMeal: 9,
    lastMeal: 21
});

export const TargetCaloriesContext = createContext(1200);
