import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import CaloriesPlan from '@/app/calculator/section/calories-plan';
import { Gender } from '@/app/calculator/bmr-utils';

describe('render calories plan', function () {

    it('should render heading for weight gain when underweight', () => {
        const props = {
            gender: Gender.FEMALE,
            body: {
                weight: 45,
                height: 1.65,
                age: 33
            },
            status: 'underweight'
        }
        
        render(<CaloriesPlan {...props}/>);
        const heading = screen.getByRole('heading', {
            name: /gain some weight/i
        });

        expect(heading).toBeInTheDocument();
    });

    it('should render heading for weight lost when overweight', () => {
        const props = {
            gender: Gender.FEMALE,
            body: {
                weight: 70,
                height: 1.65,
                age: 33
            },
            status: 'overweight'
        }
        
        render(<CaloriesPlan {...props}/>);
        const heading = screen.getByRole('heading', {
            name: /lose some weight/i
        });

        expect(heading).toBeInTheDocument();
    });

    it('should render heading for weight lost when obese', () => {
        const props = {
            gender: Gender.FEMALE,
            body: {
                weight: 100,
                height: 1.65,
                age: 33
            },
            status: 'obese'
        }
        
        render(<CaloriesPlan {...props}/>);
        const heading = screen.getByRole('heading', {
            name: /lose some weight/i
        });

        expect(heading).toBeInTheDocument();
    });

    it('should not renser data when body is null', () => {
        const props = {
            gender: Gender.FEMALE,
            body: null,
            status: ''
        }
        
        const {container } = render(<CaloriesPlan {...props}/>);
        const data = container.querySelectorAll('span');
        data.forEach((span) => {
            expect(span.textContent).toEqual('');
        });
    });
});