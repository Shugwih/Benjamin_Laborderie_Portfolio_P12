import PropTypes from 'prop-types';
import styles from './Burger.module.scss';
import Modal from '../Modal/';

function Burger({ className = null, bars = 3, menuItems = [], isHovered, isOpen, toggleMenu }) {
    const burgerIconClasses = isOpen ? `${styles['burger-icon']} ${styles['burger-icon-open']}` : styles['burger-icon'];
    const barClasses = isHovered ? `${styles.bar} ${styles['bar-hovered']}` : styles.bar;

    return (
        <div className={`${styles['burger-menu']} ${className}`}>
            <div className={burgerIconClasses} onClick={toggleMenu}>
                {[...Array(bars)].map((_, index) => (
                    <div key={index} className={barClasses}></div>
                ))}
            </div>
            {isOpen && (
                <Modal onClose={toggleMenu} menuItems={menuItems} />
            )}
        </div>
    );
}

Burger.propTypes = {
    className: PropTypes.string,
    bars: PropTypes.number,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    isHovered: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Burger;
