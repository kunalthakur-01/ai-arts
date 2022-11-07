import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useFetchImg from '../../hooks/fetchImg';

import styles from './Categories.module.css';


const Categories = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();

    const params = useParams();

    // const [allfetchedImage, setAllFetchedImage] = useState([]);
    // console.log(allImg);

    useEffect(() => {

        // const fetchData = (data) => {
        //     console.log(data)

        //     setAllFetchedImage(prevState => {
        //         return [...prevState, data];
        //     });
        // }
        getALLImg(params.categories);
    }, [getALLImg, params.categories]);

    // console.log(allfetchedImage);



    // const col1_images = [
    //     'food1',
    //     'food2',
    //     'food3',
    //     'food4',
    //     'food5',
    //     'food6',
    //     'food7',
    //     'food8',
    //     'food9',
    //     'food10',
    //     'food11',
    // ];

    // const col2_images = [
    //     'food12',
    //     'food13',
    //     'food14',
    //     'food15',
    //     'food16',
    //     'food17',
    //     'food18',
    //     'food19',
    //     'food20',
    //     'food21',
    //     'food22',
    //     'food23',
    // ];
    // const col3_images = [
    //     'food24',
    //     'food25',
    //     'food26',
    //     'food27',
    //     'food28',
    //     'food29',
    //     'food30',
    //     'food31',
    //     'food32',
    //     'food33',
    //     'drink1',
    // ];
    return (
        <section className={styles.categories_section}>
            <div className={styles.header}>
                <div className={styles.header_text}>
                    <h1>Food & Drink</h1>
                    <h2>Do not read this article while you are hungry! Welcome to the realm of <br /> food photography, where you may
                        see images of hot meals, cold <br /> drinks, and more.</h2>
                    <p>Read more about the &nbsp;&nbsp;&nbsp;&nbsp; <Link to={'/'}>Ai-Arts License </Link></p>
                </div>
            </div>

            <div className={styles.all_img}>
                <div className={styles.col_img}>
                    {/* {col1_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}

                    {allImg.map((img, i) => {
                        if (i < 12) {
                            return <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                            </div>
                        }
                    })}






                    {/* <div className={styles.img}>
                        <img src={require('../../assets/categories/food&drink/food1.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/a80088585040e84d143f67d0d40ab834.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/a47011487cbac80eb882e780790375ce.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/acce86d722daba3799b72c8104c0109c.png')} alt="img" />
                    </div> */}
                </div>

                <div className={styles.col_img}>
                    {/* {col2_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}



                    {allImg.map((img, i) => {
                        if (i > 11 && i < 25) {
                            return <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                            </div>
                        }
                    })}



                    {/* <div className={styles.img}>
                        <img src={require('../../assets/aed55c419ee3e09d4a161f456b146710.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/dfc23184bec71886d5e2ae4f881a34ce.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/fa95d9a3d364040ff5bc8a20578530d8.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/efdfb1baaa3e75c376057aaf2d1cc90b.png')} alt="img" />
                    </div> */}
                </div>

                <div className={styles.col_img}>
                    {/* {col3_images.map(img => (
                        <div key={img} className={styles.img}>
                            <img src={require(`../../assets/categories/food&drink/${img}.png`)} alt={img} />
                        </div>
                    ))} */}




                    {allImg.map((img, i) => {
                        if (i > 24 && i < 34) {
                            return <div key={img.imgName} className={styles.img}>
                                <img src={img.imgUrl} alt={img.imgName} />
                            </div>
                        }
                    })}



                    {/* <div className={styles.img}>
                        <img src={require('../../assets/efdfb1baaa3e75c376057aaf2d1cc90b.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/a80088585040e84d143f67d0d40ab834.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/a47011487cbac80eb882e780790375ce.png')} alt="img" />
                    </div>
                    <div className={styles.img}>
                        <img src={require('../../assets/acce86d722daba3799b72c8104c0109c.png')} alt="img" />
                    </div> */}
                </div>
            </div>
            {isLoading && <div className={styles.loading_state}>
                <h1>LOADING...</h1>
            </div>}
        </section>
    )
}

export default Categories
