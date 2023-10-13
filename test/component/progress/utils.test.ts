import { calculateCurrent, calculateTarget, timeTargetCalories, completedCalories, exceededCalories }  from '../../../app/component/progress/utils';

describe('calculate progress', function () {

    const portions = {
        fruit: {number: 3, checked: 1}, 
        veggies: {number: 4, checked: 2},
        carbs: {number: 4, checked: 3},
        prots: {number: 3, checked: 2},
        fats: {number: 3, checked: 2},
        sweets: {number: 1, checked: 0}
    };
    const calories = {
        fruit: 60,
        veggies: 25,
        carbs: 70,
        prots: 110,
        fats: 45,
        sweets: 75
    };

    it('should calculate current progress without halfPorions', () => {
        const halfPortions = false;

        const actual = calculateCurrent(portions, halfPortions, calories);

        expect(actual).toBe(630);
    })

    it('should calculate current progress whith halfPorions', () => {
        const halfPortions = true;

        const actual = calculateCurrent(portions, halfPortions, calories);

        expect(actual).toBe(315);
    })

    it('should calculate targe progress', () => {
        const actual = calculateTarget(portions, calories);

        expect(actual).toBe(1100);
    })

    it('should calculate time target calories', () => {

        const firstMeal = 9;
        const lastMeal = 21;
        const mealsNumber = 3;
        const targetCalories = 1100;
        const time = 12;

        const actual = timeTargetCalories(targetCalories, mealsNumber, lastMeal, firstMeal, time);
        expect(actual).toEqual({
            left: '50%'
        });
    });

    it('should calculate completed calories', () => {

        const currentCalories =  550;
        const targetCalories = 1100;

        const actual = completedCalories(currentCalories, targetCalories);
        expect(actual).toEqual({
            width: '50%'
        });
    });

    it('should calculate exceeded calories', () => {

        const currentCalories =  550;
        const targetCalories = 1100;

        const actual = exceededCalories(currentCalories, targetCalories);
        expect(actual).toEqual({
            width: '0%'
        });
    });
})