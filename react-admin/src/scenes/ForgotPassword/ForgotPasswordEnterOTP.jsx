import { Box, TextField, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "./ForgotPassword.scss"

function ForgotPasswordEnterOTP() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate("/forgot-password")
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    console.log(e.target.codeResetPassword.value)
    navigate('/forgot-password/changePassword')
  }
  return (
    <Box className='forgotPasswordPage'>
      <Box className='form-container'>
        <form
          onSubmit={handleOnClick}
          className='form'
          //   onSubmit={handleSubmit}
        >
          <Typography
            className='forgotPassword__header'
            variant='h4'
          >
            Reset Password Form
          </Typography>

          <Typography
            className='forgotPassword__description'
            variant='body1'
          >
            We sended reset code to your email, please enter your reset code
            below
          </Typography>

          <TextField
            className='form__input'
            label='Code'
            type='text'
            name='codeResetPassword'
            placeholder='Enter code'
            required
          ></TextField>

          <Box
            display='flex'
            className='forgotPassword__btn-wrapper'
          >
            <button
              type='button'
              className='cancel__btn'
              onClick={handleBackToLogin}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='forgotPassword__btn'
            >
              Reset My Password
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default ForgotPasswordEnterOTP
