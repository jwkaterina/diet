import { calculateBMR, Gender } from '@/app/calculator/bmr-utils';

describe('calculate bmr', function () {
    const femaleBMR = {
        weight: 9.5634,
        height: 1.8496,
        age: 4.6756,
        weightHeight: 655.0955
    }
    
    const maleBMR = {
        weight: 13.7516,
        height: 5.0033,
        age: 6.755,
        weightHeight: 66.473
    }
    
    const body = {
        weight: 55,
        height: 1.65,
        age: 33
    }
    
    it('should calculate female bmr', () => {
        //init

        //invoke
        const bmr = calculateBMR(Gender.FEMALE, body);
        
        //check
        expect(bmr).toEqual(1331.9717);
    })
    
    it('should calculate male bmr', () => {
        //init

        //invoke
        const bmr = calculateBMR(Gender.MALE, body);
        
        //check
        expect(bmr).toEqual(1425.4405);
    })

})




