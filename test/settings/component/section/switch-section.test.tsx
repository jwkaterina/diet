import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import SwitchSection from '@/app/settings/component/section/switch-section';
import { useSettingsDispatch } from '@/app/context/settings-context';

jest.mock('../../../../app/context/settings-context', () => {
    const originalModule = jest.requireActual('../../../../app/context/settings-context');
  
    return {
      __esModule: true,
      ...originalModule,
      useSettingsDispatch: jest.fn(),
    };
});

describe('render switch section', function () {
    const mockedUseDispatch = useSettingsDispatch as jest.Mock;
    const mockedDispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        mockedUseDispatch.mockReturnValue(mockedDispatch);
        render(<SwitchSection />);
    });

    it('should dispatch halfPortions' , async () => {
        const heading = screen.getByRole('heading', {
            name: /portions:/i
        });
        const container = heading.parentElement!;
        const portionsCheckbox = container.querySelector('input')!;

        await user.click(portionsCheckbox);

        expect(mockedDispatch).toBeCalledWith({
            type: 'setHalfPortions',
        });
    });

    it('should dispatch autoReset' , async () => {

        const heading = screen.getByRole('heading', {
            name: /reset:/i
        });
        const container = heading.parentElement!;
        const resetCheckbox = container.querySelector('input')!;

        await user.click(resetCheckbox);

        expect(mockedDispatch).toBeCalledWith({
            type: 'setAutoReset',
        });
    });
    });
