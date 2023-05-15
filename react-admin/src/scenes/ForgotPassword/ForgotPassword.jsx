import { Box, TextField, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import "./ForgotPassword.scss"
import { useState } from "react"
function ForgotPassword() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state
  const [error, setError] = useState("")

  const handleBackToLogin = () => {
    navigate("/login")
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    const userList = await axios.get("http://localhost:8000/api/users")
    const emailIsExist = await userList.data.filter((item, index) => {
      return item.email === e.target.email.value
    })
    console.log(emailIsExist)
    if (emailIsExist.length !== 0) {
      axios
        .post("http://localhost:8000/api/send-otp", {
          email: e.target.email.value,
        })
        .then((respone) => console.log(respone.data))
        .catch((err) => console.log(err))
      navigate("/forgot-password/enterOTP")
    } else {
      setError("The email you entered does not exist! Please enter again!")
    }
  }
  return (
    <Box className='forgotPasswordPage'>
      <Box className='form-container'>
        <form
          onSubmit={handleOnClick}
          className='form'
        >
          <Typography
            className='forgotPassword__header'
            variant='h4'
          >
            Find Your Account
          </Typography>

          {error ? (
            <Typography className='forgotPassword__description-error'>{`${error}`}</Typography>
          ) : (
            <Typography>
              Please enter your email address to search for your account.
            </Typography>
          )}

          <TextField
            className='form__input'
            label='Your Email'
            type='email'
            name='email'
            placeholder='Enter your email'
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
              Search
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default ForgotPassword
