import { Box, TextField, Typography } from "@mui/material"
import "./Register.scss"
import { Link, useNavigate } from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"
import { useState } from "react"
import axios from "axios"

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  )

// Create a array dates contain numbers from 1 to 31
const datesOfMonth = arrayRange(1, 31, 1)
const monthsOfyear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Create a array years contain number from 1960 to 2023
const years = arrayRange(1960, 2023, 1).reverse()

function Register() {
  const navigate = useNavigate()
  const [pwd, setPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [error, setError] = useState("")
  const  [otp,setOTP] =useState('')
  const handleChangePwd = (e) => {
    setPwd(e.target.value)
    console.log(pwd)
  }

  const handleChangeConfirmPwd = (e) => {
    setConfirmPwd(e.target.value)
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(pwd, confirmPwd)
    if (pwd !== confirmPwd)
      setError("Password and confirm password are not the same!")
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      userName: e.target.username.value,

      role: "user",
      gender: "",
      phone: "",
      avatar: "",
      status: "active",
      address: {
        province: "",
        district: "",
        ward: "",
        streetHouse: "",
      },
    }
    const userList = await axios.get("http://localhost:8000/api/users")
    const emailIsExist = await userList.data.filter((item, index) => {
      return item.email === e.target.email.value
    })
    console.log(emailIsExist + emailIsExist.length)
    if (emailIsExist.length === 0) {
      const otp = axios
          .post("http://localhost:8000/api/send-otp", {
               email: e.target.email.value,
          })
          .then((response) => {
              console.log(response.data.otp);
              navigate("/register/enterOTP", 
              { state: { "data": data,
              "otp": response.data.otp } });
          })
 .catch((err) => console.log(err));
    } else {
      setError("The email you entered existed! Please use another email!")
      console.log("email exist")
    }
  }

  return (
    <Box className='registerPage'>
      <Box className='form-container'>
        <form
          className='form'
          component='form'
          onSubmit={handleRegister}
        >
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                className='register__header'
                variant='h4'
              >
                Register
              </Typography>
            </Grid>

            {/* Email Input */}
            <Grid
              item
              xs={12}
            >
              <TextField
                className='form__input'
                label='Email'
                type='email'
                name='email'
                placeholder='Enter email'
                required
              ></TextField>
            </Grid>

            {/* Username input */}
            <Grid
              item
              xs={12}
            >
              <TextField
                className='form__input'
                label='Username'
                type='text'
                name='username'
                placeholder='Enter username'
                required
              ></TextField>
            </Grid>

            {/* Password input */}
            <Grid
              item
              xs={6}
            >
              <TextField
                className='form__input'
                label='Password'
                placeholder='Password'
                required
                type='password'
                name='password'
              ></TextField>
            </Grid>

            {/* Repeat password input */}
            <Grid
              item
              xs={6}
            >
              <TextField
                className='form__input'
                label='Confirm password'
                placeholder='Confirm password'
                required
                type='password'
                name='confirmPassword'
              ></TextField>
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography
                sx={{
                  color: "red",
                }}
              >
                {error ? error : ""}
              </Typography>
            </Grid>
          </Grid>

          <Box display='flex'>
            <button
              type='submit'
              className='register__btn'
            >
              Register
            </button>

            <Box className='register__login-forgot-password'>
              <Link
                className='login'
                to='/login'
              >
                Login
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

export default Register
