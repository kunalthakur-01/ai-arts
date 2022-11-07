import React from 'react';

import styles from './Header.module.css';

import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseActions } from '../../store/AuthSlice';
import { useState } from 'react';


const Header = () => {

    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.firebaseAuth.isLogin);
    const [isVisible, setIsVisible] = useState(false);

    const logoutBtnHandler = () => {
        dispatch(firebaseActions.checkAuthentication(''));
    }

    // useEffect(() => {
    //     document.body.addEventListener('click', (e) => {
    //         console.log(e.target);

    //     });
    // }, []);


    const hamburgerMenuHandler = () => {
        setIsVisible(!isVisible);
    }
    return (
        <header className={styles.main_header}>
            <div className={styles.search_header}>
                <div className={`${styles.logo}`}>
                    <Link to='/'>
                        <div className={styles['item-group']}>
                            <img
                                src={require('../../assets/a7785d35e0facd5e8454f8862647b2c4.png')}
                                alt="VectorI512"
                            />
                            <img
                                src={require('../../assets/dd60aff9e3c848a8be2e71c225cce8e8.png')}
                                alt="VectorI512"
                            />
                            <img
                                src={require('../../assets/f53de06d75026933c4ba9bea92e4b91d.png')}
                                alt="VectorI512"
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.searchbar}>
                    <img className={styles.search} src={require('../../assets/0db21099504adc2c3b59ca0c56f9dd44.png')} alt="search" />
                    <input type="text" placeholder='Search free high-resolution photos'/>
                    <img className={styles.scanner} src={require('../../assets/819e63aa7f5d8eb4a2ae911ef7e2d1bb.png')} alt="scan" />
                </div>
                <div className={styles.links}>
                    <div className={styles.nav_links}>
                        <Link to="/explore">Explore</Link>
                        <Link to="/create">Create</Link>
                        <Link to="/pricing"><img src={require('../../assets/4c2700c43830cbba7c0e8799e1c5c036.png')} alt="pricing" /></Link>
                    </div>
                    <div className={styles.authentication_links}>
                        {!isLogin && <div className={styles.login_signup_btn}>
                            <Link to="/login">Login</Link>
                            <span>/</span>
                            <Link to="/signup">Signup</Link>
                        </div>}
                        {isLogin && <div className={styles.logout_btn}>
                            <button onClick={logoutBtnHandler}>Logout</button>
                        </div>}
                    </div>
                </div>
                <div className={styles.menubar}>
                    <button onClick={hamburgerMenuHandler}>
                        <BiMenu className={styles.hamburger_menu}/>
                    </button>
                    {isVisible && <HamburgerMenu />}
                </div>
            </div>
            <div className={`${styles.categories_header}`}>
                <span>Categories</span>
                <ul>
                    <li><Link to="/category/food and drink">Food & Drink</Link></li>
                    <li><Link to="/category/">Current Events</Link></li>
                    <li><Link to="/category/">Wallpapers</Link></li>
                    <li><Link to="/category/">3D Renders</Link></li>
                    <li><Link to="/category/">Textures & Patterns</Link></li>
                    <li><Link to="/category/">Experimental</Link></li>
                    <li><Link to="/category/">Architecture</Link></li>
                    <li><Link to="/category/">Nature</Link></li>
                    <li><Link to="/category/">Business & Work</Link></li>
                    <li><Link to="/category/">Fashion</Link></li>
                    <li><Link to="/category/">Film</Link></li>
                    <li><Link to="/category/">Health & Wellnes</Link></li>
                    <li><Link to="/category/">People</Link></li>
                    <p>Featured</p>
                </ul>
            </div>
        </header>
    )
}

export default Header
