import React from 'react';
import "typeface-roboto";
import "./Android.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import { CartProvider } from "react-use-cart";
import { DataAndroind } from '../../services/DataAndroind';
import Productitem from '../../components/ProductItem/ProductItem.js';

function Android() { 
   
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
                    {DataAndroind.data.map((item, index) => {
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
                <div className='footer' >
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
   
   
}
export default Android;