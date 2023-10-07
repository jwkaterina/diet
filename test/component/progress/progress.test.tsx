import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import  ProgressBar from '../../../app/component/progress/progress';
import { timeTargetCalories, completedCalories, exceededCalories } from '../../../app/component/progress/progress';

describe('render portion group', function () {
    function renderComponent() {
        const calories = {
            fruit: 60,
            veggies: 25,
            carbs: 70,
            prots: 110,
            fats: 45,
            sweets: 75
        };
    
        const firstMeal = 9;
        const lastMeal = 21;
        const mealsNumber = 3;
        const currentCalories =  550;
        const targetCalories = 1100;
        const time = 12;
        
        render(<ProgressBar calories={calories}/>);
        }

    it('should calculate time target calories', () => {
        renderComponent();

        const actual = timeTargetCalories(1100, 3, 21, 9, 12);
        expect(actual).toEqual({
            left: '50%'
        });
    });

    it('should calculate completed calories', () => {
        renderComponent();

        const actual = completedCalories(550, 1100);
        expect(actual).toEqual({
            width: '50%'
        });
    });

    it('should calculate exceeded calories', () => {
        renderComponent();

        const actual = exceededCalories(550, 1100);
        expect(actual).toEqual({
            width: '0%'
        });
    });
})


