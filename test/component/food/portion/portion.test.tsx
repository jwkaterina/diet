import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Portion from '../../../../app/component/food/portion/portion';
import {handleFullPortionClick, handleHalfPortionClick} from '../../../../app/component/food/portion/utils';
import { Group } from '../../../../app/context/portions-reducer';
import { useSettings } from '../../../../app/context/settings-context';

jest.mock('../../../../app/context/settings-context', () => {
  const originalModule = jest.requireActual('../../../../app/context/settings-context');

  return {
    __esModule: true,
    ...originalModule,
    useSettings: jest.fn(),
  };
});

jest.mock('../../../../app/component/food/portion/utils', () => {
  return {
    __esModule: true,
    handleFullPortionClick: jest.fn(),
    handleHalfPortionClick: jest.fn(),
  };
});


describe('render portion', function () {
  const mockedUseSettings = useSettings as jest.Mock;

  it('should call handleHalfPortionClick', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 1,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: true,
      autoReset: false,
      timeStamp: ""
    });

    render(<Portion {...props}/>);
    const portion = screen.getByTestId('portion');

    await user.click(portion);

    expect(handleHalfPortionClick).toHaveBeenCalledWith(1, 2, Group.CARBS, expect.any(Function));
  });

  it('should call handleFullPortionClick', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 1,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: false,
      autoReset: false,
      timeStamp: ""
    });

    render(<Portion {...props}/>);
    const portion = screen.getByTestId('portion');

    await user.click(portion);

    expect(handleFullPortionClick).toHaveBeenCalledWith(1, 2, Group.CARBS, expect.any(Function));
  });
})