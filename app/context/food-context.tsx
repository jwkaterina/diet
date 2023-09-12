"use client"

import { createContext, useReducer } from 'react';

export interface Portions {
    fruit: number;
    veggies: number;
    carbs: number;
    prots: number;
    fats: number;
    sweets: number;
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
    portionsNumber: Portions;
    setPortionsNumber: (newValue: Portions) => void;
};

export const CaloriesContext = createContext<Portions>({
    fruit: 60,
    veggies: 25,
    carbs: 70,
    prots: 110,
    fats: 45,
    sweets: 75,
})

const initialPortions = {
    fruit: {number: 0, calories: 60, checked: 0}, 
    veggies: {number: 0, calories: 25, checked: 0},
    carbs: {number: 0, calories: 70, checked: 0},
    prots: {number: 0, calories: 110, checked: 0},
    fats: {number: 0, calories: 45, checked: 0},
    sweets: {number: 0, calories: 75, checked: 0}
}

export const PortionsCheckedContext = createContext({
    portionsChecked: initialPortions
} as PortionsCheckedContextProperty);

export interface PortionsCheckedContextProperty {
    portionsChecked: any;
    dispatch: (newValue: any) => void;
};

export const PortionsCheckedProvider = ({ children }: any) => {
    const [portionsChecked, dispatch] = useReducer(
        portionsCheckedReducer, initialPortions
    );

    return (
      <PortionsCheckedContext.Provider value={{portionsChecked, dispatch}}>
          {children}
      </PortionsCheckedContext.Provider>
    );
}

function portionsCheckedReducer(portions: any, action: any) {
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
