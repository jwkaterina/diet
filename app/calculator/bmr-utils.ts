type BMRData = {
    weight: number;
    height: number;
    age: number;
    weightHeight: number;
}

const femaleBMR: BMRData = {
    weight: 9.5634,
    height: 1.8496,
    age: 4.6756,
    weightHeight: 655.0955
}

const maleBMR: BMRData = {
    weight: 13.7516,
    height: 5.0033,
    age: 6.755,
    weightHeight: 66.473
}

export type BodyData = {
    weight: number;
    height: number;
    age: number;
}

const calculate = (bmr: BMRData, body: BodyData): number => {
    return bmr.weightHeight + bmr.weight * body.weight + bmr.height * body.height * 100 - bmr.age * body.age;
}

export enum Gender {
    MALE,
    FEMALE 
}

export const calculateBMR = (gender: Gender, bodyData: BodyData): number => {
    switch(gender) {
        case Gender.FEMALE: 
            return calculate(femaleBMR, bodyData);
        case Gender.MALE: 
            return calculate(maleBMR, bodyData);
    }
}