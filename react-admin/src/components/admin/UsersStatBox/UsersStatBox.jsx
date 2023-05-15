import { Box, Typography } from "@mui/material"
import "./UsersStatBox.scss"
import ProgressCircle from "../ProgressCircle"
function UsersStatBox({
  percentage = 0.0,
  userType = "Local",
  userQuantity = 0,
}) {
  const logo = () => {
    if (userType === "Local") {
      return "https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
    } else if (userType === "Gmail") {
      return "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png "
    } else if (userType === "Facebook") {
      return "https://cdn-icons-png.flaticon.com/512/124/124010.png"
    }
  }

  return (
    <Box className='userStatbox__wrapper'>
      <ProgressCircle percentage={percentage} />
      <Box>
        <Typography variant='h6'>{userType} Users</Typography>
        <Typography variant='body1'>{userQuantity}</Typography>
      </Box>
      <Box className='userStatbox__logo-container'>
        <img
          className='userStatbox__logo'
          src={logo()}
          alt='logo'
        ></img>
      </Box>
    </Box>
  )
}

export default UsersStatBox
