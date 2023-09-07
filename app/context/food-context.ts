"use client"

import { createContext } from 'react';

export const FoodContext = createContext({
    fruit: 3,
    veggies: 4,
    carbs: 4,
    prots: 4,
    fats: 3,
    sweets: 1
})

export interface PortionsChecked {
    fruit: number;
    veggies: number;
    carbs: number;
    prots: number;
    fats: number;
    sweets: number;
}

export const PortionsCheckedContext = createContext({
    portionsChecked: {
        fruit: 0,
        veggies: 0,
        carbs: 0,
        prots: 0,
        fats: 0,
        sweets: 0,
    }
} as PortionsCheckedContextProperty);

export interface PortionsCheckedContextProperty {
    portionsChecked: PortionsChecked;
    setPortionsChecked: (newValue: PortionsChecked) => void;
};
