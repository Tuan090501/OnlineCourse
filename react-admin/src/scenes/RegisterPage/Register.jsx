import { Box, TextField, Typography } from "@mui/material"
import "./Register.scss"
import { Link,useNavigate} from "react-router-dom"
import Grid from "@mui/material/Unstable_Grid2"
import { useState } from "react"
<<<<<<< HEAD

=======
>>>>>>> 8882ad7271c1e5ed411890d9f6d6662cbeb649a8

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

<<<<<<< HEAD


function Register() {
  const navigate = useNavigate()
  const handleRegister = (e) => {
  
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      repeatPassword: e.target.repeatPassword.value,
      user_name: e.target.username.value,
=======

function Register() {

  const [pwd, setPwd]= useState('')
  const [confirmPwd, setConfirmPwd] = useState("")
  const [error,setError] = useState('')

  const handleChangePwd = (e)=>{
    setPwd(e.target.value)
    console.log(pwd)
  }
  
  const handleChangeConfirmPwd = (e) =>{
    setConfirmPwd(e.target.value)
    
  }
  const handleRegister = (e) => {
    e.preventDefault()
    console.log(pwd,confirmPwd)
    if(pwd !== confirmPwd) setError('Password and confirm password are not the same!')
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      userName: e.target.username.value,
>>>>>>> 8882ad7271c1e5ed411890d9f6d6662cbeb649a8
      role: "user",
      gender: e.target.gender.value,
      phone: "",
      avatar: "",
      status: "active",
      address: {
        province: "",
        district: "",
        ward: "",
        streetHouse: "",
<<<<<<< HEAD
      }
    }
    navigate('/forgot-password',{state: {data}})
   
  }
=======
      },
    }
    console.log(data)
}
  

>>>>>>> 8882ad7271c1e5ed411890d9f6d6662cbeb649a8
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
                onChange={handleChangePwd}
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
                onChange={handleChangeConfirmPwd}
              ></TextField>
            </Grid>

            {/* Gender input */}
            <Grid
              item
              xs={12}
            >
              Gender
            </Grid>

            <Grid
              item
              xs={4}
            >
              <Box className='form__radio'>
                <label for='male'>Male</label>
                <input
                  type='radio'
                  name='gender'
                  id='male'
                  value='male'
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <Box className='form__radio'>
                <label for='female'>Female</label>
                <input
                  type='radio'
                  name='gender'
                  id='female'
                  value='female'
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <Box className='form__radio'>
                <label for='other'>Other</label>
                <input
                  type='radio'
                  name='gender'
                  id='other'
                  value='other'
                />
              </Box>
            </Grid>

            {/* Birthday Input */}
            <Grid
              item
              xs={12}
            >
              Birthday
            </Grid>
            <Grid
              item
              xs={4}
            >
              <select
                className='form__select'
                id='birthday-date'
                name='birthday-date'
              >
                {datesOfMonth.map((item) => (
                  <option value={item}>{`${item}`}</option>
                ))}
              </select>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <select
                className='form__select'
                id='birthday-month'
                name='birthday-month'
              >
                {monthsOfyear.map((item) => (
                  <option value={item}>{`${item}`}</option>
                ))}
              </select>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <select
                className='form__select'
                id='birthday-year'
                name='birthday-year'
              >
                {years.map((item) => (
                  <option value={item}>{`${item}`}</option>
                ))}
              </select>
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
