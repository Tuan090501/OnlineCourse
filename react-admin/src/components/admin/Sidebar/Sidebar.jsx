import {
  Box,
  List,
  Typography,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material"
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined"
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined"
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import "./Sidebar.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useAuthContext from "../../../context/AuthContext"
import axios from "axios"
const menuItems = [
  {
    path: "/admin",
    icon: <WidgetsOutlinedIcon />,
    text: "Dashboard",
  },
  {
    path: "/admin/manage-user",
    icon: <GroupOutlinedIcon />,
    text: "Manage User",
  },
  {
    path: "/admin/manage-lecturer",
    icon: <CastForEducationOutlinedIcon />,
    text: "Manage Lecturer",
  },
  {
    path: "/admin/manage-course",
    icon: <DevicesOutlinedIcon />,
    text: "Manage Course",
  },
  {
    path: "/admin/manage-category",
    icon: <CategoryOutlinedIcon />,
    text: "Manage Category",
  },
]

const meneLecturerItems = [
  {
    path: "/lecturer",
    icon: <WidgetsOutlinedIcon />,
    text: "Dashboard",
  },
  {
    path: "/lecturer/my-course",
    icon: <DevicesOutlinedIcon />,
    text: "My Courses",
  },
]

const sidebar = {
  display: {
    xs: "none",
    md: "block",
  },
}

function Sidebar() {
  // console.log(window.localStorage.getItem())
  const [active, setActive] = useState(menuItems[0])
  const { user, logout } = useAuthContext()
  const [users,setUsers] = useState([])

  useEffect(()=>{
 
        const fetchUser = async () =>{
          const id = Number(localStorage.getItem("id"))

          const data = await axios.get(`http://localhost:8000/api/users/${id}`)
          setUsers(data.data)

      }
      fetchUser()
  },[])
  return (
    <Box
      className='sidebar'
      sx={sidebar}
    >
      <Box className='sidebar__header'>
        <Avatar
          className='sidebar__avatar'
          alt='Avatar'
          src={users.image}
        />
        <Typography variant='h6'>{users.user_name}</Typography>
        <Typography
          variant='subtitle1'
          lineHeight='1rem'
        >
          {users.role}
        </Typography>
      </Box>
      <Divider />

      <Box width='100%'>
        {localStorage.getItem("role") === "admin" ? (
          <List className='category-list'>
            {menuItems.map((item) => (
              <Link
                className={`link ${active === item && "active"}`}
                to={item.path}
                onClick={(e) => {
                  setActive(item)
                }}
              >
                <ListItemButton className='category__item'>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </List>
        ) : (
          <List className='category-list'>
            {meneLecturerItems.map((item) => (
              <Link
                className={`link ${active === item && "active"}`}
                to={item.path}
                onClick={(e) => {
                  setActive(item)
                }}
              >
                <ListItemButton className='category__item'>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </Link>
            ))}
          </List>
        )}

        <Divider />

        <ListItemButton className='category__item'>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItemButton>

        <Divider />

        <button
          className='link'
          onClick={logout}
          style={{
            width: "100%",
            border: "none",
            backgroundColor: "#fff",
          }}
        >
          <ListItemButton className='category__item'>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </ListItemButton>
        </button>
      </Box>
    </Box>
  )
}

export default Sidebar
