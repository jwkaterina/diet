
const UPPER_LIMIT_MAX = 100000;

export const calculateBmi = (weight: number, height: number): number => {
    const index = weight / (height * height);
    return Math.round(index * 10) / 10;
}

export const ajustCalories = (calories: number, weight: number, height: number): number => {
    let result = calories;
    const bmi = calculateBmi(weight, height);
    if(bmi < 30.0) {
        result = calories * 1.2;
    } 
    return Math.round(result / 50) * 50;
}

export enum WeightClass {
    UNDERWEIGHT = 'underweight',
    NORMAL = 'normal',
    OVERWEIGHT = 'overweight',
    OBESE = 'obese'
}

interface WeightClassification {
    class: WeightClass;
    min: number;
    max: number;
    contains: (bmi: number) => boolean;
}

export const UNDERWEIGHT: WeightClassification = {
    class: WeightClass.UNDERWEIGHT,
    min: 0,
    max: 18.4,
    contains: (bmi: number) => bmi < 18.5 && bmi >= 0
}

export const NORMAL: WeightClassification = {
    class: WeightClass.NORMAL,
    min: 18.5,
    max: 24.9,
    contains: (bmi: number) => bmi < 25.0 && bmi >= 18.5
}

export const OVERWEIGHT: WeightClassification = {
    class: WeightClass.OVERWEIGHT,
    min: 25,
    max: 29.9,
    contains: (bmi: number) => bmi < 30.0 && bmi >= 25.0
}

export const OBESE: WeightClassification = {
    class: WeightClass.OBESE,
    min: 30,
    max: UPPER_LIMIT_MAX / 10,
    contains: (bmi: number) => bmi >= 30.0
}

export const getClassification = (bmi: number): WeightClassification => {
    if(UNDERWEIGHT.contains(bmi)) {
        return UNDERWEIGHT;
    } else if(NORMAL.contains(bmi)) {
        return NORMAL;
    } else if(OVERWEIGHT.contains(bmi)) {
        return OVERWEIGHT;
    } else if(OBESE.contains(bmi)) {
        return OBESE;
    }
    throw new Error(`Invalid BMI: ${bmi}`);
}

export const getRecommendation = (WeightClassification: WeightClassification, weight: number, height: number): string => {
    switch(WeightClassification.class) {
        case WeightClass.UNDERWEIGHT:
            return `gain ${calculateWeightDelta(NORMAL.min, height, weight)}kg`;
        case WeightClass.NORMAL:
            return 'maintain your weight';
        case WeightClass.OVERWEIGHT:
        case WeightClass.OBESE:
            return `lose ${calculateWeightDelta(NORMAL.max, height, weight)}kg`;
    }
}

export const getRange = (height: number): string => {
    const min = calculateWeight(NORMAL.min, height);
    const max = calculateWeight(NORMAL.max, height);
    return `${min}kg - ${max}kg`;
}

const calculateWeight = (bmi: number, height: number): number => {
    const kg = height * height * bmi;
    return Math.round(kg * 10) / 10;
}

const calculateWeightDelta = (bmi: number, height: number, weight: number): number => {
    const desired = calculateWeight(bmi, height);
    const delta = Math.abs(weight - desired);
    return Math.round(delta * 10) / 10;
}