import "./StatsBox.scss"
import { Box, Typography, Divider } from "@mui/material"
function StatsBox({
  title,
  quantity = 0,
  icon,
  backgroundImageColor = "linear-gradient(45deg,#2929a9,#0061ff)",
}) {
  return (
    <Box
      className='statsbox-wrapper'
      sx={{
        backgroundImage: `${backgroundImageColor}`,
      }}
    >
      <Typography className='statsbox__title'>Total {title} </Typography>
      <Divider className='divider' />
      <Box className='statsbox__body'>
        <Typography variant='h5'>{quantity}</Typography>
        {icon}
      </Box>
    </Box>
  )
}

export default StatsBox
