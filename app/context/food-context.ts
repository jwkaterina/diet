"use client"

import { createContext } from 'react';

export interface Portions {
    fruit: number;
    veggies: number;
    carbs: number;
    prots: number;
    fats: number;
    sweets: number;
}

export const PortionsNumberContext = createContext<Portions>({
    fruit: 3,
    veggies: 4,
    carbs: 4,
    prots: 4,
    fats: 3,
    sweets: 1
})

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
    portionsChecked: Portions;
    setPortionsChecked: (newValue: Portions) => void;
};

export const CaloriesContext = createContext<Portions>({
    fruit: 60,
    veggies: 25,
    carbs: 70,
    prots: 110,
    fats: 45,
    sweets: 75,
})
