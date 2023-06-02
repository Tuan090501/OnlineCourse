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
import { useState } from "react"
import useAuthContext from "../../context/AuthContext"

const menuItems = [
  {
    path: "/",
    icon: <WidgetsOutlinedIcon />,
    text: "Dashboard",
  },
  {
    path: "/manage-user",
    icon: <GroupOutlinedIcon />,
    text: "Manage User",
  },
  {
    path: "/manage-lecturer",
    icon: <CastForEducationOutlinedIcon />,
    text: "Manage Lecturer",
  },
  {
    path: "/manage-course",
    icon: <DevicesOutlinedIcon />,
    text: "Manage Course",
  },
  {
    path: "/manage-category",
    icon: <CategoryOutlinedIcon />,
    text: "Manage Category",
  },
]

const sidebar = {
  display: {
    xs: "none",
    md: "block",
  },
}

function Sidebar() {
  const [active, setActive] = useState(menuItems[0])
  const {user,logout} = useAuthContext()
  return (
    <Box
      className='sidebar'
      sx={sidebar}
    >
      <Box className='sidebar__header'>
        <Avatar
          className='sidebar__avatar'
          alt='Avatar'
          src='
          https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88c6ac91-e30a-4c67-a92d-e8178abac9bd/de7pj29-8104cf38-1687-4b12-8d70-9080c8b4377f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4YzZhYzkxLWUzMGEtNGM2Ny1hOTJkLWU4MTc4YWJhYzliZFwvZGU3cGoyOS04MTA0Y2YzOC0xNjg3LTRiMTItOGQ3MC05MDgwYzhiNDM3N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zYi274oFcygsYUqYCdZP1_Ly4XOFE2SLDO8QtL8RI8k
          '
        />
        <Typography variant='h6'>Im noob master</Typography>
        <Typography
          variant='subtitle1'
          lineHeight='1rem'
        >
          Admin
        </Typography>
      </Box>
      <Divider />

      <Box width='100%'>
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
            width:"100%",
            border:"none",
            backgroundColor:"#fff"
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
