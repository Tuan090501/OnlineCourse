import { useLocation } from "react-router-dom"
import "./EditUser.scss"
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import axios from "axios"
import { useEffect, useState } from "react"

function EditUser() {
  const { state } = useLocation()
  const defaultValueUser = state.selectedRowData[0]
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  const address = defaultValueUser.address.split(",")
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

  const handleEditUser = (event) => {
    event.preventDefault()
    const province =
      event.target.addressProvince.value === undefined
        ? ""
        : event.target.addressProvince.value
    const district = event.target.addressDistrict.value
      ? event.target.addressDistrict.value
      : ""
    const ward = event.target.addressWard.value
      ? event.target.addressWard.value
      : ""
    const streetHouse = event.target.addressStreetHouse.value
      ? event.target.addressStreetHouse.value
      : ""
    const address = {
      province: province,
      district: district,
      ward: ward,
      streetHouse: streetHouse,
    }
    const data = {
      email: event.target.email.value,
      userName: event.target.username.value,
      role: event.target.role.value,
      gender: event.target.gender.value,
      phone: event.target.phone.value,
      avatar: event.target.avatar.value,
      birthday: event.target.birthday.value,
      status: event.target.status.value,
      address: address,
    }
    console.log(data)
  }

  useEffect(() => {
    getProvinces()
    console.log(address[0])
  }, [])

  return (
    <Box className='edit-user'>
      <Box className='edit-user__body'>
        <form
          className='edit-user__form'
          autoComplete='false'
          onSubmit={handleEditUser}
        >
          <Grid
            container
            className='edit-user__form-container'
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
              className='edit-user__form-item'
            >
              <label for='email'>Email</label>
              <input
                defaultValue={defaultValueUser.email}
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
              paddingBottom='0px'
            >
              <Typography variant='h5'>General Information</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className='edit-user__form-item'
            >
              <label for='user-name'>User Name</label>
              <input
                defaultValue={defaultValueUser.userName}
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
              className='edit-user__form-item'
            >
              <label for='role'>Role</label>
              <select
                id='role'
                name='role'
                defaultValue={defaultValueUser.role}
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
              className='edit-user__form-item'
            >
              <label for='gender'>Gender</label>
              <select
                id='gender'
                name='gender'
                defaultValue={defaultValueUser.gender}
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
              className='edit-user__form-item'
            >
              <label for='phone'>Phone number</label>
              <input
                defaultValue={defaultValueUser.phone}
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
              className='edit-user__form-item'
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
              className='edit-user__form-item'
            >
              <label for='status'>Status</label>
              <select
                id='status'
                name='status'
              >
                <option value='active'>Active</option>
                <option value='unactive'>Unactive</option>
              </select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className='edit-user__form-item'
            >
              <label for='birthday'>Birthday</label>
              <input
                defaultValue={defaultValueUser.birthday}
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
              className='edit-user__form-item'
            >
              <label for='address-province'>Province</label>
              <select
                defaultValue={address[0]}
                id='address-province'
                name='addressProvince'
                onChange={getDistricts}
              >
                {provinces.map((item) =>
                  item.name === address[0] ? (
                    <option
                      selected
                      value={`${item.name}`}
                    >{`${item.name}`}</option>
                  ) : (
                    <option value={`${item.name}`}>{`${item.name}`}</option>
                  )
                )}
              </select>
            </Grid>

            <Grid
              item
              sm={6}
              xs={12}
              className='edit-user__form-item'
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
              className='edit-user__form-item'
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
              className='edit-user__form-item'
            >
              <label for='address-street-house'>
                Street name - House number
              </label>
              <input
                defaultValue={address[3]}
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
              className='edit-user__form-item-btn'
            >
              <button type='submit'>Save</button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default EditUser
