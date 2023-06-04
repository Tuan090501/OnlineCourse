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
import Spinning from "../../components/Spinning"

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


  const [users, setUsers] = useState([])
  const [searchApiData, setSearchApiData] = useState([])

  const [activeUsers, setActiveUsers] = useState([])
  const [unactiveUsers, setUnactiveUsers] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [info, setInfo] = useState({})

  const handleCellOnclick = (params) => {
    console.log(params.row)
    setInfo(params)
  }

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

  useEffect(() => {
    const fetchUsers = async () => {
      const actives = await axios.get(
        `http://localhost:8000/api/users/active/lecturer`
      )
      const rowsActive = []
      for (let i = 0; i < actives.data.length; i++) {
        rowsActive.push({
          id: actives.data[i].id,
          avatar: actives.data[i].image,
          userName: actives.data[i].email,
          email: actives.data[i].email,
          fullName: actives.data[i].first_name,
          role: actives.data[i].role,
          status: actives.data[i].status,
          gender: actives.data[i].gender,
          phone: actives.data[i].phone_number,
          address: actives.data[i].address,
        })
      }
      setActiveUsers(rowsActive)
      const unactives = await axios.get(
        `http://localhost:8000/api/users/unactive/lecturer`
      )

      const rowsUnactive = []
      for (let i = 0; i < unactives.data.length; i++) {
        rowsUnactive.push({
          id: unactives.data[i].id,
          avatar: unactives.data[i].image,
          userName: unactives.data[i].email,
          email: unactives.data[i].email,
          fullName: unactives.data[i].first_name,
          role: unactives.data[i].role,
          status: unactives.data[i].status,
          gender: unactives.data[i].gender,
          phone: unactives.data[i].phone_number,
          address: unactives.data[i].address,
        })
      }

      setUnactiveUsers(rowsUnactive)
      const data = await axios.get("http://localhost:8000/api/users")
      const rows = []
      for (let i = 0; i < data.data.length; i++) {
        rows.push({
          id: data.data[i].id,
          avatar: data.data[i].image,
          userName: data.data[i].email,
          email: data.data[i].email,
          fullName: data.data[i].first_name,
          role: data.data[i].role,
          status: data.data[i].status,
          gender: data.data[i].gender,
          phone: data.data[i].phone_number,
          address: data.data[i].address,
        })
      }
      console.log(activeUsers)
      console.log(unactiveUsers)
      setUsers(rows)
      setSearchApiData(rows)
    }
    fetchUsers()
  }, [])

  const handleUpdateStatus = async (params) => {
    handleCloseActiveDialog()
    handleCloseUnactiveDialog()
    setIsLoading(true)
    const { data } = await axios.put(
      `http://localhost:8000/api/users/${info.id}`,
      {
        status: info.row.status === 1 ? 0 : 1,
      }
    )

    if (data) {
      const activeUserList = await axios.get(
        "http://localhost:8000/api/users/active/lecturer"
      )
      console.log(activeUserList.data)
      const unactiveUserList = await axios.get(
        "http://localhost:8000/api/users/unactive/lecturer"
      )
      console.log(unactiveUserList.data)
      setActiveUsers(activeUserList.data)
      setUnactiveUsers(unactiveUserList.data)
      setIsLoading(false)
    }
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
      field: "userName",
      headerName: "User name",
      width: 200,
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
      field: "fullName",
      headerName: "Full name",
      width: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
      headerAlign: "center",
      align: "center",

      renderCell: (params) => <Typography>{`${params.value}`} </Typography>,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <button
          className={`${params.value === 1 ? "active" : ""}-status`}
          onClick={() => {
            if (params.value !== 1) {
              handleOpenUnactiveDialog()
            } else {
              handleOpenActiveDialog()
            }
          }}
        >
          {`${params.value === 1 ? "active" : "unactive"}`}
        </button>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <IconButton
            className='detail-user__btn'
            // onClick={handleOpen}
          >
            <AccountBoxOutlinedIcon />
          </IconButton>
        </Box>
      ),
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

      {isLoading === true ? (
        <Spinning />
      ) : (
        <Routes>
          {["/", "lecturer-list"].map((path) => (
            <Route
              path={path}
              element={
                <Box className='manage-wrapper'>
                  <DataGrid
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
      )}

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
