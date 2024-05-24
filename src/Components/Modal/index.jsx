import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Button from '../button/';

function Modal({ children, onClose, menuItems }) {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.content}>
                {menuItems.length > 0 && (
                    <nav>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Button to={item.id} className={styles['modal-button']} onClick={onClose}>
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Modal;
