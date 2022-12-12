import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/global.scss';
import App from './views/App';
import Login from './views/Login';
import ReGister from './views/ReGister';
import PageAndroid from './views/PageAndroid/Android.js';
import PageIOS from './views/PageIos/PageIos.js';
import PageCart from './views/PageCart/PageCart.js';
import UserOrder2 from './views/UserOrder/UserOrder2';
import CheckInfo from './views/CheckInfo/CheckInfo.js';
import OrderSuccess from './views/OrderSuccess/OrderSuccess';
import ProductDetail from './views/ProductDetail/ProductDetail.js';
import PageAdmin from './views/PageAdmin/PageAdmin';
import PageAdminUser from './views/PageAdminUser/PageAdminUser';
import PageAdminOrders from './views/PageAdminOrders/PageAdminOrders';
import PageAdminStatus from './views/PageAdminStatus/PageAdminStatus';
import PageAdminProfit from './views/DeletePageAdminProfit/PageAdminProfit';
import Header from './components/Head/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<ReGister/>} />
        <Route path='/android' element={<PageAndroid/>} />
        <Route path='/iphone' element={<PageIOS/>} />
        <Route path='/detail' element={<ProductDetail/>} />
        <Route path='/PageCart' element={<PageCart/>} />
        <Route path='/CheckInfo' element={<CheckInfo />} />
        <Route path='/OrderSuccess' element={<OrderSuccess />} />
        <Route path='/listProduct' element={<PageAdmin/>} />
        <Route path='/listUser' element={<PageAdminUser/>} />
        <Route path='/listOrders' element={<PageAdminOrders/>} />
        <Route path='/orderStatus' element={<PageAdminStatus/>} />
        <Route path='/logOut' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


