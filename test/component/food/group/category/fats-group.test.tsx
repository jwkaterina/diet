import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import  FatsGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 10 fats portions', () => {
        const calories = 45;
            
        const { container } = render(<FatsGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);
    });

    it('should add 1 portion on click', async () => {
        const calories = 45;
            
        const { container } = render(<FatsGroup calories={calories}/>);

        const button = screen.getByTestId('btn');
        await user.click(button);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(11);
    });
})


