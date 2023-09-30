import  calculateCurrentNumber from '../../../../../app/component/food/group/category/utils';

describe('calculate current number', function () {

    it('should calculate current number when whole portions and number is more', () => {
        //init
        const halfPortions = false;
        const checked = 5;
        const number = 6;

        //invoke
        const actual = calculateCurrentNumber(halfPortions, checked, number);

        //check
        expect(actual).toBe(6);
    })

    it('should calculate current number when whole portions  and number is less', () => {
        //init
        const halfPortions = false;
        const checked = 5;
        const number = 4;

        //invoke
        const actual = calculateCurrentNumber(halfPortions, checked, number);

        //check
        expect(actual).toBe(5);
    })

    it('should calculate current number when half porions and number is more', () => {
        //init
        const halfPortions = true;
        const checked = 8;
        const number = 5;

        //invoke
        const actual = calculateCurrentNumber(halfPortions, checked, number);

        //check
        expect(actual).toBe(5);
    })
    
    it('should calculate current number when half porions and number is less', () => {
        //init
        const halfPortions = true;
        const checked = 11;
        const number = 4;

        //invoke
        const actual = calculateCurrentNumber(halfPortions, checked, number);

        //check
        expect(actual).toBe(6);
    })
})