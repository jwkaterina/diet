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
                    localStorage.setItem('portions', JSON.stringify({...portions, carbs: {
                        ...portions.carbs, checked: action.checked
                    }}));
                    return {...portions, carbs: {
                    ...portions.carbs, checked: action.checked
                    }}
                };
                case Group.FATS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fats: {
                        ...portions.fats, checked: action.checked
                    }}));
                    return {...portions, fats: {
                    ...portions.fats, checked: action.checked
                    }};
                }
                case Group.FRUIT: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fruit: {
                        ...portions.fruit, checked: action.checked
                    }}));
                    return {...portions, fruit: {
                    ...portions.fruit, checked: action.checked
                    }};
                }
                case Group.PROTS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, prots: {
                        ...portions.prots, checked: action.checked
                    }}));
                    return {...portions, prots: {
                    ...portions.prots, checked: action.checked
                    }};
                }
                case Group.SWEETS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, sweets: {
                        ...portions.sweets, checked: action.checked
                    }}));
                    return {...portions, sweets: {
                    ...portions.sweets, checked: action.checked
                    }};
                }
                case Group.VEGGIES: {
                    localStorage.setItem('portions', JSON.stringify({...portions, veggies: {
                        ...portions.veggies, checked: action.checked
                    }}));
                    return {...portions, veggies: {
                    ...portions.veggies, checked: action.checked
                    }};
                }
            }
        }
        case 'add': {
            switch (action.group) {
                case Group.CARBS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, carbs: {
                        ...portions.carbs, number: portions.carbs.number + 1
                    }}));
                    return {...portions, carbs: {
                    ...portions.carbs, number: portions.carbs.number + 1
                    }};
                }
                case Group.FATS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fats: {
                        ...portions.fats, number: portions.fats.number + 1
                    }}));
                    return {...portions, fats: {
                    ...portions.fats, number: portions.fats.number + 1
                    }};
                }
                case Group.FRUIT: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fruit: {
                        ...portions.fruit, number: portions.fruit.number + 1
                    }}));
                    return {...portions, fruit: {
                    ...portions.fruit, number: portions.fruit.number + 1
                    }};
                }
                case Group.PROTS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, prots: {
                        ...portions.prots, number: portions.prots.number + 1
                    }}));
                    return {...portions, prots: {
                    ...portions.prots, number: portions.prots.number + 1
                    }};
                }
                case Group.SWEETS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, sweets: {
                        ...portions.sweets, number: portions.sweets.number + 1
                    }}));
                    return {...portions, sweets: {
                    ...portions.sweets, number: portions.sweets.number + 1
                    }};
                }
                case Group.VEGGIES: {
                    localStorage.setItem('portions', JSON.stringify({...portions, veggies: {
                        ...portions.veggies, number: portions.veggies.number + 1
                    }}));
                    return {...portions, veggies: {
                    ...portions.veggies, number: portions.veggies.number + 1
                    }};
                }
            }
        }
        case 'reduce': {
            switch (action.group) {
                case Group.CARBS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, carbs: {
                        ...portions.carbs, number: portions.carbs.number - 1
                    }}));
                    if(portions.carbs.number > 0) {return {...portions, carbs: {
                        ...portions.carbs, number: portions.carbs.number - 1
                    }}} else return portions;
                }
                case Group.FATS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fats: {
                        ...portions.fats, number: portions.fats.number - 1
                    }}));
                    if(portions.fats.number > 0) {return {...portions, fats: {
                        ...portions.fats, number: portions.fats.number - 1
                    }}} else return portions;
                }
                case Group.FRUIT: {
                    localStorage.setItem('portions', JSON.stringify({...portions, fruit: {
                        ...portions.fruit, number: portions.fruit.number - 1
                    }}));
                    if(portions.fruit.number > 0) {return {...portions, fruit: {
                        ...portions.fruit, number: portions.fruit.number - 1
                    }}} else return portions;
                }
                case Group.PROTS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, prots: {
                        ...portions.prots, number: portions.prots.number - 1
                    }}));
                    if(portions.prots.number > 0) {return {...portions, prots: {
                        ...portions.prots, number: portions.prots.number - 1
                    }}} else return portions;
                }
                case Group.SWEETS: {
                    localStorage.setItem('portions', JSON.stringify({...portions, sweets: {
                        ...portions.sweets, number: portions.sweets.number - 1
                    }}));
                    if(portions.sweets.number > 0) {return {...portions, sweets: {
                        ...portions.sweets, number: portions.sweets.number - 1
                    }}} else return portions;
                }
                case Group.VEGGIES: {
                    localStorage.setItem('portions', JSON.stringify({...portions, veggies: {
                        ...portions.veggies, number: portions.veggies.number - 1
                    }}));
                    if(portions.veggies.number > 0) {return {...portions, veggies: {
                        ...portions.veggies, number: portions.veggies.number - 1
                    }}} else return portions;
                }
            }
        }
        case 'clear': {
            localStorage.setItem('portions', JSON.stringify({...portions, 
                carbs: {...portions.carbs, checked: 0},
                fats: {...portions.fats, checked: 0},
                fruit: {...portions.fruit, checked: 0},
                prots: {...portions.prots, checked: 0},
                sweets: {...portions.sweets, checked: 0},
                veggies: {...portions.veggies, checked: 0}, 
            }));
            return {...portions, 
                carbs: {...portions.carbs, checked: 0},
                fats: {...portions.fats, checked: 0},
                fruit: {...portions.fruit, checked: 0},
                prots: {...portions.prots, checked: 0},
                sweets: {...portions.sweets, checked: 0},
                veggies: {...portions.veggies, checked: 0}, 
            };          
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}