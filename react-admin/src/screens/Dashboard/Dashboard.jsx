import "./Dashboard.scss"
import Grid from "@mui/material/Unstable_Grid2"
import PersonIcon from "@mui/icons-material/Person"
import LineChart from "../../components/admin/LineChart"
import PolarChart from "../../components/admin/PolarChart"
import StatsBox from "../../components/admin/StatsBox/StatsBox"
import Sidebar from "../../components/admin/Sidebar/Sidebar"
// import UsersStatBox from "../../components/UsersStatBox/UsersStatBox"
import CourseBox from "../../components/admin/CourseBox/CourseBox"
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Input,
  Typography,
} from "@mui/material"
import BookIcon from "@mui/icons-material/Book"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import SearchIcon from "@mui/icons-material/Search"
import EmailIcon from "@mui/icons-material/Email"
import Select from "react-select"
import { useEffect, useState } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import StarRateIcon from "@mui/icons-material/StarRate"
import Header from "../../components/admin/Header/Header"
import SearchBar from "../../components/admin/SearchBar/SearchBar"
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid"

const month1Data = [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65]

const statsBox = [
  {
    title: "Course",
    quantity: 4,
    icon: <BookIcon />,
    backgroundImageColor: "linear-gradient(45deg,#2929a9,#0061ff)",
  },
  {
    title: "Revenue",
    quantity: "0",
    icon: <AttachMoneyIcon />,
    backgroundImageColor: "linear-gradient(45deg,#e93e0b,#f69235)",
  },
  {
    title: "Student",
    quantity: "2",
    icon: <PersonIcon />,
    backgroundImageColor: "linear-gradient(45deg,#28b648,#108c0f)",
  },
]

// select and search khoá học data pendding backend
const dataCoursesSelect = [
  { value: "c1", label: "Học HTML CSS Căn Bản Để Thực Chiến" },
  { value: "c2", label: "Học JS và JS Nâng Cao Cùng Với Tom" },
  { value: "c3", label: "Git Căn Bản Cho Người Mới Bắt Đầu" },
  { value: "c4", label: "TypeScript Không Khó - Học Cùng Với Chúng Tôi" },
]

// data demo user
const dataUsersDemo = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fullName: "Alibaba",
    email: "cuongphan2k1@gmail.com",
    price: "$10",
    boughtAt: "2017-05-2",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fullName: "Nguyen Van Tuan",
    email: "nguyenvantuan123",
    price: "$10",
    boughtAt: "2017-05-2",
  },
]

const lineChart = [{}]

function Dashboard() {
  const [valueSelectCourse, setValueSelectCourse] = useState(null)

  const handleChangeReactSelect = (e) => {
    setValueSelectCourse(e.value)
  }

  useEffect(() => {
    console.log(valueSelectCourse)

    // handle khi valueSelectCourse thay doi
  }, [valueSelectCourse])

  // handle action
  const handleClickHandleAction = (id) => {
    alert("Bạn vừa click vào id " + id)
  }

  // handle pagination
  const handlePagination = (type) => {
    alert("Bạn đang click pagination " + type)
  }

  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      const id = localStorage.getItem('id')
      const { data } = await axios.get("http://localhost:8000/api/course")
      const courses = data.filter((item,index)=>item.user_id===id)
      const rows = []

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
      }
      console.log(rows)
      setStudents(rows)
    }
    fetchStudents()
  }, [])

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
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => (
        <Typography className='email'>{params.value}</Typography>
      ),
    },

    {
      field: "price",
      headerName: "price",
      width: 250,
      renderCell: (params) => (
        <Typography>
          lll
        </Typography>
      ),
    },
    {
      field: "boughtAt",
      headerName: "Bought At",
      width: 250,
    },

    {
      field: "action",
      headerName: "Action",
      width: 170,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box>
          <IconButton className='edit-user__btn'>
            <EmailIcon />
          </IconButton>
        </Box>
      ),
    },
  ]

  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <div
        className='wp-app-content'
        style={{
          width: "calc(100vw - 250px)",
          marginLeft: "242px",
          marginTop: "68px",
          padding: "0px 10px",
        }}
      >
        <div>
          <div className='DashBoard_wrapper'>
            {/* <Sidebar /> */}
            <Box className='dashboard-container'>
              <Grid
                className='dashboard'
                container
                spacing={2}
              >
                {/* Row 1: Stat Box */}
                {statsBox.map(
                  ({ title, quantity, icon, backgroundImageColor }, index) => (
                    <Grid
                      key={index}
                      className='mtb_10'
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                    >
                      <StatsBox
                        title={title}
                        quantity={quantity}
                        icon={icon}
                        backgroundImageColor={backgroundImageColor}
                      />
                    </Grid>
                  )
                )}

                {/* code  render view select and search course */}
                <Grid
                  className='mtb_10'
                  item
                  xs={12}
                  lg={12}
                >
                  <div
                    style={{
                      width: "40%",
                    }}
                  >
                    <Select
                      onChange={handleChangeReactSelect}
                      placeholder='Vui lòng chọn khóa học của bạn'
                      options={dataCoursesSelect}
                    />
                  </div>
                </Grid>

                {/* Row 2: Chart */}
                <Grid
                  className='mtb_10'
                  item
                  xs={12}
                  lg={6}
                >
                  <LineChart month1={month1Data} />
                </Grid>

                <Grid
                  className='mtb_10'
                  item
                  xs={12}
                  lg={6}
                >
                  <LineChart month1={month1Data} />
                </Grid>
              </Grid>
              <Grid
                xs={12}
                lg={12}
              >
                <SearchBar />

                <DataGrid
                  rowHeight={60}
                  className='manage-table'
                  rows={students}
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
              </Grid>
              <Grid
                xs={12}
                lg={12}
              >
                <div className='student-review'>
                  <h3 className='py-3'>Student review</h3>
                  <div className='student-review-content'>
                    <div className='review-item'>
                      <img
                        src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='Hinh anh'
                      />
                      <div>
                        <p>
                          <strong>Tst</strong>
                          <span className='mx-2'>07/12/2021 - 3 hours ago</span>
                        </p>
                        <p>
                          Mã trên bị lỗi vì không định nghĩa đúng tên prop của
                          component. Khi định nghĩa kiểu cho prop children trong
                          interface childrenBaseLayOut, nó chỉ định rõ kiểu dữ
                          liệu cho prop đó, nhưng không định nghĩa tên của prop.
                          Do đó, khi sử dụng nó trong component BaseLayOut, bạn
                          cần phải sử dụng lại tên prop đúng với tên định nghĩa
                          trong interface childrenBaseLayOut.
                        </p>
                      </div>
                      <div>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </div>
                    </div>
                    <div className='review-item'>
                      <img
                        src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='Hinh anh'
                      />
                      <div>
                        <p>
                          <strong>Tst</strong>
                          <span className='mx-2'>07/12/2021 - 3 hours ago</span>
                        </p>
                        <p>
                          Mã trên bị lỗi vì không định nghĩa đúng tên prop của
                          component. Khi định nghĩa kiểu cho prop children trong
                          interface childrenBaseLayOut, nó chỉ định rõ kiểu dữ
                          liệu cho prop đó, nhưng không định nghĩa tên của prop.
                          Do đó, khi sử dụng nó trong component BaseLayOut, bạn
                          cần phải sử dụng lại tên prop đúng với tên định nghĩa
                          trong interface childrenBaseLayOut.
                        </p>
                      </div>
                      <div>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </div>
                    </div>
                    <div className='review-item'>
                      <img
                        src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='Hinh anh'
                      />
                      <div>
                        <p>
                          <strong>Tst</strong>
                          <span className='mx-2'>07/12/2021 - 3 hours ago</span>
                        </p>
                        <p>
                          Mã trên bị lỗi vì không định nghĩa đúng tên prop của
                          component. Khi định nghĩa kiểu cho prop children trong
                          interface childrenBaseLayOut, nó chỉ định rõ kiểu dữ
                          liệu cho prop đó, nhưng không định nghĩa tên của prop.
                          Do đó, khi sử dụng nó trong component BaseLayOut, bạn
                          cần phải sử dụng lại tên prop đúng với tên định nghĩa
                          trong interface childrenBaseLayOut.
                        </p>
                      </div>
                      <div>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </div>
                    </div>
                    <div className='review-item'>
                      <img
                        src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='Hinh anh'
                      />
                      <div>
                        <p>
                          <strong>Tst</strong>
                          <span className='mx-2'>07/12/2021 - 3 hours ago</span>
                        </p>
                        <p>
                          Mã trên bị lỗi vì không định nghĩa đúng tên prop của
                          component. Khi định nghĩa kiểu cho prop children trong
                          interface childrenBaseLayOut, nó chỉ định rõ kiểu dữ
                          liệu cho prop đó, nhưng không định nghĩa tên của prop.
                          Do đó, khi sử dụng nó trong component BaseLayOut, bạn
                          cần phải sử dụng lại tên prop đúng với tên định nghĩa
                          trong interface childrenBaseLayOut.
                        </p>
                      </div>
                      <div>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
