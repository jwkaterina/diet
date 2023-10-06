import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import  CarbsGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 10 carbs portions', () => {
        const calories = 70;
            
        const { container } = render(<CarbsGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);
    });

    it('should add 1 portion on click', async () => {
        const calories = 70;
            
        const { container } = render(<CarbsGroup calories={calories}/>);

        const button = screen.getByTestId('btn');
        await user.click(button);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(11);
    });
})


