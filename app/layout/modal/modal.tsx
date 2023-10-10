import styles from './modal.module.css'

import { usePortionsDispatch } from '@/app/context/portions-context';

interface ModalProps {
    openState: {
        modalOpen: boolean,
        setModalOpen: (modalOpen: boolean) => void
    }
}

export default function Modal({ openState }: ModalProps): JSX.Element {
    const dispatch = usePortionsDispatch();

    const clearPortions = () => {
        dispatch({
            type: 'clear',
        });
        openState.setModalOpen(false);
    }

    if (!openState.modalOpen) return <></>;

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <h3 className={styles.title}>Are You Sure?</h3>
                <div className={styles.controls}>
                    <div className="btn" onClick={() => openState.setModalOpen(false)}>Cancel</div>
                    <div className="btn" onClick={clearPortions}>Confirm</div>
                </div>
            </div>
        </div>
    );
}
