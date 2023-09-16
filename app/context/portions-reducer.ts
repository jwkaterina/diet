import { Portions } from "./portions-context";

export enum Group {
    FRUIT = 'fruit',
    VEGGIES = 'veggies',
    CARBS = 'carbs',
    PROTS = 'prots',
    FATS = 'fats',
    SWEETS = 'sweets'
}

export const  PortionsReducer = (portions: Portions, action: any) => {
    switch (action.type) {
        case 'check': {
            return actionCheck(action.group, action.checked, portions);
        }
        case 'add': {
            return actionAdd(action.group, portions);
        }
        case 'reduce': {
            return actionReduce(action.group, portions);
        }
        case 'clear': {
            return actionClear(portions);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const actionCheck = (group: Group, checked: number, portions: Portions) => {
    switch (group) {
        case Group.CARBS: {
            const newPortions = {...portions, carbs: {
                ...portions.carbs, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        };
        case Group.FATS: {
            const newPortions = {...portions, fats: {
                ...portions.fats, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.FRUIT: {
            const newPortions = {...portions, fruit: {
                ...portions.fruit, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.PROTS: {
            const newPortions = {...portions, prots: {
                ...portions.prots, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.SWEETS: {
            const newPortions = {...portions, sweets: {
                ...portions.sweets, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.VEGGIES: {
            const newPortions = {...portions, veggies: {
                ...portions.veggies, checked: checked
            }};
            savePortions(newPortions);
            return newPortions;
        }
        default: {
            throw Error('Unknown group: ' + group);
        }
    }
};

const actionAdd = (group: Group, portions: Portions) => {
    switch (group) {
        case Group.CARBS: {
            const newPortions = {...portions, carbs: {
                ...portions.carbs, number: portions.carbs.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.FATS: {
            const newPortions = {...portions, fats: {
                ...portions.fats, number: portions.fats.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.FRUIT: {
            const newPortions = {...portions, fruit: {
                ...portions.fruit, number: portions.fruit.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.PROTS: {
            const newPortions = {...portions, prots: {
                ...portions.prots, number: portions.prots.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.SWEETS: {
            const newPortions = {...portions, sweets: {
                ...portions.sweets, number: portions.sweets.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.VEGGIES: {
            const newPortions = {...portions, veggies: {
                ...portions.veggies, number: portions.veggies.number + 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        default: {
            throw Error('Unknown group: ' + group);
        }
    }
}

const actionReduce = (group: Group, portions: Portions) => {
    switch (group) {
        case Group.CARBS: {
            const newPortions = {...portions, carbs: {
                ...portions.carbs, number: portions.carbs.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.FATS: {
            const newPortions = {...portions, fats: {
                ...portions.fats, number: portions.fats.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.FRUIT: {
            const newPortions = {...portions, fruit: {
                ...portions.fruit, number: portions.fruit.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.PROTS: {
            const newPortions = {...portions, prots: {
                ...portions.prots, number: portions.prots.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.SWEETS: {
            const newPortions = {...portions, sweets: {
                ...portions.sweets, number: portions.sweets.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        case Group.VEGGIES: {
            const newPortions = {...portions, veggies: {
                ...portions.veggies, number: portions.veggies.number - 1
            }};
            savePortions(newPortions);
            return newPortions;
        }
        default: {
            throw Error('Unknown group: ' + group);
        }
    }
}

const actionClear = (portions: Portions) => {
    const newPortions = {...portions,
        carbs: {...portions.carbs, checked: 0},
        fats: {...portions.fats, checked: 0},
        fruit: {...portions.fruit, checked: 0},
        prots: {...portions.prots, checked: 0},
        sweets: {...portions.sweets, checked: 0},
        veggies: {...portions.veggies, checked: 0}, 
    };  
    savePortions(newPortions);
    return newPortions;
}

const savePortions = (portions: Portions) => {
    localStorage.setItem('portions', JSON.stringify(portions));
};