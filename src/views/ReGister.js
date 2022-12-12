import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import "typeface-roboto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faCircleNotch, faFan } from '@fortawesome/free-solid-svg-icons';


function ReGister() {

  let history=useNavigate();

  const [ data, setData ]=useState({
    username2: "",
    password2: "",
  })
  const handleChange=(e) => { 
  setData({ ...data, [ e.target.name ]: e.target.value });
  }

  const handleSubMit=(event) => {
   
   event.preventDefault();
 const  sendData2 ={
     Ausername: data.username2,
     Apassword: data.password2,
   }

        axios.post('http://localhost/newCode/Register_React.php', sendData2)
          .then((result) => {
            if (result.data.Status=='Invalid')
              {
            //   window.localStorage.setItem('username', result.data.username); 
            //  window.localStorage.setItem('password', result.data.password); 
            }
            else {
              history('/')
            } 
        })
  }


  
  return (
    // <React.Fragment>
      <div className='background'>
        <div className='background_top'>
          <div className='background_line'>
          </div>
          <h3 className='background_top_name'>MOBILE SHOP</h3>
        </div>
        <div className='background_center'>
          <div className='background_center_content'></div>
          <div className='background_center_form'>
            <div className='background_center_form_total'>
              <div className='background_center_form_content'>
                <div className='background_center_form_content_login'>
                  <h1>REGISTER</h1>
                </div>
                <div className='background_center_form_content_login2'>
                  <div className='background_center_form_content_line'></div>
                  <div className='background_center_form_content_register'>
                    <span>LOGIN</span>
                    <p className='background_center_form_content_register_p'>do you have account</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubMit}>
                <div className='background_center_form_input'>
                  <div className='background_center_form_input1'>
                    <input onChange={handleChange} value={data.username2} type="text" name='username2' required="required" />
                    <span className='background_center_form_input1--span'>Username</span>
                  </div>
                  {/* <div className='background_center_form_input1'>
                    <input onChange={handleChange} value={data.email} type="text" name='email' required="required" />
                    <span className='background_center_form_input1--span'>Email</span>
                  </div> */}
                  <div className='background_center_form_input1'>
                    <input onChange={handleChange} value={data.password2} type="password" name='password2' required="required" />
                    <span className='background_center_form_input1--span'>Password</span>
                  </div>
                 
                </div>
                <div className='button_login'>
                  <button>REGISTER</button>
                </div>
              </form>
              <div className='line'>
                <span>or</span>
                <div className='line_bottom'></div>
              </div>
              <div className='facebook_google'>
                <button>
                  <FontAwesomeIcon icon={faCompactDisc} color="blue" spin />
                </button>
                <button>
                  <FontAwesomeIcon icon={faCompactDisc} color="blue" spin />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    // </React.Fragment>
  )
}
export default ReGister;