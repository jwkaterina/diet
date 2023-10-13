import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import SwitchCell from '@/app/settings/component/cells/switch-cell';

describe('render switch cell', function () {

    const props = {
        children: [],
        check: true, 
        onChange: jest.fn()
    }

    it('should render checkbox', () => {
        
        render(<SwitchCell { ...props}/>);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('should call onChange', async () => {

        render(<SwitchCell { ...props}/>);
        const checkbox = screen.getByRole('checkbox');

        await user.click(checkbox);

        expect(props.onChange).toHaveBeenCalled();
    });
})


