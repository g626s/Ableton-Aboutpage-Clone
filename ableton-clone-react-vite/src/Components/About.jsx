import { Link } from 'react-router'
import { useState } from 'react'
import abletonText from '/src/assets/ableton-about-text.svg'
import playButton from '/src/assets/ableton-about-play-icon.svg'
import styles from './About.module.css'
import handleInternalClick from '../Event Handlers/handleInternalClick' // handle internal link clicks 
import handleYoutubeInteractionClick from '../Event Handlers/handleYoutubeInteractionClick' // handle youtube interaction clicks
export default function About() {
    const [showYoutube, setshowYoutube] = useState(false);
    const replaceElem = () => {
        setshowYoutube(!showYoutube);
    };

    const youtubeIframeElem = <iframe className={`${styles.abl_ratio_fill} js-inline-youtube-trigger-link`} width="800" height="450" src="https://www.youtube.com/embed/9SbnhgjeyXA?si=ctytOEqoiTKAtT9T&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>;
    const whyAbletonDivElem =
        <>
            <span className={styles.abl_visually_hidden}>Play video: Why Ableton - Juanpe Bolivar</span>
            <div className={`${styles.abl_w_100p} ${styles.abl_absolute} ${styles.abl_absolute__fill} ${styles.abl_center_content}`}>
                <span onClick={handleYoutubeInteractionClick} aria-hidden="true" className={`${styles.abl_circle} ${styles.abl_circle__80} ${styles.abl_circle__100_ml} ${styles.abl_bg_blue} ${styles.abl_cl_white} ${styles.abl_z_1}`} data-frame-src="https://www.youtube.com/watch?v=9SbnhgjeyXA" data-frame-title="Why Ableton - Juanpe">
                    <img className={styles.abl_circle_icon} src={playButton} alt="Play Button" data-frame-src="https://www.youtube.com/watch?v=9SbnhgjeyXA" data-frame-title="Why Ableton - Juanpe" />
                </span>
            </div>
            <img alt="" className={`imgix-fluid ${styles.abl_ratio_fill} lazyload`} data-src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=320" data-srcset="
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=320 320w,
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=768 768w,
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1024 1024w,
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1280 1280w,
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1440 1440w,
        https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1462 1462w" src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;dpr=2&amp;ixjsv=1.1.3&amp;q=50&amp;w=800" />
        </>;

    return (
        <>
            <section className='page container'>
                <main>
                    <div className="page_about">
                        <header className={`${styles.page_about__header} bg-dolphin imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&amp;auto=format&amp;fm=jpg">
                            <img className={styles.page_about__header__ableton_logo} src={abletonText} alt="Ableton text" />
                        </header>                                      
                    </div>
                    <div className={styles.page_about__text}>
                        <div className={styles.body_text}>
                            <h1>We make <Link href="/en/live/">Live</Link>, <Link href="/en/push/">Push</Link>, <Link href="/en/note/">Note</Link>, <Link href="/en/move/">Move</Link> and <Link href="/en/link/">Link</Link> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                            <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
                        </div>
                    </div>
                    <div className={`${styles.page_about__collage} ${styles.page_about__collage__products}`}>
                        <div className={`${styles.page_about__collage__background_1} ${styles.bg_lemonade}`}></div>
                        <div className={`${styles.page_about__collage__media_1} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop"></div>
                        <div className={`${styles.page_about__collage__media_2} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop"></div>
                    </div>
                    <div className={`${styles.page_about__text} has-video`}>
                        <div className={styles.body_text}>
                            <h1>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
                            <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
                        </div>
                    </div>
                    <div className={styles.page_about__media}>
                        <abl-inline-youtube id='about-juanpe-bolivar' className={styles.abl_block} data-youtube-id='9SbnhgjeyXA'>
                            <figure className={styles.abl_figure}>
                                <div className={`${styles.abl_relative} ${styles.abl_bg_lazyload} ${styles.abl_ratio_16_9}`}>
                                    <Link onClick={replaceElem} to="" className={`${styles.abl_ratio_fill} js-inline-youtube-trigger-link`} role="button">
                                        {showYoutube
                                            ? youtubeIframeElem
                                            : whyAbletonDivElem}
                                    </Link>
                                    <div className={`js-inline-youtube-iframe-wrapper ${styles.abl_hidden} ${styles.abl_absolute} ${styles.abl_absolute__fill} ${styles.abl_z_2}`}>
                                        <div className={`js-inline-youtube-iframe-container ${styles.abl_ratio_fill}`}></div>
                                    </div>
                                </div>
                                <figcaption aria-hidden="true" className={`${styles.abl_figure__caption} ${styles.abl_pa_10} ${styles.abl_ma_0}`}>
                                    <p className={`${styles.abl_type_ct} ${styles.abl_type_cb}`}>Why Ableton - Juanpe Bolivar</p>
                                </figcaption>
                            </figure>
                        </abl-inline-youtube>
                    </div>
                    <div className={styles.page_about__text}>
                        <div className={styles.body_text}>
                            <h1>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h1>
                            <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
                        </div>
                    </div>
                    <div className={`${styles.page_about__collage} ${styles.page_about__collage__people}`}>
                        <div className={`${styles.page_about__collage__background_2} ${styles.bg_spearmint}`}></div>
                        <div className={styles.page_about__collage__container}>
                            <div className={`${styles.page_about__collage__media_3} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-3.jpg?fit=crop"></div>
                            <div className={`${styles.page_about__collage__media_4} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-4.jpg?fit=crop"></div>
                        </div>
                        <div className={`${styles.page_about__collage__media_5} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-5.jpg?fit=crop"></div>
                    </div>
                    <div className={styles.page_about__text}>
                        <div className={styles.body_text}>
                            <h1>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h1>
                            <p>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
                        </div>
                    </div>
                    <div className={`page-about__media ${styles.page_about__media__large}`}>
                        <img className="imgix-fluid" alt="" data-src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?fit=crop&amp;auto=format&amp;fm=jpg" src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&amp;dpr=2&amp;fit=crop&amp;fm=jpg&amp;ixjsv=1.1.3&amp;q=50&amp;w=1333" />
                    </div>
                    <div className={styles.page_about__text}>
                        <div className={styles.body_text}>
                            <h1>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h1>
                            <p>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
                            <p>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
                        </div>
                    </div>
                    <div className={`${styles.page_about__collage} ${styles.page_about__collage__improving}`}>
                        <div className={`${styles.page_about__collage__background_3} ${styles.bg_lavender}`}></div>
                        <div className={`${styles.page_about__collage__media_6} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-6-a.jpg?fit=crop"></div>
                        <div className={`${styles.page_about__collage__media_7} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-7.jpg?fit=crop"></div>
                    </div>
                    <div className={styles.page_about__text}>
                        <div className={styles.body_text}>
                            <h1>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h1>
                            <p>If you’re joining us in Berlin, we’ll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
                        </div>
                    </div>
                    <div className={styles.page_about__jobs_teaser}>
                        <div className={`${styles.page_about__jobs_teaser__media} imgix-fluid imgix-fluid-bg`} data-src="https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&amp;crop=right"></div>
                        <div className={`${styles.page_about__jobs_teaser__text} ${styles.bg_periwinkle}`}>
                            <div className={styles.page_about__jobs_teaser__text__wrapper}>
                                <div className={styles.body_text_2}>
                                    <h1>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.<Link className={styles.has_arrow} to="/en/jobs/" onClick={handleInternalClick}>See latest jobs</Link></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <div className={styles.main_body__separator}></div>
        </>
    );
};