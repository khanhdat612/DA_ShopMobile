import React from 'react';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminOrders.scss";

const PageAdminOrders = () => {
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdminOrders_navbar_container'>
                    <h1>DANH SÁCH ĐƠN HÀNG</h1>
                    <div className='PageAdminOrders_navbar_container_content'>
                        <div className='PageAdminOrders_navbar_container_content_title'>
                            <table className='table'>
                                    <tr className='tr' style={{color: "red"}}>
                                        <th>MÃ ĐƠN</th>
                                        <th>NGƯỜI ĐẶT</th>
                                        <th>SẢN PHẨM</th>
                                        <th>SỐ LƯỢNG</th>
                                        <th>GIÁ BÁN</th>
                                        <th>TỔNG TIỀN</th>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV001</td>
                                        <td className='td'>Nguyễn văn A</td>
                                        <td className='td'>SP A</td>
                                        <td className='td'>1</td>
                                        <td className='td'>10</td>
                                        <td className='td'>100</td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV002</td>
                                        <td className='td'>Nguyễn văn A</td>
                                        <td className='td'>SP B</td>
                                        <td className='td'>1</td>
                                        <td className='td'>20</td>
                                        <td className='td'>200</td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV003</td>
                                        <td className='td'>Nguyễn văn C</td>
                                        <td className='td'>SP C</td>
                                        <td className='td'>1</td>
                                        <td className='td'>30</td>
                                        <td className='td'>300</td>
                                    </tr>
                            </table>
                        </div>
                        <div>
                            <h1>Tổng doanh thu</h1>
                            <h1>Tổng sản phẩm bán ra</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminOrders;