import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Button from '../button';
import iconData from '../../Data/icon_data.json';
import SvgIcon from '../Icon_SVG/';

function Gallery({ items, withLinks, type }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                type === 'links' ? (
                    withLinks && item.link ? (
                        <Button 
                            key={index} 
                            to={item.link} 
                            className={styles.cardLink} 
                            disableDefaultStyle={true}
                        >
                            <div className={styles.card}>
                                <div 
                                    className={styles.cardImage} 
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className={styles.cardContent}>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </Button>
                    ) : (
                        <div key={index} className={styles.card}>
                            <div 
                                className={styles.cardImage} 
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className={styles.cardContent}>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    )
                ) : (
                    <div key={index} className={styles.icon}>
                        <SvgIcon iconData={iconData.find(icon => icon.name === item.component)} />
                        <p>{item.name}</p>
                    </div>
                )
            ))}
        </div>
    );
}

Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string,
            component: PropTypes.string,
            image: PropTypes.string
        })
    ).isRequired,
    withLinks: PropTypes.bool,
    type: PropTypes.oneOf(['links', 'icons']).isRequired,
};

export default Gallery;