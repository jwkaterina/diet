"use client"

import { createContext, useReducer } from 'react';
import { MealsReducer } from './meals-reducer';

export interface MealsProperty {
    firstMeal: number;
    lastMeal: number;
    mealsNumber: number;
}

let initialMeals: MealsProperty;
if(localStorage.getItem('meals')) {
    initialMeals = JSON.parse(localStorage.getItem('meals')!)
} else initialMeals = {
    firstMeal: 9,
    lastMeal: 21,
    mealsNumber: 3
}

export const MealsContext = createContext({
    meals: initialMeals
} as MealsContextProperty);

export interface MealsContextProperty {
    meals: MealsProperty;
    dispatch: (newValue: any) => void;
};

export const MealsProvider = ({ children }: any) => {
    const [meals, dispatch] = useReducer(MealsReducer, initialMeals);

    return (
      <MealsContext.Provider value={{meals, dispatch}}>
          {children}
      </MealsContext.Provider>
    );
}