"use client"

import { createContext, useReducer, useContext} from 'react';
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

const MealsContext = createContext<MealsProperty>(initialMeals);

const MealsDispatchContext = createContext((() => {}) as React.Dispatch<any>);

export const MealsProvider = ({ children }: any) => {
    const [meals, dispatch] = useReducer(MealsReducer, initialMeals);

    return (
      <MealsContext.Provider value={meals}>
        <MealsDispatchContext.Provider value={dispatch}>
          {children}
        </MealsDispatchContext.Provider>
      </MealsContext.Provider>
    );
}

export const useMeals = () => {
    return useContext(MealsContext);
  }
  
  export const  useMealsDispatch = () => {
    return useContext(MealsDispatchContext);
  }