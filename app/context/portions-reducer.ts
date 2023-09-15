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
                case Group.CARBS: {
                    const newPortions = {...portions, carbs: {
                        ...portions.carbs, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                };
                case Group.FATS: {
                    const newPortions = {...portions, fats: {
                        ...portions.fats, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.FRUIT: {
                    const newPortions = {...portions, fruit: {
                        ...portions.fruit, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.PROTS: {
                    const newPortions = {...portions, prots: {
                        ...portions.prots, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.SWEETS: {
                    const newPortions = {...portions, sweets: {
                        ...portions.sweets, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.VEGGIES: {
                    const newPortions = {...portions, veggies: {
                        ...portions.veggies, checked: action.checked
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
            }
        }
        case 'add': {
            switch (action.group) {
                case Group.CARBS: {
                    const newPortions = {...portions, carbs: {
                        ...portions.carbs, number: portions.carbs.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.FATS: {
                    const newPortions = {...portions, fats: {
                        ...portions.fats, number: portions.fats.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.FRUIT: {
                    const newPortions = {...portions, fruit: {
                        ...portions.fruit, number: portions.fruit.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.PROTS: {
                    const newPortions = {...portions, prots: {
                        ...portions.prots, number: portions.prots.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.SWEETS: {
                    const newPortions = {...portions, sweets: {
                        ...portions.sweets, number: portions.sweets.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.VEGGIES: {
                    const newPortions = {...portions, veggies: {
                        ...portions.veggies, number: portions.veggies.number + 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
            }
        }
        case 'reduce': {
            switch (action.group) {
                case Group.CARBS: {
                    const newPortions = {...portions, carbs: {
                        ...portions.carbs, number: portions.carbs.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.FATS: {
                    const newPortions = {...portions, fats: {
                        ...portions.fats, number: portions.fats.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.FRUIT: {
                    const newPortions = {...portions, fruit: {
                        ...portions.fruit, number: portions.fruit.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.PROTS: {
                    const newPortions = {...portions, prots: {
                        ...portions.prots, number: portions.prots.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.SWEETS: {
                    const newPortions = {...portions, sweets: {
                        ...portions.sweets, number: portions.sweets.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
                case Group.VEGGIES: {
                    const newPortions = {...portions, veggies: {
                        ...portions.veggies, number: portions.veggies.number - 1
                    }};
                    localStorage.setItem('portions', JSON.stringify(newPortions));
                    return newPortions;
                }
            }
        }
        case 'clear': {
            const newPortions = {...portions,
                carbs: {...portions.carbs, checked: 0},
                fats: {...portions.fats, checked: 0},
                fruit: {...portions.fruit, checked: 0},
                prots: {...portions.prots, checked: 0},
                sweets: {...portions.sweets, checked: 0},
                veggies: {...portions.veggies, checked: 0}, 
            };  
            localStorage.setItem('portions', JSON.stringify(newPortions));
            return newPortions;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}