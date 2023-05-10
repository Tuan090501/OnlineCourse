import { Box, TextField, Typography } from "@mui/material"
import "./ForgotPassword.scss"
function ForgotPassword() {
  return (
    <Box className='forgotPasswordPage'>
      

      <Box className='form-container'>
        <form
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
            We sended reset code to your email, please enter your reset code below
          </Typography>

          <TextField
            className='form__input'
            label='Code'
            type='text'
            name='codeResetPassword'
            placeholder='Enter code'
            required
          ></TextField>

          <Box display='flex' className='forgotPassword__btn-wrapper'>
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

export default ForgotPassword
