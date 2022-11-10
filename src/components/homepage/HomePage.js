import React from 'react';

import styles from './HomePage.module.css';

import { FiSearch } from 'react-icons/fi';
import { BiQrScan } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFetchImg from '../../hooks/fetchImg';
import { useEffect } from 'react';

const HomePage = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();
    // console.log(allImg);

    useEffect(() => {
        if (allImg.length === 0) {
            getALLImg('random-images');
            getALLImg();
        }
    }, [getALLImg, allImg.length]);

    const col1_images = [];
    const col2_images = [];
    const col3_images = [];

    allImg.forEach((img, i) => {
        const length = allImg.length;
        const colWiseLength = Math.floor((length / 3));
        if (i <= colWiseLength) {
            col1_images.push(img);
        }

        else if (i > colWiseLength && i <= colWiseLength * 2) {
            col2_images.push(img);
        }

        else if (i > colWiseLength * 2 && i <= colWiseLength * 3) {
            col3_images.push(img);
        }
    })
    return (
        <>
            <section className={styles.main_section}>
                <div className={styles.cover_img}>
                    <div className={styles.text_onImg}>
                        <div className={styles.hero_title}>
                            <span>AI</span>
                            <div className={styles.boxes}>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                            </div>
                            <span>ARTS</span>
                        </div>
                        <h2>The future of Stock Photography. <br /> For every freelancer, creative and individual.</h2>
                        <form action="/">
                            <div className={styles.search_btn}>
                                <FiSearch />
                            </div>
                            <input type="text" name="" id="" placeholder='Search free high-resolution photos' />
                            <div className={styles.scanner}>
                                <BiQrScan />
                            </div>
                        </form>
                        <p>Trending:&nbsp; Flower,&nbsp; Wallpapers,&nbsp;Backgrounds,&nbsp;Happy,Love</p>
                        <p className={styles.read_more}>Read more about the <Link to={'./license'}>Ai-Arts License</Link></p>
                    </div>
                </div>

                <div className={styles.discription}>
                    <div className={styles.col}>
                        <h4>With over a thousand high-quality stock photos</h4>
                        <p>You're sure to find the perfect image for your next project.</p>
                    </div>
                    <div className={styles.col}>
                        <h4>You can create any picture you want</h4>
                        <p>You don't have to search anymore. Our AI can create any photo you want.</p>
                    </div>
                    <div className={styles.col}>
                        <h4>Original images, every time.</h4>
                        <p>Our AI only creates original images, never any duplicates.</p>
                    </div>
                </div>

                <div className={styles.all_img}>
                    <div className={styles.col_img}>
                        {col1_images.map(img => (
                            <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                                <Link className={styles.like_icon} to="/login">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="fire-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity={"0.5"} />
                                        <path
                                            d="M32.2 21.8104L33.1583 20.5207C33.3979 20.1938 33.7812 20 34.1826 20C34.8833 20 35.4583 20.5812 35.4583 21.2896V22.6338C35.4583 23.427 35.7818 24.1898 36.3508 24.7348L41.424 29.627C44.3469 32.4484 46 36.3598 46 40.4467C46 46.2773 41.3281 51 35.5602 51H34.5C28.151 51 23 45.793 23 39.375V39.1449C23 36.1902 24.162 33.3566 26.2284 31.2678L26.438 31.0559C26.6896 30.8016 27.037 30.6562 27.3964 30.6562C28.1451 30.6562 28.75 31.2678 28.75 32.0246V37.4375C28.75 39.5748 30.469 41.3125 32.5833 41.3125C34.6977 41.3125 36.4167 39.5748 36.4167 37.4375V37.2014C36.4167 36.1115 35.9854 35.0641 35.2247 34.2951L32.9128 31.958C31.4753 30.5049 30.6667 28.525 30.6667 26.4664C30.6667 24.7893 31.2057 23.1484 32.2 21.8104V21.8104Z"
                                            fill="white" />
                                    </svg>
                                </Link>
                                <Link className={styles.save_icon} to={'/login'}>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_710_2256)"> */}
                                            <path
                                                d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_710_2256">
                                                <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link className={styles.download_icon} to='/login'>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="download-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_499_4591)"> */}
                                            <path
                                                d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_499_4591">
                                                <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className={styles.col_img}>
                        {col2_images.map(img => (
                            <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                                <Link className={styles.like_icon} to="/login">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="fire-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity={"0.5"} />
                                        <path
                                            d="M32.2 21.8104L33.1583 20.5207C33.3979 20.1938 33.7812 20 34.1826 20C34.8833 20 35.4583 20.5812 35.4583 21.2896V22.6338C35.4583 23.427 35.7818 24.1898 36.3508 24.7348L41.424 29.627C44.3469 32.4484 46 36.3598 46 40.4467C46 46.2773 41.3281 51 35.5602 51H34.5C28.151 51 23 45.793 23 39.375V39.1449C23 36.1902 24.162 33.3566 26.2284 31.2678L26.438 31.0559C26.6896 30.8016 27.037 30.6562 27.3964 30.6562C28.1451 30.6562 28.75 31.2678 28.75 32.0246V37.4375C28.75 39.5748 30.469 41.3125 32.5833 41.3125C34.6977 41.3125 36.4167 39.5748 36.4167 37.4375V37.2014C36.4167 36.1115 35.9854 35.0641 35.2247 34.2951L32.9128 31.958C31.4753 30.5049 30.6667 28.525 30.6667 26.4664C30.6667 24.7893 31.2057 23.1484 32.2 21.8104V21.8104Z"
                                            fill="white" />
                                    </svg>
                                </Link>
                                <Link className={styles.save_icon} to={'/login'}>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_710_2256)"> */}
                                            <path
                                                d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_710_2256">
                                                <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link className={styles.download_icon} to='/login'>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="download-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_499_4591)"> */}
                                            <path
                                                d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_499_4591">
                                                <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className={styles.col_img}>
                        {col3_images.map(img => (
                            <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                                <Link className={styles.like_icon} to="/login">
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="fire-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity={"0.5"} />
                                        <path
                                            d="M32.2 21.8104L33.1583 20.5207C33.3979 20.1938 33.7812 20 34.1826 20C34.8833 20 35.4583 20.5812 35.4583 21.2896V22.6338C35.4583 23.427 35.7818 24.1898 36.3508 24.7348L41.424 29.627C44.3469 32.4484 46 36.3598 46 40.4467C46 46.2773 41.3281 51 35.5602 51H34.5C28.151 51 23 45.793 23 39.375V39.1449C23 36.1902 24.162 33.3566 26.2284 31.2678L26.438 31.0559C26.6896 30.8016 27.037 30.6562 27.3964 30.6562C28.1451 30.6562 28.75 31.2678 28.75 32.0246V37.4375C28.75 39.5748 30.469 41.3125 32.5833 41.3125C34.6977 41.3125 36.4167 39.5748 36.4167 37.4375V37.2014C36.4167 36.1115 35.9854 35.0641 35.2247 34.2951L32.9128 31.958C31.4753 30.5049 30.6667 28.525 30.6667 26.4664C30.6667 24.7893 31.2057 23.1484 32.2 21.8104V21.8104Z"
                                            fill="white" />
                                    </svg>
                                </Link>
                                <Link className={styles.save_icon} to={'/login'}>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_710_2256)"> */}
                                            <path
                                                d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_710_2256">
                                                <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link className={styles.download_icon} to='/login'>
                                    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="download-logo">
                                        <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                        {/* <g clipPath="url(#clip0_499_4591)"> */}
                                            <path
                                                d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                                fill="white" />
                                        {/* </g> */}
                                        <defs>
                                            <clipPath id="clip0_499_4591">
                                                <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {isLoading && <div className={styles.loading_state}>
                    <h1>LOADING...</h1>
                </div>}
            </section>
        </>
    )
}

export default HomePage
