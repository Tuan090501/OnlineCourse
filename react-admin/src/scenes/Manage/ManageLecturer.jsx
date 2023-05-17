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
import SearchBar from "../../components/admin/SearchBar/SearchBar"
import { DataGrid } from "@mui/x-data-grid"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"

import { Link, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import UserDetail from "../../components/admin/UserDetail/UserDetail"
import axios from "axios"

const optionListBtns = [
  {
    text: "Lecturer",
    path: "/admin/manage-lecturer/lecturer-list",
  },
  {
    text: "Pending",
    path: "/admin/manage-lecturer/pending-list",
  },
]

function ManageLecturer() {
  const [active, setActive] = useState(optionListBtns[0])
  const [openLecturerDetailModal, setOpenLecturerDetailModal] = useState(false)
  const [openUnactiveDialog, setOpenUnactiveDialog] = useState(false)
  const [openActiveDialog, setOpenActiveDialog] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null)

  const [users, setUsers] = useState([])
  const [searchApiData, setSearchApiData] = useState([])

  const [activeUsers, setActiveUsers] = useState([])
  const [unactiveUsers, setUnactiveUsers] = useState([])

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

  const handleOpenActiveDialog = () => {
    setOpenActiveDialog(true)
  }
  const handleCloseActiveDialog = () => {
    setOpenActiveDialog(false)
  }

  const handleCellOnclick = (params) => {
    console.log(params.row)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get(`http://localhost:8000/api/users`)
      const rows = []
      const activeUserList = []
      const unactiveUserList = []
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].role === "lecturer") {
          console.log(data.data[i].role)

          rows.push({
            id: data.data[i].id,
            avatar: data.data[i].image,
            userName: data.data[i].email,
            email: data.data[i].email,
            fullName: data.data[i].first_name,
            role: data.data[i].role,
            status: data.data[i].status === 1 ? "active" : "unactive",
            gender: data.data[i].gender,
            phone: data.data[i].phone_number,
            address: data.data[i].address,
          })
          let rowsLength = rows.length

          console.log(rows[rowsLength - 1])
          if (data.data[i].status === 1)
            activeUserList.push(rows[rowsLength - 1])
          else {
            unactiveUserList.push(rows[rowsLength - 1])
          }
        }
      }
      console.log(activeUserList)
      console.log(unactiveUserList)
      setActiveUsers(activeUserList)
      setUnactiveUsers(unactiveUserList)
      setUsers(rows)
      setSearchApiData(rows)
    }
    fetchUsers()
  }, [])

  const onRowsSelectionHandler = async (ids) => {
    const selectedRowsData = await ids.map((id) =>
      users.find((row) => row.id === id)
    )
    setSelectedRowData(selectedRowsData)
    console.log(selectedRowData)
  }

  const handleUpdateStatus = async (params) => {
    console.log(selectedRowData)
    handleCloseActiveDialog()
    handleCloseUnactiveDialog()
    await axios.put(
      `http://localhost:8000/api/users/${selectedRowData[0].id}`,
      {
        status: selectedRowData[0].status === "active" ? 0 : 1,
      }
    )
    window.location.reload()
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
        <button
          className={`${
            params.value.toLowerCase() === "active" ? "active" : ""
          }-status`}
          onClick={() => {
            if (params.value.toLowerCase() !== "active") {
              handleOpenUnactiveDialog()
            } else {
              handleOpenActiveDialog()
            }
          }}
        >
          {params.value}
        </button>
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
                  onRowSelectionModelChange={(ids) =>
                    onRowsSelectionHandler(ids)
                  }
                  rowHeight={60}
                  className='manage-table'
                  rows={activeUsers}
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
                  onCellClick={handleCellOnclick}
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
                onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                rowHeight={60}
                className='manage-table'
                rows={unactiveUsers}
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
                onCellClick={handleCellOnclick}
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
            Active this lecturer?
          </DialogContentText>
        </DialogContent>

        <DialogActions className='dialog-actions'>
          <button
            className='approve-btn'
            onClick={handleUpdateStatus}
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

      <Dialog
        open={openActiveDialog}
        onClose={handleCloseActiveDialog}
        className='dialog'
      >
        <DialogTitle className='dialog-title'>
          <ErrorOutlineOutlinedIcon className='icon--warn' />
        </DialogTitle>

        <DialogContent>
          <DialogContentText className='text'>
            Unactive this lecturer?
          </DialogContentText>
        </DialogContent>

        <DialogActions className='dialog-actions'>
          <button
            className='approve-btn'
            onClick={handleUpdateStatus}
          >
            OK
          </button>
          <button
            className='cancel-btn'
            onClick={handleCloseActiveDialog}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ManageLecturer
