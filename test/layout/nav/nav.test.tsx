import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import NavBar from '@/app/layout/nav/nav-bar';

describe('render nav bar', function () {
    function renderComponent() {
        const props = {
            onMenuClick: jest.fn(),
            onClearClick: jest.fn(),
        }
        
        render(<NavBar { ...props}/>);

        return props;
    }

    it('should render all elements', () => {
        renderComponent();

        const heading = screen.getByRole('heading', {
            name: /my diet/i
        });
        const button = screen.getByRole('button');
        const list = screen.getByRole('list');
        const links = screen.getAllByRole('link');

        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(links).toHaveLength(4);
    });

    it('should call onMenuClick', async () => {
        const props = renderComponent();

        const button = screen.getByRole('button');

        await user.click(button);

        expect(props.onMenuClick).toHaveBeenCalled();
    });

    it('should call onClearClick', async () => {
        const props = renderComponent();

        const clearButton = screen.getByText(/clear portions/i);

        await user.click(clearButton);

        expect(props.onClearClick).toHaveBeenCalled();
    });
})


