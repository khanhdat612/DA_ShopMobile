import React from 'react';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminStatus.scss";

const PageAdminStatus = () => {
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdminStatus_navbar_container'>
                    <h1>TRẠNG THÁI ĐƠN HÀNG</h1>
                    <div className='PageAdminStatus_navbar_container_content'>
                        <div className='PageAdminStatus_navbar_container_content_title'>
                            <table className='table'>
                                    <tr className='tr' style={{color: "red"}}>
                                        <th>MÃ ĐƠN</th>
                                        <th>GỬI HÀNG</th>
                                        <th>NHẬN HÀNG</th>
                                       
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV001</td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA GỬI</option>
                                                <option value="saab">ĐÃ GỬI</option>
                                            </select>
                                        </td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA NHẬN</option>
                                                <option value="saab">ĐÃ NHẬN</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV001</td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA GỬI</option>
                                                <option value="saab">ĐÃ GỬI</option>
                                            </select>
                                        </td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA NHẬN</option>
                                                <option value="saab">ĐÃ NHẬN</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>NV001</td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA GỬI</option>
                                                <option value="saab">ĐÃ GỬI</option>
                                            </select>
                                        </td>
                                        <td className='td'>
                                            <select name="cars" id="cars">
                                                <option value="volvo">CHƯA NHẬN</option>
                                                <option value="saab">ĐÃ NHẬN</option>
                                            </select>
                                        </td>
                                    </tr>
                                   
                                    
                            </table>
                            <div>
                                <button>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminStatus;