import { Box, Avatar, IconButton, Typography, Modal } from "@mui/material"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./Manage.scss"
import { DataGrid } from "@mui/x-data-grid"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useState } from "react"
import UserDetail from "../../components/UserDetail/UserDetail"



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

function ManageUser() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
      renderCell: () => <Typography className='active-status'>Active</Typography>,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <Box>
          <IconButton className='edit-user__btn' onClick={handleOpen}>
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton className='remove-user__btn'>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      ),
    },
  ]

  return (
    <Box className='manage-page'>
      <Box className='create-container'>
        <button className='create-btn'>Create User</button>
      </Box>

      <Box className='searchBar-wrapper'>
        <SearchBar placeholder='Search user by name or email' />
      </Box>

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
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        className='modal'
      >
        <UserDetail handleClose={handleClose} data={{
          type:'Lecturer',
          avatar:"https://i.pinimg.com/564x/1e/9f/f2/1e9ff2696ac4bc4baba1657264d692a7.jpg",

          fullName:'What the fuck is this?',
          email:'whatthefuckisthis@gmail.com'
        }}/>
      </Modal>
    </Box>
  )
}

export default ManageUser
