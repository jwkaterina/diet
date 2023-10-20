import { BodyData } from "./bmr-utils";

const UPPER_LIMIT_MAX = 100000;

export const calculate = (weight: number, height: number): number => {
    const index = (weight / (height * height)) * 10000;
    return Math.round(index * 10) / 10;
}

export const ajustCalories = (calories: number, weight: number, height: number): number => {
    let result = calories;
    const bmi = calculate(weight, height);
    if(bmi < 30.0) {
        result = calories * 1.2;
    } 
    return Math.round(result / 50) * 50;
}

export enum WeightClass {
    UNDERWEIGHT,
    NORMAL,
    OVERWEIGHT,
    OBESE
}

interface WeightClassification {
    class: WeightClass;
    // lowerLimit: number;
    // upperLimit: number;
    min: number;
    max: number;
    contains: (bmi: number) => boolean;
}

const UNDERWEIGHT: WeightClassification = {
    class: WeightClass.UNDERWEIGHT,
    // lowerLimit: 0,
    // upperLimit: 184
    min: 0,
    max: 18.4,
    contains: (bmi: number) => bmi < 185 && bmi >= 0
}

const NORMAL: WeightClassification = {
    class: WeightClass.NORMAL,
    // lowerLimit: 185,
    // upperLimit: 249
    min: 18.5,
    max: 24.9,
    contains: (bmi: number) => bmi < 250 && bmi >= 185
}

const OVERWEIGHT: WeightClassification = {
    class: WeightClass.OVERWEIGHT,
    // lowerLimit: 250,
    // upperLimit: 299
    min: 25,
    max: 29.9,
    contains: (bmi: number) => bmi < 300 && bmi >= 250
}

const OBESE: WeightClassification = {
    class: WeightClass.OBESE,
    // lowerLimit: 300,
    // upperLimit: UPPER_LIMIT_MAX
    min: 30,
    max: UPPER_LIMIT_MAX / 10,
    contains: (bmi: number) => bmi >= 300
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

export const getRecommendation = (WeightClassification: WeightClassification, body: BodyData): string => {
    switch(WeightClassification.class) {
        case WeightClass.UNDERWEIGHT:
            return `gain ${calculateWeightDelta(NORMAL.min, body.height, body.weight)}kg}`;
        case WeightClass.NORMAL:
            return 'you are in good shape';
        case WeightClass.OVERWEIGHT:
        case WeightClass.OBESE:
            return `lose ${calculateWeightDelta(NORMAL.max, body.height, body.weight)}kg`;
    }
}

export const calculateWeight = (bmi: number, height: number): number => {
    const kg = (height * 100) * bmi / 10000;
    return Math.round(kg * 10) / 10;
}

const calculateWeightDelta = (bmi: number, height: number, weight: number): number => {
    const desired = calculateWeight(bmi, height);
    const delta = weight - desired;
    return Math.round(delta * 10) / 10;
}