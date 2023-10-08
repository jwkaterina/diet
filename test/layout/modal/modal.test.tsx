import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../../../app/layout/modal/modal';

describe('render portion group', function () {
    function renderComponent() {
        const openState = {
            modalOpen: true,
            setModalOpen: jest.fn(),
        }
        
        render(<Modal openState={openState}/>);
    }

    it('should render heading and 2 buttons', () => {
        renderComponent();

        const heading = screen.getByRole('heading', {
            name: /are you sure\?/i
        });
        const cancelButton = screen.getByText(/cancel/i);
        const confirmButton = screen.getByText(/confirm/i);

        expect(heading).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(confirmButton).toBeInTheDocument();
    });
})


