"use client"

import { createContext, useReducer } from 'react';
import { PortionsReducer } from './portions-reducer';

export interface Portions {
    fruit: {number: number, checked: number}, 
    veggies: {number: number, checked: number},
    carbs: {number: number, checked: number},
    prots: {number: number, checked: number},
    fats: {number: number, checked: number},
    sweets: {number: number, checked: number}
}

let initialPortions: Portions;
if(localStorage.getItem('portions')) {
    initialPortions = JSON.parse(localStorage.getItem('portions')!)
} else initialPortions = {
    fruit: {number: 3, checked: 0}, 
    veggies: {number: 4, checked: 0},
    carbs: {number: 4, checked: 0},
    prots: {number: 3, checked: 0},
    fats: {number: 3, checked: 0},
    sweets: {number: 1, checked: 0}
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


