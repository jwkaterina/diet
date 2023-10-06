import { calculateCurrent, calculateTarget }  from '../../../app/component/progress/utils';

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
})