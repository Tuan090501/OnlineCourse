import { Box, Rating, Typography } from "@mui/material"
import "./CourseBox.scss"

// responsive courseBox when display in small device (<600px)

function CourseBox({
  image = "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
  title = "Learn Web development",
  author = "Phạm Trần Quốc Tiến",
  studentQuantity = 0,
  rating = 0,
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
