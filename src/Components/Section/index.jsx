import PropTypes from 'prop-types';
import styles from './Section.module.scss';
import Gallery from '../Gallery/';
import Form from '../Form';

function Section({ id, title, content, galleryItems = [], className, withLinks = true, formFields = [] }) {
    const sectionClasses = `${styles.section} ${className ? styles[className] : ''}`;
    const galleryType = id === 'works' ? 'links' : id === 'tech' ? 'icons' : null;

    const handleFormSubmit = (formData) => {
        console.log('Form data:', formData);
    };

    return (
        <section id={id} className={sectionClasses}>
            {title && (
                id === 'hero' ? <h1 className={styles['main-title']}>{title}</h1> : <h2 className={styles['sub-title']}>{title}</h2>
            )}
            <div>
                {content}
                {formFields.length > 0 && <Form formFields={formFields} onSubmit={handleFormSubmit} />}
            </div>
            {galleryItems.length > 0 && galleryType && (
                <Gallery items={galleryItems} withLinks={withLinks} type={galleryType} />
            )}
        </section>
    );
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    content: PropTypes.node.isRequired,
    galleryItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string,
            component: PropTypes.string
        })
    ),
    className: PropTypes.string,
    withLinks: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
        })
    ),
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['text', 'email', 'textarea', 'checkbox']).isRequired,
            placeholder: PropTypes.string
        })
    )
};

export default Section;
