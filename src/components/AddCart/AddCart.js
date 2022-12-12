import React from 'react';
// import useState from 'react'
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddCart.scss";

const AddCart=() => {

   function toastRemove() {
        toast.error('Đã xóa sản phẩm !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };


    
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
    const { cartTotal } = useCart()

    if (isEmpty) return <h1 className='no_product'>Chưa có sản phẩm nào trong giỏ hàng</h1>
    return (
        <section className='cart_content'>
            <div className='cart_content'>
                    <div className='addCart_content'>
                        <h3 className='id'>Số sản phẩm trong giỏ hàng: ({totalUniqueItems}) </h3>
                            <table className='cart_table'>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='table_img'>
                                                    <img src={item.img} style={{ height: "6rem" }} alt="err" />
                                                </td>
                                                <td className='table_title'>{item.title}</td>
                                                <td className='table_price'>{item.priceSale} </td>
                                                <td className='table_quantity'>SỐ LƯỢNG {item.quantity}</td>
                                                <td className='table_btn'>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity-1)} className='btn_tru'>-</button>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity+1)} className='btn_cong'>+</button>
                                                    <div className='btn_delete' onClick={toastRemove}>
                                                        <button onClick={() => removeItem(item.id)} className='btn_remove'>Xóa</button>
                                                           <ToastContainer />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        <h3>Tổng tiền sản phẩm: {totalPrice}</h3>
                    </div>
                <div className='order_button'>
                    <button className=''>
                        Đặt hàng
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AddCart;