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