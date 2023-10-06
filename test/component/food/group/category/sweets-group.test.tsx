import { render } from '@testing-library/react';
import  SweetsGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 3 headings with content', async () => {
        const calories = 75;
            
        const { container } = render(<SweetsGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);

    });
})


