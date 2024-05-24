import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Burger from '../Burger/';
import Button from '../button/';
import Logo from '../Logo/';
import menuItemsData from '../../Data/section_data.json';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(menuItemsData);
    }, []);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    useEffect(() => {
        if (!isBurgerOpen) {
            setIsHovered(false);
        }
    }, [isBurgerOpen]);

    return (
        <header
            className={styles.header}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                if (!isBurgerOpen) {
                    setIsHovered(false);
                }
            }}
        >
            <Logo />
            <nav className={styles.nav}>
                <div className={styles['burger-menu']}>
                    <Burger
                        bars={3}
                        menuItems={menuItems}
                        isHovered={isHovered}
                        isOpen={isBurgerOpen}
                        toggleMenu={toggleBurgerMenu}
                    />
                </div>
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Button to={item.id} isHovered={isHovered}>{item.label}</Button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.underBar}></div>
        </header>
    );
}

export default Header;
