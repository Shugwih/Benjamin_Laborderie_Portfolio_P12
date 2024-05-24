import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = ({ formFields, onSubmit }) => {
    const [formData, setFormData] = useState(
        formFields.reduce((acc, field) => {
            acc[field.name] = field.type === 'checkbox' ? false : '';
            return acc;
        }, {})
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields.map((field) => (
                <div key={field.name} className={styles.field}>
                    <label htmlFor={field.name} className={styles.label}>{field.label}</label>
                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    ) : (
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.type === 'checkbox' ? undefined : formData[field.name]}
                            checked={field.type === 'checkbox' ? formData[field.name] : undefined}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    )}
                </div>
            ))}
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
};

Form.propTypes = {
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['text', 'email', 'textarea', 'checkbox']).isRequired,
            placeholder: PropTypes.string
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Form;
