"use client"

import { createContext, useReducer } from 'react';

export interface Portions {
    fruit: {calories: number, number: number, checked: number}, 
    veggies: {calories: number, number: number, checked: number},
    carbs: {calories: number, number: number, checked: number},
    prots: {calories: number, number: number, checked: number},
    fats: {calories: number, number: number, checked: number},
    sweets: {calories: number, number: number, checked: number}
}

export const PortionsNumberContext = createContext({
    portionsNumber: {
        fruit: 3,
        veggies: 4,
        carbs: 4,
        prots: 4,
        fats: 3,
        sweets: 1
    }
} as PortionsNumberContextProperty);

export interface PortionsNumberContextProperty {
    portionsNumber: any;
    setPortionsNumber: (newValue: any) => void;
};

export const CaloriesContext = createContext({
    fruit: 60,
    veggies: 25,
    carbs: 70,
    prots: 110,
    fats: 45,
    sweets: 75,
})

const initialPortions: Portions = {
    fruit: {calories: 60, number: 0, checked: 0}, 
    veggies: {calories: 25, number: 0, checked: 0},
    carbs: {calories: 70, number: 0, checked: 0},
    prots: {calories: 110, number: 0, checked: 0},
    fats: {calories: 45, number: 0, checked: 0},
    sweets: {calories: 75, number: 0, checked: 0}
}

export const PortionsContext = createContext({
    portions: initialPortions
} as PortionsContextProperty);

export interface PortionsContextProperty {
    portions: Portions;
    dispatch: (newValue: Portions) => void;
};

export const PortionsProvider = ({ children }: any) => {
    const [portions, dispatch] = useReducer(
        portionsReducer, initialPortions
    );

    return (
      <PortionsContext.Provider value={{portions, dispatch}}>
          {children}
      </PortionsContext.Provider>
    );
}

function portionsReducer(portions: any, action: any) {
    switch (action.type) {
      case 'check': {
        if(action.group == 'carbs') return {...portions, carbs: {
            ...portions.carbs, checked: action.index
        }};
        if(action.group == 'fats') return {...portions, fats: {
            ...portions.carbs, checked: action.index
        }};
        if(action.group == 'fruit') return {...portions, fruit: {
            ...portions.carbs, checked: action.index
        }};
        if(action.group == 'prots') return {...portions, prots: {
            ...portions.carbs, checked: action.index
        }};
        if(action.group == 'sweets') return {...portions, sweets: {
            ...portions.carbs, checked: action.index
        }};
        if(action.group == 'veggies') return {...portions, veggies: {
            ...portions.carbs, checked: action.index
        }};
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}
