import { Link } from 'react-router'
import styles from './Footer.module.css'
import metaIcon from '/src/assets/ableton-social-listitem-meta.svg'
import xIcon from '/src/assets/ableton-social-listitem-twitter.svg'
import youtubeIcon from '/src/assets/ableton-social-listitem-youtube.svg'
import instagramIcon from '/src/assets/ableton-social-listitem-instagram.svg'
import tiktokIcon from '/src/assets/ableton-social-listitem-tiktok.svg'
import discordIcon from '/src/assets/ableton-social-listitem-discord.svg'
import handleFooterClick from '../Event Handlers/handleFooterClick' // handle footer click function
import handleOutboundClick from '../Event Handlers/handleOutboundClick' // handle outbound link click function for social list item

export default function Footer() {
    return (
        <footer className={`styles.main_footer container`}>
            <div className={styles.main_footer__container}>
                <div className={styles.main_footer__content}>
                    <div className={styles.main_footer__row}>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__full}`}>
                            <img className={styles.main_footer__basics__logo} src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg" alt="Ableton" />
                        </div>
                    </div>
                    <div className={styles.main_footer__row}>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__sm}`}>
                            <ul className={styles.main_footer__list}>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/account/add_license/">Register Live, Push, or Move</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="en/about/">About Ableton</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="en/jobs/">Jobs</Link>
                                </li>
                            </ul>
                            <ul className={styles.main_footer__social}>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://facebook.com/ableton" title="Go To Facebook" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={metaIcon} alt="Facebook Ableton" />
                                    </Link>
                                </li>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://twitter.com/ableton" title="Go To Twitter" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={xIcon} alt="Twitter Ableton" />
                                    </Link>
                                </li>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://youtube.com/ableton" title="Go To Youtube" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={youtubeIcon} alt="Youtube Ableton" />
                                    </Link>
                                </li>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://instagram.com/ableton" title="Go To Instagram" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={instagramIcon} alt="Instagram Ableton" />
                                    </Link>
                                </li>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://tiktok.com/ableton" title="Go To Tiktok" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={tiktokIcon} alt="Tiktok Ableton" />
                                    </Link>
                                </li>
                                <li className={styles.main_footer__social_listitem}>
                                    <Link onClick={handleOutboundClick} className={styles.main_footer__social_button} to="https://discord.com/invite/ableton" title="Go To Discord" target="_blank">
                                        <img className={styles.main_footer__social_button_img} src={discordIcon} alt="Discord Ableton" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__sm}`}>
                            <span className={styles.main_footer__h3}>Education</span>
                            <ul className={styles.main_footer__list}>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/shop/education/">Offers for students and teachers</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/classroom/">Ableton for the Classroom</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/colleges-universities/">Ableton for Colleges and Universities</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__md} ${styles.main_footer__col__start} ${styles.main_footer__pr_0}`}>
                            <label htmlFor="sign_up_to_newsletter">
                                <span className={`${styles.main_footer__h3} ${styles.abl_block}`}>Sign up to our newsletter</span>
                                <span>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</span>
                            </label>
                            <div>
                                <form className={`${styles.main_footer__newsletter__form} test-subscribe-to-newsletter-form`} action="/en/subscribe-to-newsletter/" method="post">
                                    <input type="hidden" name="csrfmiddlewaretoken" value="2rtRlkwajt3FdbBcL8ffrj9PoYcI4t2BBmAc32BsD9suSQa1RzpA4xsJfuB6Uz4R" />
                                    <input type="hidden" name="mailing_list" value="newsletter" id="id_newsletter_mailing_list" />
                                    <input type="hidden" name="source" value="1" id="id_newsletter-source" />
                                    <input type="hidden" name="next" value="/en/about/" id="id_newsletter-next" />
                                    <div className={styles.main_footer__form__group}>
                                        <div className={styles.main_footer__form__field}>
                                            <input id={styles.sign_up_to_newsletter} name="email" type="email" placeholder="Email Address" className="" />
                                            <div data-lastpass-icon-root=""></div>
                                        </div>
                                        <input className={styles.main_footer__button} type="submit" value="Sign up" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.main_footer__row} ${styles.extra_gap}`}>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__sm}`}>
                            <span className={styles.main_footer__h3}>Community</span>
                            <ul className={styles.main_footer__list}>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/community/user-groups/">Find Ableton User Groups</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} tp="/en/certified-training/">Find Certified Training</Link>
                                </li>
                                <li>
                                    <Link onClick={handleFooterClick} className={styles.main_footer__has_arrow} to="/en/education/certification-program/">Become a Certified Trainer</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__sm} ${styles.extra_width}`}>
                            <span className={styles.main_footer__h3}>Language and Location</span>
                            <div className={styles.main_footer__language_selector}>
                                <div className={`${styles.main_footer__secondary__select} ${styles.main_footer__form__element__select} ${styles.has_auto_width}`}>
                                    <div className={`${styles.form__element__field} ${styles.main_footer__icon_arrow__small}`}>
                                        <form action="/set-language/" method="POST">
                                            <input type="hidden" name="csrfmiddlewaretoken" value="TbTUk23CZfaCeqH3ZIueoRhc1LUoKj4Ms60f2K8UjVzrT5gS59Ez15A6ShjMAp62" />
                                            <label className={styles.abl_visually_hidden} htmlFor="language-chooser">Language</label>
                                            <select className="js-language-chooser" name="language" id="language-chooser" defaultValue="en">
                                                <option value="en">English</option>
                                                <option value="de">Deutsch</option>
                                                <option value="fr">Français</option>
                                                <option value="ja">日本語</option>
                                                <option value="zh-cn">简体中文</option>
                                                <option value="es">Español</option>
                                            </select>
                                            <input type="hidden" name="target" value="/en/about/" />
                                        </form>
                                    </div>
                                </div>
                                <div className={`${styles.main_footer__secondary__select} ${styles.main_footer__form__element__select} ${styles.has_auto_width}`}>
                                    <div className={`${styles.form__element__field} ${styles.main_footer__icon_arrow__small}`}>
                                        <form className="js-location-chooser test-location-chooser-form" method="post" action="/en/change-country/">
                                            <label className={styles.abl_visually_hidden} htmlFor="id_location_chooser-country_code">Country or Region</label>
                                            <input type="hidden" name="csrfmiddlewaretoken" value="TbTUk23CZfaCeqH3ZIueoRhc1LUoKj4Ms60f2K8UjVzrT5gS59Ez15A6ShjMAp62" />
                                            <input type="hidden" name="next" value="/en/about/" className="js-location-chooser-next" id="id_location_chooser-next" />
                                            <select name="country_code" className="js-location-chooser-country-code" required="" id="id_location_chooser-country_code" defaultValue="us">
                                                <option value="">Please choose</option>
                                                <optgroup label="Common Countries">
                                                    <option value="us">United States</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="fr">France</option>
                                                    <option value="de">Germany</option>
                                                    <option value="ca">Canada</option>
                                                    <option value="jp">Japan</option>
                                                    <option value="cn">China</option>
                                                    <option value="au">Australia</option>
                                                </optgroup>
                                                <optgroup label="All Countries/Regions">
                                                    <option value="af">Afghanistan</option>
                                                    <option value="ax">Aland Islands</option>
                                                    <option value="al">Albania</option>
                                                    <option value="dz">Algeria</option>
                                                    <option value="as">American Samoa</option>
                                                    <option value="ad">Andorra</option>
                                                    <option value="ao">Angola</option>
                                                    <option value="ai">Anguilla</option>
                                                    <option value="aq">Antarctica</option>
                                                    <option value="ag">Antigua And Barbuda</option>
                                                    <option value="ar">Argentina</option>
                                                    <option value="am">Armenia</option>
                                                    <option value="aw">Aruba</option>
                                                    <option value="au">Australia</option>
                                                    <option value="at">Austria</option>
                                                    <option value="az">Azerbaijan</option>
                                                    <option value="bs">Bahamas</option>
                                                    <option value="bh">Bahrain</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="bb">Barbados</option>
                                                    <option value="by">Belarus</option>
                                                    <option value="be">Belgium</option>
                                                    <option value="bz">Belize</option>
                                                    <option value="bj">Benin</option>
                                                    <option value="bm">Bermuda</option>
                                                    <option value="bt">Bhutan</option>
                                                    <option value="bo">Bolivia</option>
                                                    <option value="bq">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="ba">Bosnia And Herzegovina</option>
                                                    <option value="bw">Botswana</option>
                                                    <option value="bv">Bouvet Island</option>
                                                    <option value="br">Brazil</option>
                                                    <option value="io">British Indian Ocean Territory</option>
                                                    <option value="bn">Brunei Darussalam</option>
                                                    <option value="bg">Bulgaria</option>
                                                    <option value="bf">Burkina Faso</option>
                                                    <option value="bi">Burundi</option>
                                                    <option value="kh">Cambodia</option>
                                                    <option value="cm">Cameroon</option>
                                                    <option value="ca">Canada</option>
                                                    <option value="cv">Cape Verde</option>
                                                    <option value="ky">Cayman Islands</option>
                                                    <option value="cf">Central African Republic</option>
                                                    <option value="td">Chad</option>
                                                    <option value="cl">Chile</option>
                                                    <option value="cn">China</option>
                                                    <option value="cx">Christmas Island</option>
                                                    <option value="cc">Cocos (Keeling) Islands</option>
                                                    <option value="co">Colombia</option>
                                                    <option value="km">Comoros</option>
                                                    <option value="cg">Congo</option>
                                                    <option value="cd">Congo, The Democratic Republic Of The</option>
                                                    <option value="ck">Cook Islands</option>
                                                    <option value="cr">Costa Rica</option>
                                                    <option value="ci">Cote D&apos;Ivoire</option>
                                                    <option value="hr">Croatia</option>
                                                    <option value="cu">Cuba</option>
                                                    <option value="cw">Curacao</option>
                                                    <option value="cy">Cyprus</option>
                                                    <option value="cz">Czech Republic</option>
                                                    <option value="dk">Denmark</option>
                                                    <option value="dj">Djibouti</option>
                                                    <option value="dm">Dominica</option>
                                                    <option value="do">Dominican Republic</option>
                                                    <option value="ec">Ecuador</option>
                                                    <option value="eg">Egypt</option>
                                                    <option value="sv">El Salvador</option>
                                                    <option value="gq">Equatorial Guinea</option>
                                                    <option value="er">Eritrea</option>
                                                    <option value="ee">Estonia</option>
                                                    <option value="et">Ethiopia</option>
                                                    <option value="fk">Falkland Islands (Malvinas)</option>
                                                    <option value="fo">Faroe Islands</option>
                                                    <option value="fj">Fiji</option>
                                                    <option value="fi">Finland</option>
                                                    <option value="fr">France</option>
                                                    <option value="gf">French Guiana</option>
                                                    <option value="pf">French Polynesia</option>
                                                    <option value="ga">Gabon</option>
                                                    <option value="gm">Gambia</option>
                                                    <option value="ge">Georgia</option>
                                                    <option value="de">Germany</option>
                                                    <option value="gh">Ghana</option>
                                                    <option value="gi">Gibraltar</option>
                                                    <option value="gr">Greece</option>
                                                    <option value="gl">Greenland</option>
                                                    <option value="gd">Grenada</option>
                                                    <option value="gp">Guadeloupe</option>
                                                    <option value="gu">Guam</option>
                                                    <option value="gt">Guatemala</option>
                                                    <option value="gg">Guernsey</option>
                                                    <option value="gn">Guinea</option>
                                                    <option value="gw">Guinea-Bissau</option>
                                                    <option value="gy">Guyana</option>
                                                    <option value="ht">Haiti</option>
                                                    <option value="hm">Heard Island And McDonald Islands</option>
                                                    <option value="hn">Honduras</option>
                                                    <option value="hk">Hong Kong SAR, China</option>
                                                    <option value="hu">Hungary</option>
                                                    <option value="is">Iceland</option>
                                                    <option value="in">India</option>
                                                    <option value="id">Indonesia</option>
                                                    <option value="ir">Iran (Islamic Republic Of)</option>
                                                    <option value="iq">Iraq</option>
                                                    <option value="ie">Ireland</option>
                                                    <option value="im">Isle Of Man</option>
                                                    <option value="il">Israel</option>
                                                    <option value="it">Italy</option>
                                                    <option value="jm">Jamaica</option>
                                                    <option value="jp">Japan</option>
                                                    <option value="je">Jersey</option>
                                                    <option value="jo">Jordan</option>
                                                    <option value="kz">Kazakhstan</option>
                                                    <option value="ke">Kenya</option>
                                                    <option value="ki">Kiribati</option>
                                                    <option value="kp">Korea, Democratic People&apos;s Republic</option>
                                                    <option value="kr">Korea, Republic Of</option>
                                                    <option value="kw">Kuwait</option>
                                                    <option value="kg">Kyrgyzstan</option>
                                                    <option value="la">Lao People&apos;s Democratic Republic</option>
                                                    <option value="lv">Latvia</option>
                                                    <option value="lb">Lebanon</option>
                                                    <option value="ls">Lesotho</option>
                                                    <option value="lr">Liberia</option>
                                                    <option value="ly">Libya</option>
                                                    <option value="li">Liechtenstein</option>
                                                    <option value="lt">Lithuania</option>
                                                    <option value="lu">Luxembourg</option>
                                                    <option value="mo">Macao SAR, China</option>
                                                    <option value="mg">Madagascar</option>
                                                    <option value="mw">Malawi</option>
                                                    <option value="my">Malaysia</option>
                                                    <option value="mv">Maldives</option>
                                                    <option value="ml">Mali</option>
                                                    <option value="mt">Malta</option>
                                                    <option value="mh">Marshall Islands</option>
                                                    <option value="mq">Martinique</option>
                                                    <option value="mr">Mauritania</option>
                                                    <option value="mu">Mauritius</option>
                                                    <option value="yt">Mayotte</option>
                                                    <option value="mx">Mexico</option>
                                                    <option value="fm">Micronesia, Federated States Of</option>
                                                    <option value="md">Moldova, Republic Of</option>
                                                    <option value="mc">Monaco</option>
                                                    <option value="mn">Mongolia</option>
                                                    <option value="me">Montenegro</option>
                                                    <option value="ms">Montserrat</option>
                                                    <option value="ma">Morocco</option>
                                                    <option value="mz">Mozambique</option>
                                                    <option value="mm">Myanmar</option>
                                                    <option value="na">Namibia</option>
                                                    <option value="nr">Nauru</option>
                                                    <option value="np">Nepal</option>
                                                    <option value="nl">Netherlands</option>
                                                    <option value="nc">New Caledonia</option>
                                                    <option value="nz">New Zealand</option>
                                                    <option value="ni">Nicaragua</option>
                                                    <option value="ne">Niger</option>
                                                    <option value="ng">Nigeria</option>
                                                    <option value="nu">Niue</option>
                                                    <option value="nf">Norfolk Island</option>
                                                    <option value="mk">North Macedonia, Republic of</option>
                                                    <option value="mp">Northern Mariana Islands</option>
                                                    <option value="no">Norway</option>
                                                    <option value="om">Oman</option>
                                                    <option value="pk">Pakistan</option>
                                                    <option value="pw">Palau</option>
                                                    <option value="ps">Palestinian Territory, Occupied</option>
                                                    <option value="pa">Panama</option>
                                                    <option value="pg">Papua New Guinea</option>
                                                    <option value="py">Paraguay</option>
                                                    <option value="pe">Peru</option>
                                                    <option value="ph">Philippines</option>
                                                    <option value="pn">Pitcairn</option>
                                                    <option value="pl">Poland</option>
                                                    <option value="pt">Portugal</option>
                                                    <option value="pr">Puerto Rico</option>
                                                    <option value="qa">Qatar</option>
                                                    <option value="re">Reunion</option>
                                                    <option value="ro">Romania</option>
                                                    <option value="ru">Russian Federation</option>
                                                    <option value="rw">Rwanda</option>
                                                    <option value="sh">Saint Helena</option>
                                                    <option value="kn">Saint Kitts And Nevis</option>
                                                    <option value="lc">Saint Lucia</option>
                                                    <option value="mf">Saint Martin (French Part)</option>
                                                    <option value="pm">Saint Pierre And Miquelon</option>
                                                    <option value="vc">Saint Vincent And The Grenadines</option>
                                                    <option value="ws">Samoa</option>
                                                    <option value="sm">San Marino</option>
                                                    <option value="st">Sao Tome And Principe</option>
                                                    <option value="sa">Saudi Arabia</option>
                                                    <option value="sn">Senegal</option>
                                                    <option value="rs">Serbia</option>
                                                    <option value="sc">Seychelles</option>
                                                    <option value="sl">Sierra Leone</option>
                                                    <option value="sg">Singapore</option>
                                                    <option value="sx">Sint Maarten</option>
                                                    <option value="sk">Slovakia</option>
                                                    <option value="si">Slovenia</option>
                                                    <option value="sb">Solomon Islands</option>
                                                    <option value="so">Somalia</option>
                                                    <option value="za">South Africa</option>
                                                    <option value="gs">South Georgia And The South Sandwich Islands</option>
                                                    <option value="ss">South Sudan</option>
                                                    <option value="es">Spain</option>
                                                    <option value="ic">Canary Islands (Spain)</option>
                                                    <option value="lk">Sri Lanka</option>
                                                    <option value="sd">Sudan</option>
                                                    <option value="sr">Suriname</option>
                                                    <option value="sj">Svalbard And Jan Mayen</option>
                                                    <option value="sz">Swaziland</option>
                                                    <option value="se">Sweden</option>
                                                    <option value="ch">Switzerland</option>
                                                    <option value="sy">Syrian Arab Republic</option>
                                                    <option value="tw">Taiwan</option>
                                                    <option value="tj">Tajikistan</option>
                                                    <option value="tz">Tanzania, United Republic Of</option>
                                                    <option value="tf">Territory of the French Southern and Antarctic Lands</option>
                                                    <option value="th">Thailand</option>
                                                    <option value="tl">Timor-Leste</option>
                                                    <option value="tg">Togo</option>
                                                    <option value="tk">Tokelau</option>
                                                    <option value="to">Tonga</option>
                                                    <option value="tt">Trinidad And Tobago</option>
                                                    <option value="tn">Tunisia</option>
                                                    <option value="tr">Turkey</option>
                                                    <option value="tm">Turkmenistan</option>
                                                    <option value="tc">Turks And Caicos Islands</option>
                                                    <option value="tv">Tuvalu</option>
                                                    <option value="ug">Uganda</option>
                                                    <option value="ua">Ukraine</option>
                                                    <option value="ae">United Arab Emirates</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="us">United States</option>
                                                    <option value="um">United States Minor Outlying Islands</option>
                                                    <option value="uy">Uruguay</option>
                                                    <option value="uz">Uzbekistan</option>
                                                    <option value="vu">Vanuatu</option>
                                                    <option value="va">Vatican City State (Holy See)</option>
                                                    <option value="ve">Venezuela</option>
                                                    <option value="vn">Viet Nam</option>
                                                    <option value="vg">Virgin Islands (British)</option>
                                                    <option value="vi">Virgin Islands (U.S.)</option>
                                                    <option value="wf">Wallis And Futuna</option>
                                                    <option value="eh">Western Sahara</option>
                                                    <option value="ye">Yemen</option>
                                                    <option value="zm">Zambia</option>
                                                    <option value="zw">Zimbabwe</option>
                                                </optgroup>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_footer__row}>
                        <div className={`${styles.main_footer__col} ${styles.main_footer__col__full} ${styles.main_footer__pb_1u} ${styles.main_footer__pr_0}`}>
                            <div className={styles.main_footer__secondary__link_list}>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/contact-us/">Contact Us</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/press/">Press Resources</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/legal/">Legal Info</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/corporate-information/">Corporate Information</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/privacy-policy/">Privacy Policy</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/cookie-settings/">Cookie Settings</Link>
                                <Link onClick={handleFooterClick} className={styles.main_footer__secondary__link_list__item} to="/en/imprint/">Imprint</Link>
                            </div>
                        </div>
                        <div className={styles.main_footer__secondary__signature}>
                            <img className={styles.main_footer__secondary__signature__logo} src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-hallmark.ef5355379032.svg" alt="Ableton - Made in Berlin" />
                            <span className={styles.main_footer__secondary__signature__label} aria-hidden="true">Made in Berlin</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

