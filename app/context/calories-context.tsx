import { createContext, useContext, useReducer } from 'react';

export type Calories = {
    fruit: number,
    veggies: number,
    carbs: number,
    prots: number,
    fats: number,
    sweets: number
}

const portionCalories: Calories = {
    fruit: 60,
    veggies: 25,
    carbs: 70,
    prots: 110,
    fats: 45,
    sweets: 75
}

const CaloriesContext = createContext<Calories>(portionCalories);

export const CaloriesProvider = ({ children }: any) => {

  return (
    <CaloriesContext.Provider value={portionCalories}>
        {children}
    </CaloriesContext.Provider>
  );
}

export const useCalories = () => {
  return useContext(CaloriesContext);
}