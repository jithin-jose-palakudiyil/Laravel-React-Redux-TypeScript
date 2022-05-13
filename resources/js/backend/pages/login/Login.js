import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie'


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

  const theme = createTheme();    
  return (

<ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) =>
                setInput({ ...input, email: e.target.value })
              } 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setInput({ ...input, password: e.target.value })
              }
            />
            
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginHandler}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
    </Container>

    </ThemeProvider>
    /*<div> 
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
    </div>*/
  )
}

export default Login