import { Link } from 'react-router'
import { useState } from 'react'
import SubHeaderNavigation from './SubHeaderNavigation'
import styles from './HeaderNavigation.module.css'
import abletonLogo from '/src/assets/ableton-hallmark.ef5355379032.svg'
import moreExpand from '/src/assets/ableton-plus-icon.svg'
import moreCollapse from '/src/assets/ableton-minus-icon.svg'
import handleNavClick from '../Event Handlers/handleNavClick' // handle navigation click function 
export default function HeaderNavigation() {
    const [isMoreBtnToggled, setIsMoreBtnToggled] = useState(false);
    const handleMoreEngagement = () => {
        setIsMoreBtnToggled(!isMoreBtnToggled);
    };

    const moreExpandElem = <img src={moreExpand} alt="More Icon" aria-label='More Icon' className={styles.main_nav_more_icon} />;
    const moreCollapseElem = <img src={moreCollapse} alt="More Icon Collapse" aria-label='More Icon Collapse' className={styles.main_nav_more_icon} />;
    const expandedNavElem = (
        <div className="sub_navigation_section main-nav__more js-main-nav-more-wrapper container-more" id="more" aria-hidden="false">
            <section className={styles['main_nav_content']} aria-label="More on Ableton.com:" tabIndex="0">
                <h3 className={styles.main_nav__section_heading}>More on Ableton.com:</h3>
                <ul className={`${styles.main_nav__link_list_expanded} ${styles.main_nav__link_list__primary}`}>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Blog</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Ableton for the Classroom</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Ableton for Colleges and Universities</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Certified Training</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item_highlight}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link" aria-current="page">About Ableton</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Jobs</Link>
                    </li>
                    <li className={styles.main_nav__link_list_item}>
                        <Link onClick={handleNavClick} to="" className="main-nav__link-list__link">Apprenticeships</Link>
                    </li>
                </ul>
            </section>
            <section className="main-nav__section main-nav__pt-section" aria-label="More from Ableton:" tabIndex="0">
                <h3 className={styles.main_nav__section_heading}>More from Ableton:</h3>
                <div className="main-nav__slideable-wrapper">
                    <div className="main-nav__slideable">
                        <ul className={`sub_navigation_section ${styles.main_nav__link_list} ${styles.main_nav__link_list__primary}`}>
                            <li className={`${styles.main_nav__link_list_item}`}>
                                <Link onClick={handleNavClick} to="/en/blog/categories/loop/">
                                    <div>
                                        <h4>Loop</h4>
                                        <p>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick} to="">
                                    <div>
                                        <h4>Learning Music</h4>
                                        <p>Learn the fundamentals of music making right in your browser.</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick} to="">
                                    <div>
                                        <h4>Learning Synths</h4>
                                        <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick} to="">
                                    <div>
                                        <h4>Making Music</h4>
                                        <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );

    return (
        <>
            <header className={`container ${styles.main_nav}`}>
                <nav aria-label='primary' className={styles.main_navigation_section}>
                    <section id={styles['main_nav_content']} aria-hidden='false'>
                        <ul className={`${styles.main_nav__link_list} ${styles.main_nav__link_list__primary}`}>
                            <Link onClick={handleNavClick} title='Go to Homepage' to='/'>
                                <img src={abletonLogo} alt="Ableton Logo for Clone Site" aria-label='Logo Ableton' />
                            </Link>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Live</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Push</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Move</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Note</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Link</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Shop</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Packs</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Help</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>
                                    <button onClick={handleMoreEngagement} className={`${styles.abl_btn__reset} ${styles.main_nav__more_button} js-main-nav-more-button`} aria-expanded="false" aria-haspopup="true" aria-controls="more">
                                        <span>More</span>
                                        <span>
                                            {isMoreBtnToggled
                                                ? moreCollapseElem
                                                : moreExpandElem
                                            }
                                        </span>
                                    </button>
                                </Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Try Live 12 for free</Link>
                            </li>
                            <li className={styles.main_nav__link_list_item}>
                                <Link onClick={handleNavClick}>Log in or register</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
            {isMoreBtnToggled
                ? expandedNavElem
                : undefined
            }
            <div className={styles.main_nav__separator}></div>
            <SubHeaderNavigation />
        </>
    );
};