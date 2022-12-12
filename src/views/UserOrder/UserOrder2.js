import React from 'react';
import { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';
import "./UserOrder.scss";
import "../ProductDetail/ProductDetail.scss";


const UserOrder2=() => {

 const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
    }=useCart();

    // total price    
const getTotalCartValue = (items = []) => { 
  if (!items.length) return 0;
  const total = items
    .map((item) => item.priceSale * item.quantity)
    .reduce((total, n) => total + n);
  return total;
    };
    
    const totalPrice=getTotalCartValue(items);
    
    //////-----
    const { cartTotal }=useCart()
    

    const [ item, setItem ]=useState([]);
    useEffect(() => {
        fetch("http://localhost/newCode/API_USER/API_User.php")
        .then(res => res.json())
        .then(
            (result) => { 
                setItem(result);
            }
        )
    }, []);

    const [ status, setStatus ]=useState([]);
    useEffect(() => {
        fetch("http://localhost/newCode/API_STATUS/API_Status.php")
        .then(res => res.json())
        .then(
            (result) => { 
                setStatus(result);
            }
        )
    }, []);

    return (
        <div>
            <div className='product product_1'>
                <div className='product_product'>
                    <div className='product_info_title'>
                            <h2>THÔNG TIN ĐƠN HÀNG</h2>
                    </div>
                    <div className='addCart_content product_items'>
                                    {items.map((item, index) => {
                                        return (
                                                <div className='product_info_list'>
                                                    <div className='span_margin product_info_list_name'>
                                                        <span>Tên sản phẩm:{item.title} </span>
                                                    </div>
                                                    <div className='span_margin product_info_list_name'>
                                                        <span>Số lượng:{item.quantity} </span>
                                                    </div>
                                                    <div className='span_margin product_info_list_name'>
                                                        <span>Thành tiền:{item.priceSale} </span>
                                                    </div>
                                                </div>
                                        );
                                    })}
                    </div>
                        <div className='span_margin product_info_list_name'>
                            <span>Tổng thu:{totalPrice} </span>
                        </div>
                    <div className=' product_info_list'>
                         {status.map(status => (
                            <div className='span_margin product_info_list_name'>
                                <span>Trạng thái đơn hàng:
                                    {status.orderStatus1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='product product_2'>
                <div className='product_info'>
                        <div className='product_info_title'>
                            <h2>THÔNG TIN NHẬN HÀNG</h2>
                        </div>
                    <div className=' product_info_list'>
                        {item.map(item => (
                            <div className='container_user_order'> 
                                    <div className=' span_margin product_info_list_name'>
                                        <span>Mã đơn hàng: {item.id}</span>
                                    </div>
                                    <div className=' span_margin product_info_list_name'>
                                        <span>Tên người nhận: {item.name}</span>
                                    </div>
                                    <div className=' span_margin product_info_list_name'>
                                        <span>Số điện thoại nhận hàng: {item.phone}</span>
                                    </div>
                                    <div className=' span_margin product_info_list_name'>
                                        <span>Địa chỉ giao hàng:{item.address}</span>
                                    </div>
                                    <div className=' span_margin product_info_list_name'>
                                        <span>Số thẻ căn cước:{item.number}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
                {/* <div>
                        <Footer />
                </div> */}
        </div>
    );
};

export default UserOrder2;