import "./Manage.scss"
import CourseDetail from "../../components/admin/CourseDetail/CourseDetail"
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
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined"
import { Link, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Spinning from "../../components/Spinning"

const optionListBtns = [
  {
    text: "Course",
    path: "/admin/manage-course/course-list",
  },
  {
    text: "Pending",
    path: "/admin/manage-course/pending-list",
  },
]

function ManageCourse() {
  const [active, setActive] = useState(optionListBtns[0])
  const [openCourseDetailModal, setOpenCourseDetailModal] = useState(false)
  const [openUnactiveDialog, setOpenUnactiveDialog] = useState(false)
  const [openActiveDialog, setOpenActiveDialog] = useState(false)

  const [selectedRowData, setSelectedRowData] = useState(null)

  const [searchApiData, setSearchApiData] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const handleOpenCourseDetailModal = () => {
    setOpenCourseDetailModal(true)
  }

  const handleCloseCourseDetailModal = () => {
    setOpenCourseDetailModal(false)
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

  const [course, setCourse] = useState([])
  const [activeCourse, setActiveCourse] = useState([])
  const [unactiveCourse, setUnactiveCourse] = useState([])
  const [info, setInfo] = useState({})

  const handleCellOnclick = (params) => {
    console.log(params)
    setInfo(params)
  }

  useEffect(() => {
    const fetchCourse = async () => {
      const actives = await axios.get(`http://localhost:8000/api/course/active`)
      const rowsActive = []
      for (let i = 0; i < actives.data.length; i++) {
        rowsActive.push({
          id: actives.data[i].id,
          thumbnail: actives.data[i].img,
          courseName: actives.data[i].course_name,
          description: actives.data[i].disciption,
          price: actives.data[i].price,
          category: actives.data[i].category.category_name,
          lecturer: actives.data[i].lecturer.user_name,
          status: actives.data[i].status,
        })
      }
      setActiveCourse(rowsActive)
      const unactives = await axios.get(
        `http://localhost:8000/api/course/unactive/`
      )

      const rowsUnactive = []
      for (let i = 0; i < unactives.data.length; i++) {
        rowsUnactive.push({
          id: unactives.data[i].id,
          thumbnail: unactives.data[i].img,
          courseName: unactives.data[i].course_name,
          description: unactives.data[i].disciption,
          price: unactives.data[i].price,
          category: unactives.data[i].category.category_name,
          lecturer: unactives.data[i].lecturer.user_name,
          status: unactives.data[i].status,
        })
      }

      setUnactiveCourse(rowsUnactive)
      const data = await axios.get("http://localhost:8000/api/course")
      const rows = []
      for (let i = 0; i < data.data.length; i++) {
        rows.push({
          id: data.data[i].id,
          thumbnail: data.data[i].img,
          courseName: data.data[i].course_name,
          description: data.data[i].disciption,
          price: data.data[i].price,
          category: data.data[i].category.category_name,
          lecturer: data.data[i].lecturer.user_name,
          status: data.data[i].status,
        })
      }

      setCourse(rows)
      setSearchApiData(rows)
    }

    fetchCourse()
  }, [])

  const handleUpdateStatus = async (params) => {
    handleCloseActiveDialog()
    handleCloseUnactiveDialog()
    setIsLoading(true)
    console.log(info.row.id + info.row.status)
    const { data } = await axios.put(
      `http://localhost:8000/api/course/${info.row.id}`,
      {
        status: info.row.status === 1 ? 0 : 1,
      }
    )
    if (data) {
      const activeUserList = await axios.get(
        "http://localhost:8000/api/course/active"
      )
      const rowsActive = []
      for (let i = 0; i < activeUserList.data.length; i++) {
        rowsActive.push({
          id: activeUserList.data[i].id,
          thumbnail: activeUserList.data[i].img,
          courseName: activeUserList.data[i].course_name,
          description: activeUserList.data[i].disciption,
          price: activeUserList.data[i].price,
          category: activeUserList.data[i].category.category_name,
          lecturer: activeUserList.data[i].lecturer.user_name,
          status: activeUserList.data[i].status,
        })
      }
      const unactiveUserList = await axios.get(
        "http://localhost:8000/api/course/unactive"
      )
      const rowsUnactive = []
      for (let i = 0; i < unactiveUserList.data.length; i++) {
        rowsUnactive.push({
          id: unactiveUserList.data[i].id,
          thumbnail: unactiveUserList.data[i].img,
          courseName: unactiveUserList.data[i].course_name,
          description: unactiveUserList.data[i].disciption,
          price: unactiveUserList.data[i].price,
          category: unactiveUserList.data[i].category.category_name,
          lecturer: unactiveUserList.data[i].lecturer.user_name,
          status: unactiveUserList.data[i].status,
        })
      }
      setActiveCourse(rowsActive)
      setUnactiveCourse(rowsUnactive)
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  const columns = [
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 90,
      renderCell: (image) => (
        <Avatar
          alt='avatar user'
          src={image.value}
        />
      ),
    },
    {
      field: "courseName",
      headerName: "Course name",
      width: 150,
    },
    {
      field: "description",
      headerName: "description",
      width: 150,
    },
    {
      field: "price",
      headerName: "price",
      width: 150,
    },
    {
      field: "lecturer",
      headerName: "lecturer",
      width: 150,
    },
    {
      field: "category",
      headerName: "category",
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
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <Box>
          <IconButton
            className='detail-user__btn'
            onClick={handleOpenCourseDetailModal}
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
        <SearchBar placeholder='Search course by name or description' />
      </Box>

      {isLoading === true ? (
        <Spinning />
      ) : (
        <Routes>
          {["/", "/course-list"].map((path) => (
            <Route
              path={path}
              element={
                <Box className='manage-wrapper'>
                  <DataGrid
                    sx={{
                      textTransform: "capitalize",
                    }}
                    rowHeight={60}
                    className='manage-table'
                    rows={activeCourse}
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
                  rows={unactiveCourse}
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

      {/* Modal mở ra khi click vào button có icon hình bút chì */}
      <Modal
        open={openCourseDetailModal}
        onClose={handleCloseCourseDetailModal}
        className='modal'
      >
        <CourseDetail
          data={{
            courseName:
              "Development responsive website with html, css,javasript",
            description:
              "This is my newest online course about front-end development. It's talk about html, css, javascript, css library like bootstrap, material UI, tailwind and Javascript library like ReactThis is my newest online course about front-end development. It's talk about html, css, javascript, css library like bootstrap, material UI, tailwind and Javascript library like React",
            price: 500,
            goals: [
              "Become master front end development skills",
              "Improve logic ability to build website ",
              "take more step to become a developer",
            ],
            requirements: [
              "Beginner",
              "no require experiences",
              "no special money",
            ],
            thumbnail:
              "https://i.pinimg.com/564x/1e/9f/f2/1e9ff2696ac4bc4baba1657264d692a7.jpg",
            previewCourseVideo:
              "https://cdn.artstation.com/p/video_sources/001/195/959/202302201959.mp4",
          }}
          handleClose={handleCloseCourseDetailModal}
        />
      </Modal>

      {/* Dialog mở ra khi click vào button Unactive ở phần status của khóa học */}
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
            Approve this course ?
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
            Unactive this course?
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

export default ManageCourse
