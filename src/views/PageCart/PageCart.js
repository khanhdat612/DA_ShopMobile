import React from 'react';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import AddCart from '../../components/AddCart/AddCart.js';

function PageCart() { 
    
    return (
        <CartProvider>
            <div className='container_pageandroid'>
                <div className='header'>
                    <Header />
                </div>
                <div className='add_cart'>
                        <AddCart />
                </div>
                
                <div style={{marginTop: 200}} className='footer' >
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
   
}
export default PageCart;