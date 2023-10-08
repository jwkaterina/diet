import { render, screen } from '@testing-library/react';
import  ProgressBar from '../../../app/component/progress/progress';
import { timeTargetCalories, completedCalories, exceededCalories } from '../../../app/component/progress/progress';

describe('render progress', function () {
    function renderComponent() {
        const calories = {
            fruit: 60,
            veggies: 25,
            carbs: 70,
            prots: 110,
            fats: 45,
            sweets: 75
        };
        
        render(<ProgressBar calories={calories}/>);
        }

    it('should calculate time target calories', () => {
        renderComponent();

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
        renderComponent();

        const currentCalories =  550;
        const targetCalories = 1100;

        const actual = completedCalories(currentCalories, targetCalories);
        expect(actual).toEqual({
            width: '50%'
        });
    });

    it('should calculate exceeded calories', () => {
        renderComponent();

        const currentCalories =  550;
        const targetCalories = 1100;

        const actual = exceededCalories(currentCalories, targetCalories);
        expect(actual).toEqual({
            width: '0%'
        });
    });
})


