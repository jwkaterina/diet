import { render } from '@testing-library/react';
import  CarbsGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 3,
}));

describe('render category', function () {

    it('should render 3 headings with content', async () => {
        const calories = 70;
            
        const { container } = render(<CarbsGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(3);

    });
})


