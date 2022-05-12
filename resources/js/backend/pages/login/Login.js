import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
import  './style.css'
// @ts-ignore
import { sendLoginCredentials } from "../../redux/actions";
import { useNavigate } from 'react-router';
const Login = () => {

  /* useDispatch from react-redux  */
  const dispatch = useDispatch();
  /* useNavigate from react-router  */
  const navigate = useNavigate();

  /* Input state initialize  */
  const [input, setInput] = useState({ email: "", password: ""});

 

  /* submitBtn onClick Handler  */
  const loginHandler = () => {
    
    //console.log(input,'input');

    /* Success Response Handler  */
    const successHandler = (response) => {
      //console.log(response);

      if (response?.data?.access_token) {

        /* set authToken to Cookies and make the expiry in 2 days */
        Cookies.set('authToken', JSON.stringify(response?.data?.access_token), { expires: 2 })

       
       /* sessionStorage.setItem(
          "authToken",
          JSON.stringify(response?.data?.access_token)
        );
        sessionStorage.setItem("authUser", JSON.stringify(response?.data?.user));*/
        
      }

      /* Redirect to dashboard */
      navigate("/admin/dashboard");
    };

    /* Error Response Handler  */
    const errorHandler = (error) => {
       console.log(error,'error');
     
    };

    /* Call dispatch for get redux  */
    dispatch(  sendLoginCredentials(input,successHandler,errorHandler)  );


  }




  return (
    <div> 
      <div id="login" className="login-form-container">
        <header>LOGIN</header>
        <fieldset>
          <div className="input-wrapper">
            <input type="text" placeholder="Enter Email"
              onChange={(e) =>
                setInput({ ...input, email: e.target.value })
              } 
            />
          </div>
          <div className="input-wrapper">
            <input type="password" placeholder="Enter Password" 
              onChange={(e) =>
                setInput({ ...input, password: e.target.value })
              } 
            />
          </div>
          <button id="submitBtn" type="button" onClick={loginHandler} >SUBMIT</button>
        </fieldset>
      </div> 
    </div>
  )
}

export default Login