import { Avatar, Box, Divider, Typography, Modal } from "@mui/material"
import "./UserDetail.scss"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

function UserDetail({ data, handleClose }) {
  const [openImageModal, setOpenImageModal] = useState(false)

  const handleOpenImageModal = () => {
    setOpenImageModal(true)
  }

  const handleCloseImageModal = () => {
    setOpenImageModal(false)
  }

  return (
    <Box className='user-detail'>
      <Box className='user-detail__header'>
        <Typography
          variant='h6'
          className='user-detail__title'
        >
          {data.type} Detail
        </Typography>
        <button
          className='close-btn'
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </Box>

      <Divider />

      <Box className='user-detail__body'>
        <Box width='100%'>
          <Avatar
            onClick={handleOpenImageModal}
            alt={`${data.type} avatar`}
            src={`${data.avatar}`}
            className='user-detail__avatar'
          />

          <Modal
            open={openImageModal}
            onClose={handleCloseImageModal}
            className='modal'
          >
            <Avatar
              alt={`${data.type} avatar`}
              src={`${data.avatar}`}
              className='user-detail__avatar'
            />
          </Modal>
        </Box>

        <Box className='user-detail__info-wrapper'>
          <Typography className='user-detail__info-title'>user type</Typography>
          <Typography className='user-detail__info-content'>
            {data.type}
          </Typography>
        </Box>

        <Box className='user-detail__info-wrapper'>
          <Typography className='user-detail__info-title'>full name</Typography>
          <Typography className='user-detail__info-content'>
            {data.fullName}
          </Typography>
        </Box>

        <Box className='user-detail__info-wrapper'>
          <Typography className='user-detail__info-title'>email</Typography>
          <Typography className='user-detail__info-content'>
            {data.email}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box className='user-detail__footer'>
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

export default UserDetail
