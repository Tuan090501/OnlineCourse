import { Box, Rating, Typography } from "@mui/material"
import "./CourseBox.scss"

function CourseBox({
  image ,
  title ,
  author ,
  studentQuantity ,
  rating ,
}) {
  return (
    <Box className='courseBox'>
      <img
        className='course__image'
        src={image}
        alt='course logo'
      />

      <Box className='course__info'>
        <Typography className='course__name'>{title}</Typography>
        <Typography className='course__author'>{author}</Typography>
        <Typography className='course__quantity'>
          Total Student: {studentQuantity}
        </Typography>
        <Typography>
          <Rating
            name='read-only'
            value={rating}
            readOnly
          ></Rating>
        </Typography>
      </Box>
    </Box>
  )
}

export default CourseBox
