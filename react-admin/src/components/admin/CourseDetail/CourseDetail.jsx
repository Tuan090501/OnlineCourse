import "./CourseDetail.scss"
import { Box, Typography, Divider, ListItem, List } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

function CourseDetail({ data, handleClose }) {
  return (
    <Box className='course-detail'>
      <Box className='course-detail__header'>
        <Typography
          variant='h6'
          className='course-detail__title'
        >
          Course Detail
        </Typography>
        <button
          className='close-btn'
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </Box>

      <Divider />

      <Box className='course-detail__body'>
        <Box className='course-detail__info-wrapper'>
          <Typography className='course-detail__info-title'>
            Course Name
          </Typography>
          <Typography className='course-detail__info-content'>
            {data.courseName}
          </Typography>
        </Box>

        <Box className='course-detail__info-wrapper'>
          <Typography className='course-detail__info-title'>
            Course description
          </Typography>
          <Typography className='course-detail__info-content description'>
            {data.description}
          </Typography>
        </Box>

        <Box className='course-detail__info-wrapper'>
          <Typography className='course-detail__info-title'>Price</Typography>
          <Typography className='course-detail__info-content price'>
            {data.price}$
          </Typography>
        </Box>

        <Box className='course-detail__info-wrapper no-border'>
          <Typography className='course-detail__info-title'>Goals</Typography>
          <List className='course-detail__info-list'>
            {data.goals.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Box>

        <Box className='course-detail__info-wrapper no-border'>
          <Typography className='course-detail__info-title'>
            Requirements
          </Typography>
          <List className='course-detail__info-list'>
            {data.requirements.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Box>

        <Box className='course-detail__info-wrapper no-border'>
          <Typography className='course-detail__info-title'>
            Thumbnail
          </Typography>
          <img
            src={`${data.thumbnail}`}
            alt='Course thumnail'
            className='course-detail__info-thumbnail'
          />
        </Box>

        <Box className='course-detail__info-wrapper no-border'>
          <Typography className='course-detail__info-title'>
            Preview course
          </Typography>
          <video
            className='preview-video'
            controls
            loop
            src={`${data.previewCourseVideo}`}
          ></video>
        </Box>
      </Box>

      <Box className='course-detail__footer'>
        <button
          className='close-btn'
          onClick={handleClose}
        >
          Close
        </button>
      </Box>
    </Box>
  )
}

export default CourseDetail
