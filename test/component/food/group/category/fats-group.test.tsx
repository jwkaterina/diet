import { render } from '@testing-library/react';
import  FatsGroup from '../../../../../app/component/food/group/category/carbs-group';

jest.mock('../../../../../app/component/food/group/category/utils', () => ({
    __esModule: true,
    default: () => 10,
}));

describe('render category', function () {

    it('should render 3 headings with content', async () => {
        const calories = 45;
            
        const { container } = render(<FatsGroup calories={calories}/>);

        const portions = container.querySelectorAll('.portion');
        expect(portions).toHaveLength(10);

    });
})


