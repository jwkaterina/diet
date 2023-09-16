import './modal.css'

import { useContext } from 'react';
import { PortionsContext } from '@/app/context/portions-context';

export default function Modal(props: ModalProps) {
    const {portions, dispatch} = useContext(PortionsContext);

    const clearPortions = () => {
        dispatch({
            type: 'clear',
        });
        props.openState.setModalOpen(false);
    }

    if (!props.openState.modalOpen) return null;

    return (
        <div className="ConfirmationComponent">
            <div className="ConfirmationComponent__window">
                <h3 className="ConfirmationComponent__title">Are You Sure?</h3>
                <div className="ConfirmationComponent__controls">
                    <div className="btn" onClick={() => props.openState.setModalOpen(false)}>Cancel</div>
                    <div className="btn" onClick={clearPortions}>Confirm</div>
                </div>
            </div>
        </div>
    );
}

export interface ModalProps {
    openState: {
        modalOpen: boolean,
        setModalOpen: (modalOpen: boolean) => void
    }
}

