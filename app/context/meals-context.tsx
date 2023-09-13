"use client"

import { createContext, useState } from 'react';

export interface MealsProperty {
    firstMeal: number;
    lastMeal: number;
    mealsNumber: number;
}

const initialMeals: MealsProperty = {
    firstMeal: 9,
    lastMeal: 21,
    mealsNumber: 3
}

export const MealsContext = createContext({
    meals: initialMeals
} as MealsContextProperty);

export interface MealsContextProperty {
    meals: MealsProperty;
    setMeals: (meals: MealsProperty) => void;
};

export const MealsProvider = ({ children }: any) => {
    const [meals, setMeals] = useState<MealsProperty>(initialMeals);

    return (
      <MealsContext.Provider value={{meals, setMeals}}>
          {children}
      </MealsContext.Provider>
    );
}