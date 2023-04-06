import { Box, Divider, Typography } from "@mui/material"
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
  useEffect(() => {
    getProvinces()
  }, [])

  return (
    <Box className='create-user'>
      <Divider />
      <Box className='create-user__body'>
        <form className='create-user__form'>
          <Grid
            container
            className='create-user__form-container'
            spacing={3}
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
              xs={6}
              className='create-user__form-item'
            >
              <label for='email'>Email</label>
              <input
                name='email'
                type='email'
                id='email'
                placeholder='Enter your email'
              ></input>
            </Grid>

            <Grid
              item
              xs={6}
              className='create-user__form-item'
            >
              <label for='password'>Password</label>
              <input
                name='password'
                type='password'
                id='password'
                placeholder='Enter your password'
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
              xs={6}
              className='create-user__form-item'
            >
              <label for='user-name'>User Name</label>
              <input
                name='username'
                id='user-name'
                type='text'
                placeholder='Enter your user name'
              ></input>
            </Grid>

            <Grid
              item
              xs={6}
              className='create-user__form-item'
            >
              <label for='role'>Role</label>
              <select
                id='role'
                name='role'
              >
                <option value='Male'>User</option>
                <option value='Female'>Lecturer</option>
                <option value='Other'>Admin</option>
              </select>
            </Grid>

            <Grid
              item
              xs={6}
              className='create-user__form-item'
            >
              <label for='gender'>Gender</label>
              <select
                id='gender'
                name='gender'
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </Grid>

            <Grid
              item
              xs={6}
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
              ></input>
            </Grid>

            <Grid
              item
              xs={6}
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
              xs={4}
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
              xs={4}
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
              xs={4}
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
              xs={4}
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
              ></input>
            </Grid>

            <button type="submit">Create</button>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default CreateUser
