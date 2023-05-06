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
<<<<<<< HEAD

  const [open, setOpen] = useState(false)

=======
>>>>>>> 177a41bc08ddcc0513ead9a63231240c2c940467
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
<<<<<<< HEAD

=======
>>>>>>> 177a41bc08ddcc0513ead9a63231240c2c940467

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get(`http://localhost:8000/api/users`)
      const rows = []
      for (let i = 0; i < 1; i++) {
        rows.push({       
          id: data.data[i].id_user,
          avatar:
            "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
          userName: "Tuan",
          email: data.data[i].email,
          fullName: data.data[i].first_name,
          role: data.data[i].role,
          status: "active",
<<<<<<< HEAD
          gender:data.data[i].gender,
          phone: data.data[i].phone_number,
    
        })
       
      }

      setUsers(rows);
      setSearchApiData(rows);
    }
    fetchUsers();
   
  }, []);
  console.log(users)
=======
          gender: "female",
          phone: "0766620266",
          birthday:'2000-08-18',
          address: {
            province: "",
            district: "",
            ward: "",
            streetHouse: "",
          },
        },
        {
          id: 2,
          avatar:
            "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
          userName: "Filippo Inzaghi",
          fullName: "what the fuck",
          email: "inzaghi@gmail.com",
          role: "User",
          status: "active",
          gender: "male",
          birthday:'',
          address: {
            province: "",
            district: "",
            ward: "",
            streetHouse: "",
          },
        },
        {
          id: 3,
          avatar:
            "https://img.a.transfermarkt.technology/portrait/big/25149-1586856473.jpg?lm=1",
          userName: "Noob",
          fullName: "NOooooob",
          gender: "other",
          email: "inzaghi@gmail.com",
          role: "User",
          status: "unactive",
          birthday:'',
          address: {
            province: "",
            district: "",
            ward: "",
            streetHouse: "",
          },
        },
      ]
      setUsers(rows)
      setSearchApiData(rows)
    }
    fetchUsers()
  }, [])

>>>>>>> 177a41bc08ddcc0513ead9a63231240c2c940467
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
