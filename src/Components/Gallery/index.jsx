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
                                {item.image && item.image.src ? (
                                    <div 
                                        className={styles.cardImage} 
                                        style={{ backgroundImage: `url(${item.image.src})` }}
                                    >
                                        <img 
                                            src={item.image.src} 
                                            srcSet={item.image.srcSet} 
                                            sizes="(max-width: 600px) 100vw, 300px" 
                                            alt={item.name}
                                        />
                                    </div>
                                ) : null}
                                <div className={styles.cardContent}>
                                    <h3>{item.name}</h3>
                                    <div className={styles.cardDescription}>
                                        <p>{item.description}</p>
                                        <div className={styles.cardTags}>
                                            {item.tags && item.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className={styles.cardSkills}>
                                            <h4>Compétences acquises :</h4>
                                            <ul>
                                                {item.skills && item.skills.map((skill, skillIndex) => (
                                                    <li key={skillIndex}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    ) : (
                        <div key={index} className={styles.card}>
                            {item.image && item.image.src ? (
                                <div 
                                    className={styles.cardImage} 
                                    style={{ backgroundImage: `url(${item.image.src})` }}
                                >
                                    <img 
                                        src={item.image.src} 
                                        srcSet={item.image.srcSet} 
                                        sizes="(max-width: 600px) 100vw, 300px" 
                                        alt={item.name}
                                    />
                                </div>
                            ) : null}
                            <div className={styles.cardContent}>
                                <h3>{item.name}</h3>
                                <div className={styles.cardDescription}>
                                    <p>{item.description}</p>
                                    <div className={styles.cardTags}>
                                        {item.tags && item.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.cardSkills}>
                                        <h4>Compétences acquises :</h4>
                                        <ul>
                                            {item.skills && item.skills.map((skill, skillIndex) => (
                                                <li key={skillIndex}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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
            image: PropTypes.shape({
                src: PropTypes.string,
                srcSet: PropTypes.string
            }),
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
            skills: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired,
    withLinks: PropTypes.bool,
    type: PropTypes.oneOf(['links', 'icons']).isRequired,
};

export default Gallery;
