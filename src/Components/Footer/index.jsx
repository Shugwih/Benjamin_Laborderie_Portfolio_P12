import styles from './Footer.module.scss';
import Data from '../../Data/owner_data.json';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <h3>© {currentYear} {Data.lastName} {Data.firstName}</h3>
        </footer>
    );
}

export default Footer;
