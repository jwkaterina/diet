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

    it('should add portions', async () => {
        const heading = screen.getByRole('heading', {
            name: /fruits:/i
        });
        const container = heading.parentElement!;
    
        const plus = container.querySelector('.plus_btn');

        await user.click(plus!);

        expect(mockedDispatch).toBeCalledWith({
            type: 'add',
            group: Group.FRUIT,
        });
    });

    it('should reduce portions', async () => {
        const heading = screen.getByRole('heading', {
            name: /fruits:/i
        });
        const container = heading.parentElement!;

        const minus = container.querySelector('.minus_btn');

        await user.click(minus!);

        expect(mockedDispatch).toBeCalledWith({
            type: 'reduce',
            group: Group.FRUIT,
        });
    });
});