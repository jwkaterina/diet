import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import PortionsSection from '../../../../app/settings/component/section/portions-section';
import { usePortionsDispatch } from '../../../../app/context/portions-context';
import { Group } from '@/app/context/portions-reducer';

jest.mock('../../../../app/context/portions-context', () => {
    const originalModule = jest.requireActual('../../../../app/context/portions-context');
  
    return {
      __esModule: true,
      ...originalModule,
      usePortionsDispatch: jest.fn(),
    };
});

describe('render portions section', function () {
    const mockedUseDispatch = usePortionsDispatch as jest.Mock;
    const mockedDispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        mockedUseDispatch.mockReturnValue(mockedDispatch);
        render(<PortionsSection />);
    });

    it('should call handlePlusClick', async () => {
        const heading = screen.getByRole('heading', {
            name: /fruits:/i
        });
        const container = heading.parentElement!;
    
        const plus = container.querySelector('.Settings__number-plus-btn');

        await user.click(plus!);

        expect(mockedDispatch).toBeCalledWith({
            type: 'add',
            group: Group.FRUIT,
        });
    });

    it('should call handleMinusClick', async () => {
        const heading = screen.getByRole('heading', {
            name: /fruits:/i
        });
        const container = heading.parentElement!;

        const minus = container.querySelector('.Settings__number-minus-btn');

        await user.click(minus!);

        expect(mockedDispatch).toBeCalledWith({
            type: 'reduce',
            group: Group.FRUIT,
        });
    });
});