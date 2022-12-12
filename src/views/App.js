import React from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import '../components/Head/Header.scss';
import '../components/Footer/Footer.scss';
import '../components/ProductItem/ProductItem.scss';
import './Login';
import './ReGister';
import HomePage from './HomePage/HomePage.js';
import PageAndroid from './PageAndroid/Android.js';
import PageIOS from './PageIos/PageIos.js';
import PageCart from './PageCart/PageCart.js';
import PageAccessory from './PageAccessory/PageAccessory.js';
import ProductDetail from './ProductDetail/ProductDetail.js';
import Installments from '../components/Installments/Installments.js';
import OderNow from '../components/OderNow/OderNow.js';
import OrderSuccess from './OrderSuccess/OrderSuccess';
// import ProductItem from '../components/ProductItem/ProductItem.js';
// import Footer from '../components/Footer/Footer.js';
// import Header from '../components/Head/Header.js';
// import HeadAdmin from '../components/HeadAdmin/HeadAdmin.js';
import PageAdmin from './PageAdmin/PageAdmin';
import PageAdminUser from './PageAdminUser/PageAdminUser';
import PageAdminProfit from './DeletePageAdminProfit/PageAdminProfit';
import PageAdminOrders from './PageAdminOrders/PageAdminOrders';
import PageAdminStatus from './PageAdminStatus/PageAdminStatus';
// import item from '../../components/ProductItem/ProductItem.js';
import Login from './Login';
import ReGister from './ReGister';
import UserOrder2 from './UserOrder/UserOrder2.js';


function App() {
  return (
    <div>
      <HomePage />
      {/* <Header/> */}
      {/* <OrderSuccess /> */}
      {/* <Footer/> */}
      {/* <PageAndroid/> */}
      {/* <PageIOS /> */}
      {/* <HeadAdmin /> */}
      {/* <ProductItem/> */}
      {/* <ProductDetail/> */}
      {/* < OderNow /> */}
      {/* <Cart/> */}
      {/* <PageAccessory /> */}
      {/* <PageCart /> */}
      {/* <PageAdmin /> */}
      {/* <PageAdminOrders /> */}
      {/* <PageAdminStatus /> */}
      {/* <UserOrder /> */}
    </div>
        
  );
}

export default App;
