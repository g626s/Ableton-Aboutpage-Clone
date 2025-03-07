import { Link } from 'react-router'
import styles from './SubHeaderNavigation.module.css'
import handleSubNavClick from '../Event Handlers/handleSubNavClick' // handle sub navigation click function 

export default function SubHeaderNavigation() {
    return (
        <nav aria-label="secondary" className='container main_nav'>
            <ul className={`${styles.main_nav__link_list} ${styles.main_nav__link_list__secondary}`}>
                <li className={styles.main_nav__link_list_item_highlight}>
                    <Link onClick={handleSubNavClick} aria-current="page" to='/'>About</Link>
                </li>
                <li className={styles.main_nav__link_list_item}>
                    <Link onClick={handleSubNavClick} to=''>Jobs</Link>
                </li>
                <li className={styles.main_nav__link_list_item}>
                    <Link onClick={handleSubNavClick} to=''>Apprenticeships</Link>
                </li>
            </ul>
        </nav>
    );
};