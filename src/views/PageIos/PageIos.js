import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { DataIos } from '../../services/DataIos';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import 'react-toastify/dist/ReactToastify.css';
import "../PageAndroid/Android.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Productitem from '../../components/ProductItem/ProductItem.js';
import AddCart from '../../components/AddCart/AddCart.js';

function PageIos() { 
    
    return (
        <CartProvider>
            <div className='container_pageandroid'>
                <div className='header'>
                    <Header />
                </div>
                <div className='android'>
                    <div className='container'>
                        <div className='container_android'>
                            <h2>IOSS</h2>
                        </div>
                    </div>
                </div>
                <div className='product_item'>
                    {DataIos.data.map((item, index) => {
                        return (
                            <Productitem
                                key={item.id}
                                picture={item.img}
                                name={item.title}
                                sale={item.priceSale}
                                money={item.price}
                                item={item}
                            />
                        )
                    })}
                </div>

                {/* <div className='add_cart'>
                        <AddCart />
                </div> */}
                
                <div className='footer' >
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
   
}
export default PageIos;