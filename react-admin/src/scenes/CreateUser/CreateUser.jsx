import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import "./CreateUser.scss"
import axios from "axios"
import { useEffect, useState } from "react"
function CreateUser() {
  // State to storage data about provinces, cities
  const [provinces, setProvinces] = useState([])
  // State to storage data about districts of province
  const [districts, setDistricts] = useState([])
  // State to storage data about wards of district
  const [wards, setWards] = useState([])

  // get list of provinces of VietNam
  const getProvinces = async () => {
    const response = await axios({
      method: "get",
      url: "https://provinces.open-api.vn/api/",
    })

    // remove word "Tỉnh" and "Thành phố"
    const provinceNames = await response.data.map((item) => {
      let name = item.name
      if (name.includes("Thành phố")) {
        name = name.replace("Thành phố", "").trim()
      } else {
        name = name.replace("Tỉnh", "").trim()
      }
      const code = item.code
      return { name, code }
    })
    setProvinces(provinceNames)
  }

  // get list of districts of province
  const getDistricts = async (e) => {
    let provinceCode
    // get provinceCode
    provinces.forEach((item) => {
      if (item.name === e.target.value) provinceCode = item.code
    })
    // get dictricts have exact provinceCode
    const response = await axios({
      method: "get",
      url: `https://provinces.open-api.vn/api/d/`,
    })
    const districtList = response.data.filter(
      (item) => item.province_code === provinceCode
    )
    setDistricts(districtList)
    console.log(response.data)
  }

  // after having districtCode and provinceCode, get list of wards
  const getWards = async (e) => {
    let districtCode
    // get exact districtCode
    districts.forEach((item) => {
      if (item.name === e.target.value) districtCode = item.code
    })
    // get list of wards
    const response = await axios({
      method: "get",
      url: `https://provinces.open-api.vn/api/w/`,
    })

    const wardList = response.data.filter(
      (item) => item.district_code === districtCode
    )
    setWards(wardList)
  }

  // After onClick "Create" button, storage data to array, then update data to database
  const handleCreateUser = (event) => {
    event.preventDefault()
    const data = {

      email: event.target.email.value,
      password: event.target.password.value,
      user_name: event.target.username.value,
      role: event.target.role.value,
      gender: event.target.gender.value,
      phone_number: event.target.phone.value,
      image: event.target.avatar.value,
      birthday:event.target.birthday.value,
      status: 1,
      address: event.target.addressProvince.value + "," + event.target.addressDistrict.value + "," +  event.target.addressWard.value + "," + event.target.addressStreetHouse.value
     
    }
    console.log(data)
    axios.post(`http://localhost:8000/api/users/`,data)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getProvinces()
  }, [])

  return (
    // Inputs are username, email, password is required
    <Box className='create-user'>
      <Box className='create-user__body'>
        {/* Create user form */}
        <form
          className='create-user__form'
          autoComplete='false'
          onSubmit={handleCreateUser}
        >
          <Grid
            container
            className='create-user__form-container'
            spacing={2}
          >
            <Grid
              item
              xs={12}
              paddingBottom='0px'
            >
              <Typography variant='h5'>Account Information</Typography>
            </Grid>

            {/* Email Input */}
            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='email'>Email</label>
              <input
                required
                name='email'
                type='email'
                id='email'
                placeholder='Enter your email'
                autoComplete='off'
              ></input>
            </Grid>

            {/* Password Input */}
            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='password'>Password</label>
              <input
                required
                name='password'
                type='password'
                id='password'
                placeholder='Enter your password'
                autocomplete='new-password'
              ></input>
            </Grid>

            <Grid
              item
              xs={12}
              paddingBottom='0px'
            >
              <Typography variant='h5'>General Information</Typography>
            </Grid>

            {/* userName Input */}
            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='user-name'>User Name</label>
              <input
                required
                name='username'
                id='user-name'
                type='text'
                placeholder='Enter your user name'
              ></input>
            </Grid>

            {/* Role select */}
            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='role'>Role</label>
              <select
                id='role'
                name='role'
              >
                <option value='user'>User</option>
                <option value='lecturer'>Lecturer</option>
                <option value='admin'>Admin</option>
              </select>
            </Grid>

            {/* Gender Select */}
            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='gender'>Gender</label>
              <select
                id='gender'
                name='gender'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='phone'>Phone number</label>
              <input
                name='phone'
                type='tel'
                id='phone'
                pattern='[0-9]{10}'
                title='Ten digits code'
                placeholder='(+84)'
                autoComplete='off'
              ></input>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='phone'>Avatar</label>
              <input
                name='avatar'
                type='file'
                id='avatar'
                alt='avatar'
                accept='image/*'
              ></input>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='birthday'>Birthday</label>
              <input
                name='birthday'
                type='date'
                id='birthday'
              ></input>
            </Grid>

            <Grid
              item
              xs={12}
              paddingBottom='0px'
            >
              <Typography variant='h5'>Address Information</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='address-province'>Province</label>
              <select
                id='address-province'
                name='addressProvince'
                onChange={getDistricts}
              >
                {provinces.map((item) => (
                  <option value={`${item.name}`}>{`${item.name}`}</option>
                ))}
              </select>
            </Grid>

            <Grid
              item
              sm={6}
              xs={12}
              className='create-user__form-item'
            >
              <label for='address-district'>District</label>
              <select
                id='address-district'
                name='addressDistrict'
                onChange={getWards}
              >
                {districts.map((item) => (
                  <option value={`${item.name}`}>{`${item.name}`}</option>
                ))}
              </select>
            </Grid>

            <Grid
              item
              sm={6}
              xs={12}
              className='create-user__form-item'
            >
              <label for='address-ward'>Ward</label>
              <select
                id='address-ward'
                name='addressWard'
              >
                {wards.map((item) => (
                  <option value={`${item.name}`}>{`${item.name}`}</option>
                ))}
              </select>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='create-user__form-item'
            >
              <label for='address-street-house'>
                Street name - House number
              </label>
              <input
                type='text'
                name='addressStreetHouse'
                id='address-street-house'
                placeholder='Enter your street name, house number'
                autoComplete='off'
              ></input>
            </Grid>

            <Grid
              item
              xs={12}
              className='create-user__form-item-btn'
            >
              <button type='submit'>Create</button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default CreateUser
