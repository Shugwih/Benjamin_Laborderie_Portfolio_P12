import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

function Logo({ className = null }) {
    return (
        <div className={`${styles.logo} ${className}`}>
            <div className={styles.initials}>
                <span className={`${styles.letter} ${styles.reversed}`}>B</span>
                <span className={`${styles.letter}`}>L</span>
            </div>
        </div>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
};

export default Logo;
