import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './HamburgerMenu.css';

import { BsTwitter } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import { RiArrowUpSFill } from 'react-icons/ri';
import { firebaseActions } from '../../store/AuthSlice';


const HamburgerMenu = () => {
  const [isManageBtnClicked, setIsManageBtnHandler] = useState(false);
  const [isCategoryBtnClicked, setIsCategoryBtnClicked] = useState(false);
  const [isPagesBtnClicked, setIsPagesBtnClicked] = useState(false);

  const isLogin = useSelector(state => state.firebaseAuth.isLogin);
  const dispatch = useDispatch();

  const manageBtnHandler = () => {
    setIsManageBtnHandler(!isManageBtnClicked);
  };

  const CategoryBtnhandler = () => {
    setIsCategoryBtnClicked(!isCategoryBtnClicked);
  };

  const pagesBtnHandler = () => {
    setIsPagesBtnClicked(!isPagesBtnClicked);
  };

  const logoutBtnHandler = () => {
    dispatch(firebaseActions.checkAuthentication(''));
  }

  return (
    <div className='hamburgerMenubar'>
      <ul className="all_menu_links">
        <li onClick={manageBtnHandler}>MANAGE <span><RiArrowDownSFill className='down_arrow' /></span>
          <ul className={`${!isManageBtnClicked ? 'hidden' : ''}`}>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Link to={'/purchase'}>Purchases</Link></li>
            <li><Link to={'/favorites'}>Favorites</Link></li>
            <li><Link to={'/invoice'}>Invoices</Link></li>
          </ul>
        </li>
        <li onClick={CategoryBtnhandler}>CATERGORIES <span><RiArrowDownSFill className='down_arrow' /></span>
          <ul className={`${!isCategoryBtnClicked ? 'hidden' : ''}`}>
            <li><Link to={'/category/food and drink'}>Food & Drink</Link></li>
            <li><Link to={'/'}>Texture</Link></li>
            <li><Link to={'/'}>Mountain</Link></li>
            <li><Link to={'/'}>Portrait</Link></li>
          </ul>
        </li>
        <li onClick={pagesBtnHandler}>PAGES <span><RiArrowDownSFill className='down_arrow' /></span>
          <ul className={`${!isPagesBtnClicked ? 'hidden' : ''}`}>
            <li><Link to={'/explore'}>Stock photos</Link></li>
            <li><Link to={'/license'}>License</Link></li>
            <li><Link to={'/pricing'}>Pricing</Link></li>
            <li><Link to={'/create'}>Create</Link></li>
          </ul>
        </li>
      </ul>

      <div className="social_links">
        <Link to={'/'}><BsTwitter /></Link>
        <Link to={'/'}><GrMail /></Link>
        <Link to={'/'}><BsInstagram /></Link>
      </div>

      <div className="basic_links">
        <Link to={'/terms&condition'}>Terms & Conditions</Link>
        <Link to={'/privacy-policy'}>Privacy Policy</Link>
        <Link to={'/license'}>Licensing agreement</Link>
        <Link to={'/'}>Sub-processors</Link>
        <Link to={'/'}><svg width='19' height='10' viewBox='0 0 19 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 1.66667C0 0.747396 0.834683 0 1.86131 0H7.44526H8.84124H9.30657H16.7518C17.7785 0 18.6131 0.747396 18.6131 1.66667V8.33333C18.6131 9.2526 17.7785 10 16.7518 10H9.30657H8.84124H7.44526H1.86131C0.834683 10 0 9.2526 0 8.33333V1.66667ZM9.30657 1.66667V8.33333H16.7518V1.66667H9.30657ZM5.1855 2.91406C5.09244 2.72656 4.88304 2.60417 4.65328 2.60417C4.42353 2.60417 4.21413 2.72656 4.12107 2.91406L2.25975 6.66406C2.12888 6.92708 2.26266 7.23437 2.5564 7.35156C2.85014 7.46875 3.19332 7.34896 3.32419 7.08594L3.58303 6.5625H5.72354L5.98238 7.08594C6.11325 7.34896 6.45643 7.46615 6.75017 7.35156C7.04391 7.23698 7.17478 6.92708 7.04682 6.66406L5.1855 2.91406ZM4.65328 4.40625L5.20586 5.52083H4.10071L4.65328 4.40625ZM13.0292 2.60417C13.3491 2.60417 13.6109 2.83854 13.6109 3.125V3.22917H14.8905H15.3558C15.6758 3.22917 15.9375 3.46354 15.9375 3.75C15.9375 4.03646 15.6758 4.27083 15.3558 4.27083H15.2977L15.2511 4.38802C14.9923 5.02344 14.5997 5.60156 14.0995 6.09115C14.1256 6.10677 14.1518 6.11979 14.178 6.13281L14.7276 6.42708C15.0039 6.57552 15.0912 6.89583 14.9283 7.14062C14.7655 7.38542 14.4048 7.46615 14.1314 7.32031L13.5818 7.02604C13.4509 6.95573 13.3258 6.88281 13.2008 6.80469C12.8925 7 12.5639 7.16927 12.212 7.3099L12.1073 7.35156C11.8135 7.46875 11.4703 7.34896 11.3395 7.08594C11.2086 6.82292 11.3424 6.51562 11.6361 6.39844L11.7408 6.35677C11.927 6.28125 12.1073 6.19792 12.2789 6.10156L11.924 5.78385C11.6972 5.58073 11.6972 5.25 11.924 5.04687C12.1509 4.84375 12.5202 4.84375 12.7471 5.04687L13.1717 5.42708L13.1862 5.4401C13.5469 5.09896 13.8406 4.70312 14.0529 4.26823H13.0292H10.9352C10.6153 4.26823 10.3536 4.03385 10.3536 3.7474C10.3536 3.46094 10.6153 3.22656 10.9352 3.22656H12.4475V3.1224C12.4475 2.83594 12.7093 2.60156 13.0292 2.60156V2.60417Z' fill='white' />
        </svg> English</Link>
        <RiArrowDownSFill className='language_selector_icon' />
      </div>

      <span className='hamburger_line' />
      {!isLogin && <div className='auth_links'>
        <Link to={'/login'}>Login</Link>
        <span>/</span>
        <Link to={'/signup'}>Sign up</Link>
      </div>}

      {isLogin && <div className='auth_logout'>
        <button onClick={logoutBtnHandler}>Logout</button>
      </div>}
      {!isLogin && <p>New to AiArts? Sign up <Link to='/signup'>for free</Link></p>}

      <RiArrowUpSFill className='up_arrow' />
    </div>
  )
};

export default HamburgerMenu;