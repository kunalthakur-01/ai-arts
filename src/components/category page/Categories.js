import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useFetchImg from '../../hooks/fetchImg';

import styles from './Categories.module.css';

const Categories = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();
    // console.log(allImg);

    const params = useParams();

    useEffect(() => {
        getALLImg(params.categories);
    }, [getALLImg, params.categories]);

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
        <section className={styles.categories_section}>
            <div className={styles.header}>
                <div className={styles.header_text}>
                    <h1>Food & Drink</h1>
                    <h2>Do not read this article while you are hungry! Welcome to the realm of <br /> food photography, where you may
                        see images of hot meals, cold <br /> drinks, and more.</h2>
                    <p>Read more about the &nbsp;&nbsp;&nbsp;&nbsp; <Link to={'/license'}>Ai-Arts License </Link></p>
                </div>
            </div>

            <div className={styles.all_img}>
                <div className={styles.col_img}>
                    {/* {col1_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}

                    {col1_images.map(img => (
                        <div key={img.imgName} className={styles.img}>
                            <img src={img.imgUrl} alt={img.imgName} />
                        </div>
                    ))}

                </div>

                <div className={styles.col_img}>
                    {/* {col2_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}



                    {col2_images.map(img => (
                        <div key={img.imgName} className={styles.img}>
                            <img src={img.imgUrl} alt={img.imgName} />
                        </div>
                    ))}
                </div>

                <div className={styles.col_img}>
                    {/* {col3_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}




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
    )
}

export default Categories
