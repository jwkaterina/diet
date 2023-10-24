import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import DataInputs from '@/app/calculator/section/data-inputs';

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

    // it('should submit data', async () => {
    //     const button = screen.getByRole('button');

    //     await user.click(button);

    //     expect(props.submitBmi).toHaveBeenCalled();
    //     expect(props.submitStatus).toHaveBeenCalled();
    //     expect(props.submitRange).toHaveBeenCalled();
    //     expect(props.submitRecommendation).toHaveBeenCalled();
    //     expect(props.submitGender).toHaveBeenCalled();
    //     expect(props.submitBody).toHaveBeenCalled();

    // });
});