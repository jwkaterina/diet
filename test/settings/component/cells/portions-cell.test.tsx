import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import PortionsCell from '@/app/settings/component/cells/portions-cell';

describe('render portions cell', function () {

    it('should render all elements', () => {
        const props = {
            children: [],
            count: 5, 
            onPlusClick: jest.fn(), 
            onMinusClick: jest.fn()
        }
        
        render(<PortionsCell { ...props}/>);

        const headings = screen.getAllByRole('heading');

        expect(headings).toHaveLength(2);
        expect(headings[1]).toHaveTextContent('5');
        screen.logTestingPlaygroundURL();
    });

    it('should call onMinusClick', async () => {
        const props = {
            children: [],
            count: 5, 
            onPlusClick: jest.fn(), 
            onMinusClick: jest.fn()
        }
        
        const { container } = render(<PortionsCell { ...props}/>);
        const minusButton = container.querySelector('.minus_btn');

        await user.click(minusButton!);

        expect(props.onMinusClick).toHaveBeenCalled();
    });

    it('should call onPlusClick', async () => {
        const props = {
            children: [],
            count: 5, 
            onPlusClick: jest.fn(), 
            onMinusClick: jest.fn()
        }
        
        const { container } = render(<PortionsCell { ...props}/>);
        const plusButton = container.querySelector('.plus_btn');

        await user.click(plusButton!);

        expect(props.onPlusClick).toHaveBeenCalled();
    });
})


