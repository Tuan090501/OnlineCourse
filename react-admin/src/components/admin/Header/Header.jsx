import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import React from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined"
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined"
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"

const logoWrapper = {
  display: {
    xs: "none !important",
    sm: "none !important",
    md: "flex !important",
  },
}

const menuBtn = {
  display: { md: "none" },
  mr: {
    sm: "20px",
  },
}
const searchBtn = {
  display: { sm: "none" },
  mr: {
    sm: "20px",
  },
}

const search = {
  flex: {
    xs: "none !important",
    sm: "3 !important",
    md: "2 !important",
  },
  position: {
    xs: "absolute",
    sm: "unset",
  },
  left: {
    xs: "-100vw",
  },
  right: {
    xs: "150vw",
  },
  margin: {
    xs: "0px 20px",
  },
}

const closeSearchBar = {
  display: {
    sm: "none",
  },
  position: "absolute",
  right: 0,
}

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

const drawer = {
  width: "100vw",
  "& .MuiDrawer-paper": {
    width: "100vw",
    boxSizing: "border-box",
  },
}

function Header() {
  const [active, setActive] = React.useState(menuItems[0])
  const [openSidebarDrawer, setOpenSidebarDrawer] = React.useState(false)
  const handleSidebarDrawerOpen = () => {
    setOpenSidebarDrawer(true)
  }
  const handleSidebarDrawerClose = () => {
    setOpenSidebarDrawer(false)
  }

  return (
    <Box
      display='flex'
      maxWidth='100vw'
    >
      {/* Header */}
      <AppBar id='header'>
        <Toolbar
          className='header__container'
          sx={{ minHeight: { xs: "68px" } }}
        >
          <IconButton
            sx={menuBtn}
            onClick={handleSidebarDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            sx={searchBtn}
            onClick={() => {
              const searchBar = document.querySelector(".search")
              searchBar.style.left = "0"
              searchBar.style.right = "0"
            }}
          >
            <SearchOutlinedIcon />
          </IconButton>
          <Box
            className='start logo__wrapper'
            sx={logoWrapper}
          >
            <Link
              to='/'
              className='logo__link'
            >
              <img
                src='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                alt='Header logo'
                className='logo__image'
              />
            </Link>
            <Typography
              variant='h6'
              component='h1'
              className='quote'
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              Học lập trình để đi làm
            </Typography>
          </Box>

          <Box
            className='center search'
            sx={search}
          >
            <IconButton
              type='button'
              className='search__btn'
            >
              <SearchOutlinedIcon />
            </IconButton>
            <InputBase
              placeholder='Find courses'
              className='search__input'
            ></InputBase>

            <IconButton
              type='button'
              className='left__btn'
              sx={closeSearchBar}
              onClick={() => {
                const searchBar = document.querySelector(".search")
                searchBar.style.left = "-500px"
                searchBar.style.right = "700px"
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Box>

          <Box className='end'>
            <Avatar
              src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88c6ac91-e30a-4c67-a92d-e8178abac9bd/de7pj29-8104cf38-1687-4b12-8d70-9080c8b4377f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4YzZhYzkxLWUzMGEtNGM2Ny1hOTJkLWU4MTc4YWJhYzliZFwvZGU3cGoyOS04MTA0Y2YzOC0xNjg3LTRiMTItOGQ3MC05MDgwYzhiNDM3N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zYi274oFcygsYUqYCdZP1_Ly4XOFE2SLDO8QtL8RI8k'
              alt='Avatar'
              className='avatar'
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar */}
      <Drawer
        sx={drawer}
        open={openSidebarDrawer}
        anchor='left'
        variant='persistent'
      >
        <Box className='drawer-sidebar-header'>
          <IconButton onClick={handleSidebarDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <Divider />
        </Box>

        <Box className='drawer-sidebar-body'>
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
          <ListItemButton className='category__item'>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>

          <Divider />

          <Link
            className='link'
            to='/login'
          >
            <ListItemButton className='category__item'>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Log out</ListItemText>
            </ListItemButton>
          </Link>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Header
