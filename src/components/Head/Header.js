import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "typeface-roboto";
import "./Header.scss";
// import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import AddCart from '../../components/AddCart/AddCart.js';
import ReGister from '../../views/ReGister.js';
import Login from '../../views/Login.js';
import Logo from "../../images/search.jpg";
import Cart from "../../images/cart.png";
import Menu from "../../images/menu.png";
import User from "../../images/user.png";


function Header() {
  
  const [ auth, setAuth ]=useState('');
  
  // let navigate=useNavigate();
  
  useEffect(() => {
    var auth =localStorage.getItem('username');
    setAuth(auth);
  },
    [])
  
  
  return (
      <div className='Header_all'>
        <div className='Head'>
            <div className='Head_left'>
                  <div className='Head_left_logo'></div>
                  <h3 className='Head_left_name'>MOBILE SHOP</h3>
            </div>
            <div className='Head_right'>
                <ul>
                    <li> <a href='/more'>MORE</a></li>   
                    <li> <a href='/contact'>CONTACT</a></li>   
                    <li> <a href='/account'>ACCOUNT</a></li>   
                    <li> <a href='/about'>ABOUT</a></li>   
                </ul>
            </div>
        </div>
        <div className='input'>
          <div className='input_search'>
            <input placeholder='Nhập tên sản phẩm bạn cần tìm.'/>
            <img src={Logo} width='20px' height='20px' alt="errol" />
          </div>
          <div className='listMenu'>
              <div className='listMenu_user'>
            <img src={User} width='30px' height='30px' alt="errol" />
            <div className='username'>
              {auth}
              {/* <div className='username_hover'>
                <ul>
                  <li>Thông tin tài khoản</li>
                  <li>Giỏ hàng</li>
                  <Link to="/login">Đăng xuất</Link>

                </ul>
              </div> */}

              <div className='login_register'>
                  <ul>
                    <li><Link to="/login">Đăng Nhập</Link></li>
                    <li><Link to="/register">Đăng Ký</Link></li>
                    <li><Link to="/CheckInfo">Chi tiết đơn hàng</Link></li>
                  </ul>
              </div>
            </div>
          </div>
          <Link to="/PageCart">
              <div className='listMenu_cart'>
                <img src={Cart} width='30px' height='30px' alt="errol" />
              </div>
          </Link>

          <Link to="/CheckInfo">
              <div className='listMenu_menu'>
                <img src={Menu} width='20px' height='20px' alt="errol" />
              </div>
          </Link>
          </div>
      </div>
      
      
      </div>
  )
}
export default Header;