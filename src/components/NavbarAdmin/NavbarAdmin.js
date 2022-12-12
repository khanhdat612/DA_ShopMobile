import React from 'react';
import "typeface-roboto";
import "./NavbarAdmin.scss";
import { Routes, Route, Link } from 'react-router-dom';


const NavbarAdmin = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar_list'>
                    <ul>
                        <Link to="/listProduct">
                            <li>Danh sách sản phẩm</li>
                        </Link>
                        <Link to="/listUser">
                            <li>Danh sách user</li>
                        </Link>
                        <Link to="/listOrders">
                            <li>Đơn hàng</li>
                        </Link>
                        <Link to="/orderStatus">
                            <li>Trạng thái đơn</li>
                        </Link>
                        <Link to="/logOut">
                            <li>Đăng xuất</li>
                        </Link>
                    </ul>
                </div>
             
            </div>
        </div>
    );
};

export default NavbarAdmin;