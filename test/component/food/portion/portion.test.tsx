import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import Portion from '../../../../app/component/food/portion/portion';
import { handleFullPortionClick, handleHalfPortionClick } from '../../../../app/component/food/portion/utils';
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

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

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

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(handleFullPortionClick).toHaveBeenCalledWith(1, 2, Group.CARBS, expect.any(Function));
  });

  it('should calculate class when halfPoritons and index <= checked / 2', async () => {
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

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(portion).toHaveClass('portion_svg checked');
  });

  it('should calculate class when halfPoritons and index == checked / 2 + 0.5', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 1.5,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: true,
      autoReset: false,
      timeStamp: ""
    });

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(portion).toHaveClass('portion_svg checked_left');
  });

  it('should calculate class when halfPoritons and index >= checked / 2 + 1', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 2,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: true,
      autoReset: false,
      timeStamp: ""
    });

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(portion).toHaveClass('portion_svg');
  });

  it('should calculate class when fullPoritons and index <= checked', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 2,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: false,
      autoReset: false,
      timeStamp: ""
    });

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(portion).toHaveClass('portion_svg checked');
  });

  it('should calculate class when fullPoritons and index > checked', async () => {
    const  props = {
      width: 48,
      height: 51,
      children: [],
      group: Group.CARBS,
      index: 3,
      checked: 2,
    };

    mockedUseSettings.mockReturnValue({
      halfPortions: false,
      autoReset: false,
      timeStamp: ""
    });

    const { container } = render(<Portion {...props}/>);
    const portion = container.querySelector('svg');

    await user.click(portion!);

    expect(portion).toHaveClass('portion_svg');
  });
})