import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import  VeggiesGroup from '@/app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 10 veggies portions', () => {
            
        const { container } = render(<VeggiesGroup/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);
    });

    it('should add 1 portion on click', async () => {
            
        const { container } = render(<VeggiesGroup/>);

        const button = container.querySelector('.plus_btn');
        await user.click(button!);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(11);
    });
})


