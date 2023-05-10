import "./LoginPage.scss"
import { Box, Typography, TextField, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import {LoginSocialFacebook} from "reactjs-social-login"
import {FacebookLoginButton} from "react-social-login-buttons"



function LoginPage() {
  
  return (
    <Box className='loginPage'>
      

      <Box className='form-container'>
        <form
          className='form'
        >
          <Typography
            className='login__header'
            variant='h4'
          >
            Login Admin
          </Typography>

          <button
            type='button'
            className='login__btn--otherPlatform'
          >
            <img
              className='otherPlatform-logo'
              src='https://icons-for-free.com/iconfiles/png/512/Google-1320568266385361674.png'
              alt='google login logo'
            />
            <Typography className='otherPlatform-text'>
              Continue with Google
            </Typography>
          </button>
          <LoginSocialFacebook
            appId="961053651566853"
            onResolve={(res)=>{
              console.log(res)
            }}
            onReject={(err)=>{
              console.log(err)
            }}
          >
          <FacebookLoginButton className='login__btn--otherPlatform'/>
          </LoginSocialFacebook>
          <Divider sx={{ borderColor: "#000", m: "20px 0px" }} />

          <TextField
            className='form__input'
            label='Email'
            type='email'
            name='email'
            placeholder='Enter email'
            required
          ></TextField>

          <TextField
            className='form__input'
            label='Password'
            placeholder='Password'
            required
            type='password'
            name='password'
          ></TextField>

          <Box display='flex'>
            <button
              type='submit'
              className='login__btn'
            >
              Log In
            </button>

            <Box className='login__register-forgot-password'>
              <Link
                className='register'
                to='/register'
              >
                Register
              </Link>
              <Link
                className='forgot-password'
                to='/forgot-password'
              >
                Forgot Password
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default LoginPage
