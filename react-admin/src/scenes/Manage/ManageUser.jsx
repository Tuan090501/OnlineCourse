import { Box, Avatar, IconButton, Typography, Modal } from "@mui/material"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./Manage.scss"
import { DataGrid } from "@mui/x-data-grid"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import { useState, useEffect } from "react"
import UserDetail from "../../components/UserDetail/UserDetail"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import axios from 'axios'

const optionListBtns = [
  {
    text: "User",
    path: "/manage-user/user-list",
  },
  {
    text: "Pending",
    path: "/manage-user/pending-list",
  },
]

function ManageUser() {

  const [open, setOpen] = useState(false)

  const [active, setActive] = useState(optionListBtns[0])
  const [openUserDetailModal, setOpenUserDetailModal] = useState(false)

  const [selectedRowData, setSelectedRowData] = useState(null)

  const [users, setUsers] = useState([])
  const [searchApiData, setSearchApiData] = useState([])

  const navigate = useNavigate()

  const getActiveUsers = () => {
    return users.filter((item) => item.status === "active")
  }

  const getUnactiveUsers = () => {   
    return users.filter((item) => item.status === "unactive")
  }

 
  
  

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
  }

  const handleClickToEdit = () => {
    console.log(selectedRowData)
    if (selectedRowData !== null && selectedRowData.length === 1) {
      navigate("/manage-user/admin-edit-user", {
        state: {
          selectedRowData,
        },
      })
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
        <Typography
          sx={{
            cursor: "pointer",
          }}
          className={`${
            params.value.toLowerCase() === "active" ? "active" : ""
          }-status`}
        >
          {params.value}
          
        </Typography>
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
            to='/manage-user/admin-create-user'
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
                  rows={getActiveUsers()}
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
                rowHeight={60}
                className='manage-table'
                rows={getUnactiveUsers()}
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
    </Box>
  )
}

export default ManageUser
