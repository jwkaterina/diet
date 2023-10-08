import { Dispatch } from 'react';

export const handleFirstMealMinusClick = (firstMeal: number, dispatch: Dispatch<any>) => {
    if (firstMeal < 1) return;
    dispatch({
        type: 'reduce',
        group: 'firstMeal',
      });
}

export const handleFirstMealPlusClick = (firstMeal: number, lastMeal: number, dispatch: Dispatch<any>) => {
    if (firstMeal >= 23 || lastMeal - firstMeal <= 1 ) return;
    dispatch({
        type: 'add',
        group: 'firstMeal',
      });
}

export const handleLastMealMinusClick = (firstMeal: number, lastMeal: number, dispatch: Dispatch<any>) => {
    if (lastMeal - firstMeal <= 1 ) return;
    dispatch({
        type: 'reduce',
        group: 'lastMeal',
      });
}

export const handleLastMealPlusClick = (lastMeal: number, dispatch: Dispatch<any>) => {
    if (lastMeal >= 23 ) return;
    dispatch({
        type: 'add',
        group: 'lastMeal',
      });
}

export const handleMealsNumberMinusClick = (mealsNumber: number, dispatch: Dispatch<any>) => {
    if (mealsNumber <= 2 ) return;
    dispatch({
        type: 'reduce',
        group: 'mealsNumber',
      });
}

export const handleMealsNumberPlusClick = (dispatch: Dispatch<any>) => {
    dispatch({
        type: 'add',
        group: 'mealsNumber',
      });
}