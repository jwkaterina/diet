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
        portionsReducer, initialPortions
    );

    return (
      <PortionsContext.Provider value={{portions, dispatch}}>
          {children}
      </PortionsContext.Provider>
    );
}

export enum Group {
    FRUIT = 'fruit',
    VEGGIES = 'veggies',
    CARBS = 'carbs',
    PROTS = 'prots',
    FATS = 'fats',
    SWEETS = 'sweets'
}

function portionsReducer(portions: any, action: any) {
    switch (action.type) {
      case 'check': {
        if(action.group == Group.CARBS) return {...portions, carbs: {
            ...portions.carbs, checked: action.checked
        }};
        if(action.group == Group.FATS) return {...portions, fats: {
            ...portions.fats, checked: action.checked
        }};
        if(action.group == Group.FRUIT) return {...portions, fruit: {
            ...portions.fruit, checked: action.checked
        }};
        if(action.group == Group.PROTS) return {...portions, prots: {
            ...portions.prots, checked: action.checked
        }};
        if(action.group == Group.SWEETS) return {...portions, sweets: {
            ...portions.sweets, checked: action.checked
        }};
        if(action.group == Group.VEGGIES) return {...portions, veggies: {
            ...portions.veggies, checked: action.checked
        }};
      }
      case 'add': {
        if(action.group == Group.CARBS) return {...portions, carbs: {
            ...portions.carbs, number: portions.carbs.number + 1
        }};
        if(action.group == Group.FATS) return {...portions, fats: {
            ...portions.fats, number: portions.fats.number + 1
        }};
        if(action.group == Group.FRUIT) return {...portions, fruit: {
            ...portions.fruit, number: portions.fruit.number + 1
        }};
        if(action.group == Group.PROTS) return {...portions, prots: {
            ...portions.prots, number: portions.prots.number + 1
        }};
        if(action.group == Group.SWEETS) return {...portions, sweets: {
            ...portions.sweets, number: portions.sweets.number + 1
        }};
        if(action.group == Group.VEGGIES) return {...portions, veggies: {
            ...portions.veggies, number: portions.veggies.number + 1
        }};
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
}
