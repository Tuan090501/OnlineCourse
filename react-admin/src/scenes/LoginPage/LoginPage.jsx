import "./LoginPage.scss"
import { Box, Typography, TextField, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import { LoginSocialFacebook } from "reactjs-social-login"
import { FacebookLoginButton } from "react-social-login-buttons"
import { useState } from "react"
import useAuthContext from "../../context/AuthContext"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, error } = useAuthContext()

  const handleLogin = async (event) => {
    event.preventDefault()
    login({email,password})
    // const loginData = {
    //   email: event.target.email.value,
    //   password: event.target.password.value,
    // }
    // const { data } = await axios.post(
    //   "http://localhost:8000/api/login",
    //   loginData
    // )
    // const saveData = {
    //   user_id: data.user.id_user,
    //   role: data.user.role,
    //   token: data.authorisation.token,
    // }
    // console.log(saveData)
    // navigate("/")
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
            appId='913828763203603'
            onResolve={(res) => {
              console.log(res)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton className='login__btn--otherPlatform' />
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
