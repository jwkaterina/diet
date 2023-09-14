export const  MealsReducer = (meals: any, action: any) => {
    switch (action.type) {
        case 'add': {
            switch (action.group) {
                case 'firstMeal': {
                    localStorage.setItem('meals', JSON.stringify({...meals, firstMeal: meals.firstMeal + 1}));
                    return {...meals, firstMeal: meals.firstMeal + 1};
                }
                case 'lastMeal': {
                    localStorage.setItem('meals', JSON.stringify({...meals, lastMeal: meals.lastMeal + 1}));
                    return {...meals, lastMeal: meals.lastMeal + 1};
                }
                case 'mealsNumber': {
                    localStorage.setItem('meals', JSON.stringify({...meals, mealsNumber: meals.mealsNumber + 1}));
                    return {...meals, mealsNumber: meals.mealsNumber + 1};
                }
            }
        }
        case 'reduce': {
            switch (action.group) {
                case 'firstMeal': {
                    localStorage.setItem('meals', JSON.stringify({...meals, firstMeal: meals.firstMeal - 1}));
                    return {...meals, firstMeal: meals.firstMeal - 1};
                }
                case 'lastMeal': {
                    localStorage.setItem('meals', JSON.stringify({...meals, lastMeal: meals.lastMeal - 1}));
                    return {...meals, lastMeal: meals.lastMeal - 1};
                }
                case 'mealsNumber': {
                    localStorage.setItem('meals', JSON.stringify({...meals, mealsNumber: meals.mealsNumber - 1}));
                    return {...meals, mealsNumber: meals.mealsNumber - 1};
                }
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}