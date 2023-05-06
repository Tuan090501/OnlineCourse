import "./LoginPage.scss"
import { Box, Typography, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import {LoginSocialFacebook} from "reactjs-social-login"
import {FacebookLoginButton} from "react-social-login-buttons"



function LoginPage() {
<<<<<<< HEAD
  
=======
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    console.log(data)
  }
>>>>>>> 177a41bc08ddcc0513ead9a63231240c2c940467
  return (
    <Box className='loginPage'>
      <Box
        className='login-img__container'
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <img
          className='login__img'
          src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/336492149_241576661550997_2739934217323953740_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XpLGRMoblQIAX9rRk6s&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdRoWSFYadAt2wQz0QQ693POp7n0wxiOWo0h9TgmAMudSA&oe=643BB592'
          alt='Login page'
        />
      </Box>

      <Box className='form-container'>
        <form
          className='form'
          onSubmit={handleSubmit}
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
<<<<<<< HEAD
          <FacebookLoginButton className='login__btn--otherPlatform'/>
          </LoginSocialFacebook>
          <Divider sx={{ borderColor: "#000", m: "20px 0px" }} />
=======
            <img
              src='https://cdn-icons-png.flaticon.com/512/124/124010.png'
              alt='google login logo'
              className='otherPlatform-logo'
            />
            <Typography className='otherPlatform-text'>
              Continue with Facebook
            </Typography>
          </button>
>>>>>>> 177a41bc08ddcc0513ead9a63231240c2c940467

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
