import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import  PortionsGroup from '../../../../app/component/food/group/portions-group';

describe('render portion group', function () {
    function renderComponent() {
        const props = {
            title: "Carbs",
            calories: 70,
            checked: 3,
            children: [],
            onPlusClick: jest.fn(),
        }
        
        render(<PortionsGroup {...props}/>);
    
        return props.onPlusClick;
    }

    it('should render 3 headings with content', async () => {
        renderComponent();

        const headings = screen.getAllByRole('heading');
        
        expect(headings).toHaveLength(3);
        expect(headings[0].textContent).toBe('3');
        expect(headings[1].textContent).toBe('x70k');
        expect(headings[2].textContent).toBe('Carbs');
    });

    it('should call onPlusClick function', async () => {
        const onPlusClick = renderComponent();

        const button = screen.getByTestId('plus-btn');
        await user.click(button);

        expect(onPlusClick).toHaveBeenCalled();
    });
})


