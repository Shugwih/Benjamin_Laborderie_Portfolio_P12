import PropTypes from 'prop-types';
import styles from './Bar.module.scss';

function Bar({ data }) {

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <div key={index} className={styles.barItem}>
                    <div className={styles.itemInfo}>
                        <h3>{item.name}</h3>
                    </div>
                    <div className={styles.barContainer}>
                        <div className={styles.bar} style={{ width: `${item.level}%`, backgroundColor: item.color }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

Bar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Bar;
