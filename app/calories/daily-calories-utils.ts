import { Gender, BodyData, calculateBMR } from './bmr-utils';
import { ajustCalories } from './bmi-utils';

const MALE_MIN_CALORIES = 1400;
const FEMALE_MIN_CALORIES = 1200;

export type PhysicalActivity = {
    type: string;
    value: number;
}

export const NONE: PhysicalActivity = {
    type: 'inactive',
    value: 1.0
}

export const LOW: PhysicalActivity = {
    type: 'low active',
    value: 1.1
}

export const NORMAL: PhysicalActivity = {
    type: 'medium',
    value: 1.2
}

export const HIGH: PhysicalActivity = {
    type: 'highly active',
    value: 1.4
}

export const calories = (gender: Gender, body: BodyData, physicalActivity: PhysicalActivity): number => {
    const bmr = calculateBMR(gender, body);
    const result = bmr * physicalActivity.value;
    return ajustCalories(result, body.weight, body.height);
}

export const gainWeightCalories = (calories: number): number => {
    return calories + 500;
}

export const loseWeightCalories = (calories: number, gender: Gender): number => {
    const delta = calories - 500;
    const min = gender == Gender.FEMALE ? FEMALE_MIN_CALORIES : MALE_MIN_CALORIES;
    return delta < min ? min : delta;
}
