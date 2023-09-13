export enum Group {
    FRUIT = 'fruit',
    VEGGIES = 'veggies',
    CARBS = 'carbs',
    PROTS = 'prots',
    FATS = 'fats',
    SWEETS = 'sweets'
}

export const  PortionsReducer = (portions: any, action: any) => {
    switch (action.type) {
        case 'check': {
            switch (action.group) {
                case Group.CARBS: return {...portions, carbs: {
                    ...portions.carbs, checked: action.checked
                }};
                case Group.FATS: return {...portions, fats: {
                    ...portions.fats, checked: action.checked
                }};
                case Group.FRUIT: return {...portions, fruit: {
                    ...portions.fruit, checked: action.checked
                }};
                case Group.PROTS: return {...portions, prots: {
                    ...portions.prots, checked: action.checked
                }};
                case Group.SWEETS: return {...portions, sweets: {
                    ...portions.sweets, checked: action.checked
                }};
                case Group.VEGGIES: return {...portions, veggies: {
                    ...portions.veggies, checked: action.checked
                }};
            }
        }
        case 'add': {
            switch (action.group) {
                case Group.CARBS: return {...portions, carbs: {
                    ...portions.carbs, number: portions.carbs.number + 1
                }};
                case Group.FATS: return {...portions, fats: {
                    ...portions.fats, number: portions.fats.number + 1
                }};
                case Group.FRUIT: return {...portions, fruit: {
                    ...portions.fruit, number: portions.fruit.number + 1
                }};
                case Group.PROTS: return {...portions, prots: {
                    ...portions.prots, number: portions.prots.number + 1
                }};
                case Group.SWEETS: return {...portions, sweets: {
                    ...portions.sweets, number: portions.sweets.number + 1
                }};
                case Group.VEGGIES: return {...portions, veggies: {
                    ...portions.veggies, number: portions.veggies.number + 1
                }};
            }
        }
        case 'reduce': {
            switch (action.group) {
                case Group.CARBS: if(portions.carbs.number > 0) {return {...portions, carbs: {
                    ...portions.carbs, number: portions.carbs.number - 1
                }}} else return portions;
                case Group.FATS: if(portions.fats.number > 0) {return {...portions, fats: {
                    ...portions.fats, number: portions.fats.number - 1
                }}} else return portions;
                case Group.FRUIT: if(portions.fruit.number > 0) {return {...portions, fruit: {
                    ...portions.fruit, number: portions.fruit.number - 1
                }}} else return portions;
                case Group.PROTS: if(portions.prots.number > 0) {return {...portions, prots: {
                    ...portions.prots, number: portions.prots.number - 1
                }}} else return portions;
                case Group.SWEETS: if(portions.sweets.number > 0) {return {...portions, sweets: {
                    ...portions.sweets, number: portions.sweets.number - 1
                }}} else return portions;
                case Group.VEGGIES: if(portions.veggies.number > 0) {return {...portions, veggies: {
                    ...portions.veggies, number: portions.veggies.number - 1
                }}} else return portions;
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}