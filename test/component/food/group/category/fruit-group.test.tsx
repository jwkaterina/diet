import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import  FruitGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 10 fruit portions', () => {
        const calories = 60;
            
        const { container } = render(<FruitGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);
    });

    it('should add 1 portion on click', async () => {
        const calories = 60;
            
        const { container } = render(<FruitGroup calories={calories}/>);

        const button = screen.getByTestId('plus-btn');
        await user.click(button);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(11);
    });
})


