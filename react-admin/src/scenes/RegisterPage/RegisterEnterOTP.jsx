import { Box, TextField, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Register.scss"

function RegisterEnterOTP() {
  const location = useLocation()
  const data = location.state
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate("/register")
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    console.log(data)

    const res = await axios.post("http://localhost:8000/api/register", {
      email: data.data.email,
      user_name: data.data.userName,
      password: data.data.password,
    })
    console.log(res)
    if (res) {
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
            OTP form
          </Typography>

          <Typography
            className='forgotPassword__description'
            variant='body1'
          >
            We sended OTP code to your email, please enter your OTP code to
            verify email
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
              Verify
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default RegisterEnterOTP
