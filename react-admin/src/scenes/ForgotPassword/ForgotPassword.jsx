import { Box, TextField, Typography } from "@mui/material"
import "./ForgotPassword.scss"
function ForgotPassword() {
  return (
    <Box className='forgotPasswordPage'>
      <Box
        className='forgotPassword-img__container'
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <img
          className='forgotPassword__img'
          src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/336492149_241576661550997_2739934217323953740_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XpLGRMoblQIAX9rRk6s&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdRoWSFYadAt2wQz0QQ693POp7n0wxiOWo0h9TgmAMudSA&oe=643BB592'
          alt='forgotPassword page'
        />
      </Box>

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
