"use client"

import { createContext, useReducer } from 'react';
import { PortionsReducer } from './portions-reducer';

export interface Portions {
    fruit: {calories: number, number: number, checked: number}, 
    veggies: {calories: number, number: number, checked: number},
    carbs: {calories: number, number: number, checked: number},
    prots: {calories: number, number: number, checked: number},
    fats: {calories: number, number: number, checked: number},
    sweets: {calories: number, number: number, checked: number}
}

const initialPortions: Portions = {
    fruit: {calories: 60, number: 3, checked: 0}, 
    veggies: {calories: 25, number: 4, checked: 0},
    carbs: {calories: 70, number: 4, checked: 0},
    prots: {calories: 110, number: 3, checked: 0},
    fats: {calories: 45, number: 3, checked: 0},
    sweets: {calories: 75, number: 1, checked: 0}
}

export const PortionsContext = createContext({
    portions: initialPortions
} as PortionsContextProperty);

export interface PortionsContextProperty {
    portions: Portions;
    dispatch: (newValue: any) => void;
};

export const PortionsProvider = ({ children }: any) => {
    const [portions, dispatch] = useReducer(
        PortionsReducer, initialPortions
    );

    return (
      <PortionsContext.Provider value={{portions, dispatch}}>
          {children}
      </PortionsContext.Provider>
    );
}


