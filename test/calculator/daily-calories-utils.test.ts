import { NONE, LOW, NORMAL, HIGH, maintainWeightCalories, gainWeightCalories, loseWeightCalories } from '@/app/calculator/daily-calories-utils';
import { Gender } from '@/app/calculator/bmr-utils';

describe('calculate bmr', function () {
    const gender = Gender.FEMALE;
    
    const body = {
        weight: 55,
        height: 1.65,
        age: 33
    }
    
    it('should calculate maintain calories for inactive', () => {

        //invoke
        const calories = maintainWeightCalories(Gender.FEMALE, body, NONE);
        
        //check
        expect(calories).toEqual(1600);
    })
    
    it('should calculate maintain calories for low active', () => {

        //invoke
        const calories = maintainWeightCalories(Gender.FEMALE, body, LOW);
        
        //check
        expect(calories).toEqual(1750);
    })
    
    it('should calculate maintain calories for active', () => {

        //invoke
        const calories = maintainWeightCalories(Gender.FEMALE, body, NORMAL);
        
        //check
        expect(calories).toEqual(1900);
    })
    
    it('should calculate maintain calories for high active', () => {

        //invoke
        const calories = maintainWeightCalories(Gender.FEMALE, body, HIGH);
        
        //check
        expect(calories).toEqual(2250);
    })
    
    it('should calculate gain calories', () => {
        const calories = 2000;

        //invoke
        const gainCalories = gainWeightCalories(calories);
        
        //check
        expect(gainCalories).toEqual(2500);
    })
    
    it('should calculate lose calories', () => {
        const calories = 1700;

        //invoke
        const gainCalories = loseWeightCalories(calories, Gender.MALE);
        
        //check
        expect(gainCalories).toEqual(1400);
    })
})




