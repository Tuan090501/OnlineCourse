import React from "react"
import { useState } from "react"
import "./header.scss"
import logo from "../../../assets/images/logof8.png"
import { Box, Button, IconButton, Popover, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import useAuthContext from "../../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const styleMyCourse = {
  zIndex: 9999,
  position: "absolute",
  inset: "0px 0px auto auto",
  margin: "0px",
  transform: "translate3d(-200px, 58.4px, 0px)",
}

function MyCourse() {
  const [isDivVisible, setIsDivVisible] = useState(false)

  function toggleDiv() {
    setIsDivVisible((prevIsDivVisible) => !prevIsDivVisible)
  }

  const navigate = useNavigate()

  const styleMyCourse = {
    zIndex: 9999,
    position: "absolute",
    inset: "0px 0px auto auto",
    margin: "0px",
    transform: "translate3d(-120px, 58.4px, 0px)",
    display: isDivVisible ? "block" : "none",
  }

  return (
    <div>
      <button
        className='Navbar_myLearn'
        onClick={toggleDiv}
      >
        Khóa học của tôi
      </button>
      <div
        id='tippy-37'
        style={styleMyCourse}
      >
        <ul className='Tippy-module_wrapper MyCourses_wrapper'>
          <div className='MyCourses_header'>
            <h6 className='MyCourses_heading'>Khóa học của tôi</h6>
            <a
              href=''
              className='MyCourses_view-all-btn'
            >
              Xem tất cả
            </a>
          </div>
          <div className='MyCourses_content'>
            <div className='MyCourses_course-item'>
              <button
                onClick={() => {
                  navigate("/")
                }}
              >
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </button>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
            <div className='MyCourses_course-item'>
              <a href=''>
                <img
                  src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png'
                  alt=''
                  className='MyCourses_course-thumb'
                />
              </a>
              <div className='MyCourses_course-info'>
                <h3 className='MyCourses_course-title'>
                  Xây dựng Website với ReactJS
                </h3>
                <p className='MyCourses_last-completed'>
                  Học cách đây 2 tháng trước
                </p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const { user, logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
  const handleSignUp = () => {
    navigate("/register")
  }

  const handleMoveToCart = () => {
    navigate("/cart")
  }
  return (
    <>
      <div className='header'>
        <div className='header_logo'>
          <Link to='/'>
            <img
              src={logo}
              alt=''
            />
          </Link>
          <h4 className='header_logoHeading'>Học Lập Trình Để Đi Làm</h4>
        </div>
        <div className='header_body'>
          <div>
            <div
              className='Search_wrapper'
              aria-expanded='false'
            >
              <div className='Search_searchIcon'></div>
              <input
                type='text'
                className='Search_input'
                spellcheck='false'
                placeholder='Tìm kiếm khóa học, bài viết, video, ...'
              />
            </div>
          </div>
        </div>

        <Box className='header_action'>
          <Box className='cart-wrapper'>
            <IconButton
              className='cart-btn'
              onClick={handleMoveToCart}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>

          {user ? (
            <div className='header_action'>
              <div className='navbar-actions-portal'></div>
              <div>
                <MyCourse />
              </div>
              <div>
                <div className='Navbar_actionBtn'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='bell'
                    class='svg-inline--fa fa-bell NavBar_action-icon'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 
                              354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 
                              416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 
                              354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 
                              206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 
                              493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 
                              505.3 240.1 512 224 512z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='NavBar_avatar-wrapper'>
                <div className='FallbackAvatar_avatar'>
                  <img
                    onClick={handleClick}
                    src='https://files.fullstack.edu.vn/f8-prod/user_photos/204816/62873d6d15e85.jpg'
                    alt=''
                    className='Navbar_avatar'
                  />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography
                      sx={{ p: 2 }}
                      onClick={logout}
                    >
                      Log out
                    </Typography>
                  </Popover>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
              }}
            >
              <button
                className='login-btn'
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className='signup-btn'
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
          )}
        </Box>
      </div>
    </>
  )
}

export default Header
