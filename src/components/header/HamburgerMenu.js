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
        <Link to={'/'}>English</Link>
      </div>

      <span className='hamburger_line'/>
      {!isLogin && <div className='auth_links'>
        <Link to={'/login'}>Login</Link>
        <span>/</span>
        <Link to={'/signup'}>Sign up</Link>
      </div>}

      {isLogin && <div className='auth_logout'>
        <button onClick={logoutBtnHandler}>Logout</button>
      </div>}
      {!isLogin && <p>New to AiArts? Sign up <Link to='/signup'>for free</Link></p>}

      <RiArrowUpSFill className='up_arrow'/>
    </div>
  )
};

export default HamburgerMenu;