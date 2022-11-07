import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Create.module.css';

const Create = () => {

    const allImg = [
        'r1',
        'r22',
        'r30',
        'r34',
        'r5',
        'r6',
        'r7',
        'r8',
        'r9',
        'r10',
        'r11',
        'r12',
        'r13',
        'r14',
        'r15',
    ]
    return (
        <section className={styles.create_page}>

            <div className={styles.header}>
                <Link to="/explore" className={styles.library_link} >Looking for stock photo library? click here</Link>
                <h1>Generate high-resolution, <br /> professional-looking <br /><span>Stock images</span> quickly and easily. </h1>
                <p>Stop looking through thousands upon thousands of stock images. Create 100% <br /> unique stock images within seconds
                    with <span>AI and machine learning algorithm,</span><br /> designed to mimic a professional photographer's workflow.
                </p>
                <Link to='/editing' className={styles.try_free}>Try it now for free now</Link>
                <p style={{ font: '300 13px/1.2 "Inter", Helvetica, Arial, serif' }}>No credit card required</p>
            </div>

            <div className={styles.detail_section}>
                <div className={styles.blocks}>
                    <div className={styles.about_detail_1}>
                        <p><span>Describe your photo</span> in as little as
                            five words, and let AiArts do
                            the rest.</p>
                        <img src={require("../../assets/b99eb7835e315563764a4b6cecd50b4f.png")} alt="" />
                    </div>
                    <div className={styles.about_detail_1}>
                        <p>Pick the settings that best fit your needs, or pick from <span>multiple presets.</span></p>
                        <img src={require("../../assets/c42edddf8614aa22c1140fbdca5e4043.png")} alt="" />
                    </div>
                    <div className={styles.about_detail_1}>
                        <p>Your personal AI camera will <span>generate a photo</span> that fits your exact needs.</p>
                        <img src={require("../../assets/a8a3fc41511a63c161d88faa8899d46c.png")} alt="" />
                    </div>
                </div>

                <div className={styles.discription}>
                    <h1>Not the <span>creative type?</span> <br /> No problem.</h1>
                    <p>Pick from 20,000+ premium, royalty free images you can use anywhere without <br /> attributing them.</p>
                    <Link to={'/explore'}>Browse library</Link>
                </div>

            </div>

            <div className={styles.all_img}>
                {allImg.map(img => (
                    <div key={img} className={styles.img}>
                        <img src={require(`../../assets/${img}.png`)} alt={img} />
                    </div>
                ))}
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
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/a80088585040e84d143f67d0d40ab834.png')} alt="img" />
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/efdfb1baaa3e75c376057aaf2d1cc90b.png')} alt="img" />
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/a47011487cbac80eb882e780790375ce.png')} alt="img" />
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/acce86d722daba3799b72c8104c0109c.png')} alt="img" />
                </div>
                <div className={styles.img}>
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
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/efdfb1baaa3e75c376057aaf2d1cc90b.png')} alt="img" />
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/a80088585040e84d143f67d0d40ab834.png')} alt="img" />
                </div>
                <div className={styles.img}>
                    <img src={require('../../assets/a47011487cbac80eb882e780790375ce.png')} alt="img" />
                </div> */}
            </div>

            <div className={styles.about_section}>
                <h1>Create your perfect visual now. <br /> <span>No credit card requried.</span></h1>
                <Link to='/editing'>Try it now for free</Link>
            </div>
        </section>
    )
}

export default Create;
