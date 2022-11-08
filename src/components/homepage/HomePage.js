import React from 'react';

import styles from './HomePage.module.css';

import { FiSearch } from 'react-icons/fi';
import { BiQrScan } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFetchImg from '../../hooks/fetchImg';
import { useEffect } from 'react';

const HomePage = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();
    console.log(allImg);
    // console.log(isLoading);

    useEffect(() => {
        getALLImg('random-images');
        getALLImg();
    }, [getALLImg]);

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
                            </div>
                        ))}
                    </div>

                    <div className={styles.col_img}>
                        {col2_images.map(img => (
                            <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                            </div>
                        ))}
                    </div>

                    <div className={styles.col_img}>
                        {col3_images.map(img => (
                            <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
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
