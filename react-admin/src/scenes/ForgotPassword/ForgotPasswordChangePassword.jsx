import { Box, TextField, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "./ForgotPassword.scss"
import { useState } from "react"

function ForgotPasswordChangePassword() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()
  const [error, setError] = useState("")

  
  const handleBackToLogin = () => {
    navigate("/forgot-password/enterOTP")
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    if (e.target.newPassword.value !== e.target.confirmPassword.value) {
      setError(
        "Your new password and confirm password aren't same! Please enter again!"
      )
    } else {
      // change password
      // await axios.post()
      navigate("/login")
    }
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

          <TextField
            className='form__input'
            label='New Password'
            type='password'
            name='newPassword'
            placeholder='Enter new password'
            required
          ></TextField>

          <TextField
            className='form__input'
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            placeholder='Enter confirm password'
            required
          ></TextField>

          {error ? (
            <Typography className='forgotPassword__description-error'>{`${error}`}</Typography>
          ) : (
            ""
          )}

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
              Confirm
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default ForgotPasswordChangePassword
