import "./Manage.scss"
import {
  Box,
  Avatar,
  IconButton,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material"
import SearchBar from "../../components/SearchBar/SearchBar"
import { DataGrid } from "@mui/x-data-grid"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"

import { Link, Route, Routes } from "react-router-dom"
import { useState } from "react"
import UserDetail from "../../components/UserDetail/UserDetail"

const optionListBtns = [
  {
    text: "Course",
    path: "/manage-lecturer/lecturer-list",
  },
  {
    text: "Pending",
    path: "/manage-lecturer/pending-list",
  },
]

function ManageLecturer() {
  const [active, setActive] = useState(optionListBtns[0])
  const [openLecturerDetailModal, setOpenLecturerDetailModal] = useState(false)
  const [openUnactiveDialog, setOpenUnactiveDialog] = useState(false)

  const handleOpenCourseDetailModal = () => {
    setOpenLecturerDetailModal(true)
  }

  const handleCloseCourseDetailModal = () => {
    setOpenLecturerDetailModal(false)
  }

  const handleOpenUnactiveDialog = () => {
    setOpenUnactiveDialog(true)
  }
  const handleCloseUnactiveDialog = () => {
    setOpenUnactiveDialog(false)
  }

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 90,
      renderCell: (image) => (
        <Avatar
          alt='avatar user'
          src={image.value}
        />
      ),
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "fullName",
      headerName: "Full name",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => (
        <Typography className='email'>{params.value}</Typography>
      ),
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Typography
          className={`${
            params.value.toLowerCase() === "active" ? "active" : ""
          }-status`}
          onClick={() => {
            if (params.value.toLowerCase() !== "active") {
              handleOpenUnactiveDialog()
            }
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <Box>
          <IconButton
            className='detail-user__btn'
            onClick={handleOpenCourseDetailModal}
          >
            <AccountBoxOutlinedIcon />
          </IconButton>
        </Box>
      ),
    },
  ]

  const rows = [
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "active",
    },
  ]

  const rowsPendingList = [
    {
      id: 1,
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
      firstName: "Filippo",
      lastName: "Inzaghi",
      fullName: "Filippo Inzaghi",
      email: "inzaghi@gmail.com",
      type: "user",
      status: "unactive",
    },
  ]

  return (
    <Box className='manage-page'>
      <Box className='option-list'>
        {optionListBtns.map((item) => (
          <Link
            className={`option-list__btn  ${active === item && "active"} `}
            onClick={() => {
              setActive(item)
            }}
            to={item.path}
          >
            {item.text} List
          </Link>
        ))}
      </Box>

      <Box className='searchBar-wrapper'>
        <SearchBar placeholder='Search lecturer by name or email' />
      </Box>

      <Routes>
        {["/", "lecturer-list"].map((path) => (
          <Route
            path={path}
            element={
              <Box className='manage-wrapper'>
                <DataGrid
                  rowHeight={60}
                  className='manage-table'
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  disableRowSelectionOnClick
                  checkboxSelection
                />
              </Box>
            }
          />
        ))}

        <Route
          path='/pending-list'
          element={
            <Box className='manage-wrapper pending-list'>
              <DataGrid
                rowHeight={60}
                className='manage-table'
                rows={rowsPendingList}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                checkboxSelection
              />
            </Box>
          }
        ></Route>
      </Routes>

      <Modal
        open={openLecturerDetailModal}
        onClose={handleCloseCourseDetailModal}
        className='modal'
      >
        <UserDetail
          handleClose={handleCloseCourseDetailModal}
          data={{
            type: "Lecturer",
            avatar:
              "https://i.pinimg.com/564x/1e/9f/f2/1e9ff2696ac4bc4baba1657264d692a7.jpg",

            fullName: "What the fuck is this?",
            email: "whatthefuckisthis@gmail.com",
          }}
        />
      </Modal>

      <Dialog
        open={openUnactiveDialog}
        onClose={handleCloseUnactiveDialog}
        className='dialog'
      >
        <DialogTitle className='dialog-title'>
          <ErrorOutlineOutlinedIcon className='icon--warn' />
        </DialogTitle>

        <DialogContent>
          <DialogContentText className='text'>
            Approve this course ?
          </DialogContentText>
        </DialogContent>

        <DialogActions className='dialog-actions'>
          <button
            className='approve-btn'
            onClick={handleCloseUnactiveDialog}
          >
            OK
          </button>
          <button
            className='cancel-btn'
            onClick={handleCloseUnactiveDialog}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ManageLecturer
