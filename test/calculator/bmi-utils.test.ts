import { calculateBmi, ajustCalories, getClassification, UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE, getRecommendation, getRange } from '@/app/calculator/bmi-utils';

describe('calculate bmr', function () {
    
    it('should calculate bmi', () => {
        const weight = 60;
        const height = 2;

        //invoke
        const bmi = calculateBmi(weight, height);
        
        //check
        expect(bmi).toEqual(15);
    })
    
    it('should ajust calories', () => {
        const weight = 60;
        const height = 2;
        const calories = 2000;

        //invoke
        const ajustedCalories = ajustCalories(calories, weight, height);
        
        //check
        expect(ajustedCalories).toEqual(2400);
    })
    
    it('should get classification for underweight', () => {
        const bmi = 15;

        //invoke
        const classification = getClassification(bmi);
        
        //check
        expect(classification.class).toEqual('underweight');
    })
    
    it('should get classification for normal', () => {
        const bmi = 20;

        //invoke
        const classification = getClassification(bmi);
        
        //check
        expect(classification.class).toEqual('normal');
    })
    
    it('should get classification for overweight', () => {
        const bmi = 27;

        //invoke
        const classification = getClassification(bmi);
        
        //check
        expect(classification.class).toEqual('overweight');
    })
    
    it('should get classification for obese', () => {
        const bmi = 35;

        //invoke
        const classification = getClassification(bmi);
        
        //check
        expect(classification.class).toEqual('obese');
    })

    it('should get recommendation for underweight', () => {
        const weight = 60;
        const height = 2;

        //invoke
        const recommendation = getRecommendation(UNDERWEIGHT, weight, height);
        
        //check
        expect(recommendation).toEqual('gain 14kg');
    })
    
    it('should get recommendation for normal', () => {
        const weight = 80;
        const height = 2;

        //invoke
        const recommendation = getRecommendation(NORMAL, weight, height);
        
        //check
        expect(recommendation).toEqual('maintain your weight');
    })
    
    it('should get recommendation for overweight', () => {
        const weight = 100;
        const height = 2;

        //invoke
        const recommendation = getRecommendation(OVERWEIGHT, weight, height);
        
        //check
        expect(recommendation).toEqual('lose 0.4kg');
    })
    
    it('should get recommendation for obese', () => {
        const weight = 120;
        const height = 2;

        //invoke
        const recommendation = getRecommendation(OBESE, weight, height);
        
        //check
        expect(recommendation).toEqual('lose 20.4kg');
    })
    
    it('should get range', () => {
        const height = 2;

        //invoke
        const range = getRange(height);
        
        //check
        expect(range).toEqual('74kg - 99.6kg');
    })
})