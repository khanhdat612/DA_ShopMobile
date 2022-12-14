import React from 'react';
import { useState, useEffect } from 'react';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';

import "./PageAdmin.scss";

const PageAdmin=() => {

    ///SAN PHAM
  const StorageJob = JSON.parse(localStorage.getItem('product'));
  const [ jobinput, setJobinput ]=useState('');
const [ jobs, setJobs ]=useState(StorageJob??[]);
    
    function handleSubmit() {
        setJobs(pre => {
          const newJob=[ ...pre, jobinput ]
          
            const jsonJobs=JSON.stringify(newJob)
            localStorage.setItem('product', jsonJobs)
            // localStorage.clear();
            return newJob;
        })
        setJobinput('')
    }

      /// GIA BAN
  const StorageJob2 = JSON.parse(localStorage.getItem('price'));
  const [ jobinput2, setJobinput2 ]=useState('');
const [ jobs2, setJobs2 ]=useState(StorageJob2??[]);
    
  function handleSubmit2() {
    setJobs2(pre => {
      const newJob2=[ ...pre, jobinput2 ]
      const jsonJobs2=JSON.stringify(newJob2)

        localStorage.setItem('price', jsonJobs2)
        // localStorage.clear();
      return newJob2;
    })
      setJobinput2('')
      
    }
    

      /// SO LUONG
  const StorageJob3 = JSON.parse(localStorage.getItem('quantity'));
  const [ jobinput3, setJobinput3 ]=useState('');
const [ jobs3, setJobs3 ]=useState(StorageJob3??[]);
    
  function handleSubmit3() {
    setJobs3(pre => {
      const newJob3=[ ...pre, jobinput3 ]
      const jsonJobs3=JSON.stringify(newJob3)

        localStorage.setItem('quantity', jsonJobs3)
        // localStorage.clear();
      return newJob3;
    })
      setJobinput3('')
      
    }
    

      /// PHAN LOAI
  const StorageJob4 = JSON.parse(localStorage.getItem('accessory'));
  const [ jobinput4, setJobinput4 ]=useState('');
const [ jobs4, setJobs4 ]=useState(StorageJob4??[]);
    
  function handleSubmit4() {
    setJobs4(pre => {
      const newJob4=[ ...pre, jobinput4 ]
      const jsonJobs4=JSON.stringify(newJob4)

        localStorage.setItem('accessory', jsonJobs4)
        // localStorage.clear();
      return newJob4;
    })
      setJobinput4('')
      
    }
    
    /// remove
    function handleRemove() {
      alert('a')        
    }
   
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <h1>DANH S??CH S???N PH???M</h1>
                        <div className='PageAdmin_navbar_container_content'>
                            <div className='PageAdmin_navbar_container_content_title'>
                                <table className='table'>
                                        <tr className='tr' style={{color: "red"}}>
                                            <th>T??N S???N PH???M</th>
                                            <th>GI?? B??N</th>
                                            <th>S??? L?????NG</th>
                                            <th>LO???I S???N PH???M</th>
                                        </tr>
                                        <tr className='tr'>
                                            <td className='td'>??i???n tho???i A</td>
                                            <td className='td'>10.000.000</td>
                                            <td className='td'>10</td>
                                            <td className='td'>IOS</td>
                                        </tr>
                                        <tr className='tr'>
                                            <td className='td'>??i???n tho???i B</td>
                                            <td className='td'>10.000.000</td>
                                            <td className='td'>10</td>
                                            <td className='td'>IOS</td>
                                        </tr>
                                        <tr className='tr'>
                                            <td className='td'>??i???n tho???i C</td>
                                            <td className='td'>10.000.000</td>
                                            <td className='td'>10</td>
                                            <td className='td'>IOS</td>
                                        </tr>
                                </table>
                        </div>
                                <div className='add_product_new'>
                                        <h2>TH??M S???N PH???M M???I</h2>
                                </div>
                                <table className='table_product_add' style={{ textAlign: 'center', padding:'0px 50px' }}>
                                    <tr style={{ textAlign: 'center', padding:'0px 50px' }} > T??n s???n ph???m
                                                {jobs.map((job, index) => (
                                                <td style={{ textAlign: 'center' }} key={index}>{ job}</td>
                                            ))}
                                    </tr>
                                    <tr style={{ textAlign: 'center', padding:'0px 50px' }} > Gi?? b??n
                                                {jobs2.map((job2, index) => (
                                                <td style={{ textAlign: 'center' }} key={index}>{ job2}</td>
                                            ))}
                                    </tr>
                                    <tr style={{ textAlign: 'center', padding:'0px 50px' }} > S??? l?????ng
                                                {jobs3.map((job3, index) => (
                                                <td style={{ textAlign: 'center' }} key={index}>{ job3}</td>
                                            ))}
                                    </tr>
                                    <tr style={{ textAlign: 'center', padding:'0px 50px' }} > Ph??n lo???i
                                                {jobs4.map((job4, index) => (
                                                <td style={{ textAlign: 'center' }} key={index}>{ job4}</td>
                                            ))}
                                    </tr>
                                    <tr className='remove_product' style={{ textAlign: 'center', padding:'0px 50px' }} > X??a
                                                {jobs.map((job, index) => (
                                                <button style={{ textAlign: 'center' }} key={index} onClick={handleRemove}>X??a</button>
                                            ))}
                                    </tr>
                                </table>
                                    <div className='product_add'>
                                        <div  className='product_add_block'>
                                            <input placeholder='Nh??p t??n s???n ph???m' value={jobinput} onChange={e => setJobinput(e.target.value)} />
                                                <button onClick={handleSubmit}>Th??m</button>
                                        </div>
                                         <div className='input_margin product_add_block'>
                                            <input placeholder='Nh??p gi?? s???n ph???m' value={jobinput2} onChange={e => setJobinput2(e.target.value)} />
                                                <button onClick={handleSubmit2}>Th??m</button>
                                        </div>
                                        <div className='input_margin product_add_block'>
                                            <input placeholder='Nh??p s??? l?????ng' value={jobinput3} onChange={e => setJobinput3(e.target.value)} />
                                                <button onClick={handleSubmit3}>Th??m</button>
                                        </div>
                                       <div className='product_add_block'>
                                            <input placeholder='Nh??p ph??n lo???i' value={jobinput4} onChange={e => setJobinput4(e.target.value)} />
                                                <button onClick={handleSubmit4}>Th??m</button>
                                        </div>
                                    </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdmin;