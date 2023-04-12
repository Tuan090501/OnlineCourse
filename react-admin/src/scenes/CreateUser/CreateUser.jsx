import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import "./CreateUser.scss"
import axios from "axios"
import { useEffect, useState } from "react"
function CreateUser() {
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  const getProvinces = async () => {
    const response = await axios({
      method: "get",
      url: "https://provinces.open-api.vn/api/",
    })

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

  const getDistricts = async (e) => {
    let provinceCode
    provinces.forEach((item) => {
      if (item.name === e.target.value) provinceCode = item.code
    })

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

  const getWards = async (e) => {
    let districtCode
    districts.forEach((item) => {
      if (item.name === e.target.value) districtCode = item.code
    })

    const response = await axios({
      method: "get",
      url: `https://provinces.open-api.vn/api/w/`,
    })

    const wardList = response.data.filter(
      (item) => item.district_code === districtCode
    )
    setWards(wardList)
  }

  const handleCreateUser = (event) => {
    event.preventDefault()
    let address
    if (
      event.target.addressProvince.value === "Hà Nội" &&
      event.target.addressDistrict.value === "" &&
      event.target.addressWard.value === "" &&
      event.target.addressStreetHouse.value === ""
    ) {
      address = ""
    } else {
      address =
        event.target.addressStreetHouse.value +
        ", " +
        event.target.addressWard.value +
        ", " +
        event.target.addressDistrict.value +
        ", " +
        event.target.addressProvince.value
    }
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      userName: event.target.username.value,
      role: event.target.role.value,
      gender: event.target.gender.value,
      phone: event.target.phone.value,
      avatar: event.target.avatar.value,
      status: "active",
      address: address,
    }
    console.log(data)
  }

  useEffect(() => {
    getProvinces()
  }, [])

  return (
    <Box className='create-user'>
      <Box className='create-user__body'>
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
