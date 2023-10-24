import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import NavBar from '@/app/layout/nav/nav-bar';

describe('render nav bar', function () {

    it('should render all elements', () => {
        const  onClearClick = jest.fn();
        render(<NavBar onClearClick={onClearClick}/>);

        const heading = screen.getByRole('heading', {
            name: /my diet/i
        });

        expect(heading).toBeInTheDocument();
    });
})


