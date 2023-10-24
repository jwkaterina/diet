import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import DataInputs from '@/app/calculator/section/data-inputs';
import { Gender } from '@/app/calculator/bmr-utils';

describe('render data inputs', function () {
    const props = {
        submitBmi: jest.fn(),
        submitStatus: jest.fn(),
        submitRange: jest.fn(),
        submitRecommendation: jest.fn(),
        submitGender: jest.fn(),
        submitBody: jest.fn()
    }
    
    
    render(<DataInputs {...props}/>);

    it('should render elements', () => {
    
        const checkbox = screen.getByRole('checkbox');
        const headings = screen.getAllByRole('heading');
        const inputs = screen.getAllByRole('spinbutton');
        const button = screen.getByRole('button');

        expect(checkbox).toBeInTheDocument();
        expect(headings).toHaveLength(7);
        expect(inputs).toHaveLength(3);
        expect(button).toBeInTheDocument();
    });

    it('should submit data', async () => {
        screen.logTestingPlaygroundURL();

        const checkbox = screen.getByRole('checkbox');
        const ageInput = screen.getByRole('spinbutton', { name: /age/i });
        const weightInput = screen.getByRole('spinbutton', { name: /weight/i });
        const heightInput = screen.getByRole('spinbutton', { name: /height/i });
        const button = screen.getByRole('button');

        await user.click(checkbox);
        await user.type(ageInput, '33');
        await user.type(weightInput, '80');
        await user.type(heightInput, '1.65');
        await user.click(button);

        expect(props.submitBody).toHaveBeenCalledWith(
            {
                weight: 80,
                height: 1.65,
                age: 33
            }
        );
        expect(props.submitBmi).toHaveBeenCalledWith(29.4);
        expect(props.submitStatus).toHaveBeenCalledWith('overweight');
        expect(props.submitRange).toHaveBeenCalledWith('50.4kg - 67.8kg');
        expect(props.submitRecommendation).toHaveBeenCalledWith('lose 12.2kg');
        expect(props.submitGender).toHaveBeenCalledWith(Gender.MALE);
    });
});