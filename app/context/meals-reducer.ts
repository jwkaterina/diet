import { MealsProperty } from "./meals-context";

export const  MealsReducer = (meals: MealsProperty, action: any) => {
    switch (action.type) {
        case 'add': {
            return actionAdd(action.group, meals);
        }
        case 'reduce': {
            return actionReduce(action.group, meals);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const actionAdd = (group: string, meals: MealsProperty) => {
    switch (group) {
        case 'firstMeal': {
            const newMeals = {...meals, firstMeal: meals.firstMeal + 1};
            saveMeals(newMeals);
            return newMeals;
        }
        case 'lastMeal': {
            const newMeals = {...meals, lastMeal: meals.lastMeal + 1};
            saveMeals(newMeals);
            return newMeals;
        }
        case 'mealsNumber': {
            const newMeals = {...meals, mealsNumber: meals.mealsNumber + 1};
            saveMeals(newMeals);
            return newMeals;
        }
        default: {
            throw Error('Unknown group: ' + group);
        }
    }
}

const actionReduce = (group: string, meals: MealsProperty) => {
    switch (group) {
        case 'firstMeal': {
            const newMeals = {...meals, firstMeal: meals.firstMeal - 1};
            saveMeals(newMeals);
            return newMeals;
        }
        case 'lastMeal': {
            const newMeals = {...meals, lastMeal: meals.lastMeal - 1};
            saveMeals(newMeals);
            return newMeals;
        }
        case 'mealsNumber': {
            const newMeals = {...meals, mealsNumber: meals.mealsNumber - 1};
            saveMeals(newMeals);
            return newMeals;
        }
        default: {
            throw Error('Unknown group: ' + group);
        }
    }
}

const saveMeals = (meals: MealsProperty) => {
    localStorage.setItem('meals', JSON.stringify(meals));
}