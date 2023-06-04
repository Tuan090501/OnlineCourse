import "./LoginPage.scss"
import { Box, Typography, TextField, Divider } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons"
import { useState } from "react"
import useAuthContext from "../../context/AuthContext"
import axios from "axios"

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loginFacebook, error } = useAuthContext()

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(email, password)
    login({ email, password })
  }
  const handleFacebook = async (res,e) =>{
    const email = res.data.email
    const provider = res.provider
    const data = res.data
    loginFacebook({email,provider,data})

 }
  return (
    <Box className='loginPage'>
      <Box className='form-container'>
        <form
          className='form'
          onSubmit={handleLogin}
        >
          <Typography
            className='login__header'
            variant='h4'
          >
            Login Admin
          </Typography>
          {/* Login with Google */}
          <LoginSocialGoogle
            client_id='505216178982-lt9omdvsn0lp1a5t6rq0da7a0dkip7n0.apps.googleusercontent.com'
            scope="openid profile email"
            access_type="offline"
            onResolve={(res) => {
              console.log(res)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton className='login__btn--otherPlatform'>
              Continue with Google
            </GoogleLoginButton>
          </LoginSocialGoogle>

          {/* Login with FaceBook */}
          <LoginSocialFacebook
            appId='961053651566853'
            onResolve={handleFacebook}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton className='login__btn--otherPlatform'>
              Continue with FaceBook
            </FacebookLoginButton>
          </LoginSocialFacebook>
          <Divider sx={{ borderColor: "#000", m: "20px 0px" }} />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form__input'
            label='Email'
            type='email'
            name='email'
            placeholder='Enter your username'
            required
          ></TextField>

          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form__input'
            label='Password'
            placeholder='Enter your password'
            required
            type='password'
            name='password'
          ></TextField>

          <Typography
            sx={{
              color: "red",
            }}
          >
            {error ? error : ""}
          </Typography>

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
