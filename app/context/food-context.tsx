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

const initialPortionsChecked = {
    fruit: 0, 
    veggies: 0,
    carbs: 0,
    prots: 0,
    fats: 0,
    sweets: 0
}

export const PortionsCheckedContext = createContext({
    portionsChecked: initialPortionsChecked
} as PortionsCheckedContextProperty);

export interface PortionsCheckedContextProperty {
    portionsChecked: Portions;
    dispatch: (newValue: any) => void;
};

export const PortionsCheckedProvider = ({ children }: any) => {
    const [portionsChecked, dispatch] = useReducer(
        portionsCheckedReducer, initialPortionsChecked
    );

    return (
      <PortionsCheckedContext.Provider value={{portionsChecked, dispatch}}>
          {children}
      </PortionsCheckedContext.Provider>
    );
}

function portionsCheckedReducer(portionsChecked: Portions, action: any) {
    switch (action.type) {
      case 'check': {
        if(action.group == 'carbs') return {...portionsChecked, carbs: action.index};
        if(action.group == 'fats') return {...portionsChecked, fats: action.index};
        if(action.group == 'fruit') return {...portionsChecked, fruit: action.index};
        if(action.group == 'prots') return {...portionsChecked, prots: action.index};
        if(action.group == 'sweets') return {...portionsChecked, sweets: action.index};
        if(action.group == 'veggies') return {...portionsChecked, veggies: action.index};
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
