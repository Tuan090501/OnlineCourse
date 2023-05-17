import {
  Box,
  Avatar,
  IconButton,
  Typography,
  Modal,
  DialogActions,
  DialogTitle,
  Dialog,
  DialogContentText,
  DialogContent,
} from "@mui/material"
import SearchBar from "../../components/admin/SearchBar/SearchBar"
import "./Manage.scss"
import { DataGrid } from "@mui/x-data-grid"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import { useState, useEffect } from "react"
import UserDetail from "../../components/admin/UserDetail/UserDetail"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import axios from "axios"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"

const optionListBtns = [
  {
    text: "User",
    path: "/admin/manage-user/user-list",
  },
  {
    text: "Pending",
    path: "/admin/manage-user/pending-list",
  },
]

function ManageUser() {
  const [open, setOpen] = useState(false)

  const [active, setActive] = useState(optionListBtns[0])
  const [openUserDetailModal, setOpenUserDetailModal] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null)
  const [users, setUsers] = useState([])
  const [searchApiData, setSearchApiData] = useState([])

  const [openUnactiveDialog, setOpenUnactiveDialog] = useState(false)
  const [openActiveDialog, setOpenActiveDialog] = useState(false)
  const navigate = useNavigate()

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

  const [activeUsers, setActiveUsers] = useState([])
  const [unactiveUsers, setUnactivesUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get(`http://localhost:8000/api/users`)
      const rows = []
      const activeUserList = []
      const unactiveUserList = []
      for (let i = 0; i < data.data.length; i++) {
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
        if (data.data[i].status === 1) activeUserList.push(rows[i])
        else {
          unactiveUserList.push(rows[i])
        }
      }
      setActiveUsers(activeUserList)
      setUnactivesUsers(unactiveUserList)
      console.log(activeUserList)
      console.log(unactiveUserList)

      setUsers(rows)
      setSearchApiData(rows)
    }
    fetchUsers()
  }, [])

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setUsers(searchApiData)
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setUsers(filterResult)
    }
  }

  const handleOpen = () => {
    setOpenUserDetailModal(true)
  }
  const handleClose = () => {
    setOpenUserDetailModal(false)
  }

  const onRowsSelectionHandler = async (ids) => {
    const selectedRowsData = await ids.map((id) =>
      users.find((row) => row.id === id)
    )
    setSelectedRowData(selectedRowsData)
    console.log(selectedRowData)
  }

  const handleClickToEdit = () => {
    if (selectedRowData !== null && selectedRowData.length === 1) {
      navigate("/admin/manage-user/admin-edit-user", {
        state: {
          selectedRowData,
        },
      })
    }
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
      width: 170,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <IconButton
            className='edit-user__btn'
            onClick={handleClickToEdit}
          >
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton
            className='detail-user__btn'
            onClick={handleOpen}
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
        <SearchBar
          handleSearch={handleSearch}
          placeholder='Search user by name or email'
        />
        <Box className='create-container'>
          <Link
            style={{
              marginRight: "20px",
              textDecoration: "none",
              boxShadow: "none",
              fontSize: "18px",
            }}
            className='create-btn'
            type='button'
            to='/admin/manage-user/admin-create-user'
          >
            Create User
          </Link>
        </Box>
      </Box>

      <Routes>
        {["/", "user-list"].map((path, index) => (
          <Route
            path={path}
            element={
              <Box
                className='manage-wrapper'
                id='1'
              >
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
                />
              </Box>
            }
          />
        ))}

        <Route
          path='/pending-list'
          element={
            <Box
              className='manage-wrapper pending-list'
              id='2'
            >
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
              />
            </Box>
          }
        ></Route>
      </Routes>

      <Modal
        open={openUserDetailModal}
        onClose={handleClose}
        className='modal'
      >
        <UserDetail
          handleClose={handleClose}
          data={{
            role: "User",
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
            Active this user ?
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
            Unactive this user?
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

export default ManageUser
