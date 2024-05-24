import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ to, children, className = '', onClick = null, type = 'button', isHovered, disableDefaultStyle = false }) {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }

        if (to && !to.startsWith('http') && !to.startsWith('mailto')) {
            event.preventDefault();
            const element = document.getElementById(to);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const buttonClasses = `${disableDefaultStyle ? '' : styles.button} ${className} ${isHovered ? styles.hovered : ''}`;

    if (to && (to.startsWith('http') || to.startsWith('mailto'))) {
        return (
            <a href={to} className={buttonClasses} target={to.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={buttonClasses} onClick={handleClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    isHovered: PropTypes.bool,
    disableDefaultStyle: PropTypes.bool,
};

export default Button;
