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

  const columnsPending = [
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

  const [course, setCourse] = useState([])
  const [activeCourse, setActiveCourse] = useState([])
  const [unactiveCourse, setUnactiveCourse] = useState([])

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await axios.get(`http://localhost:8000/api/course`)

      const rows = []
      const activeCoursesList = []
      const unactiveCourseList = []
      for (let i = 0; i < data.data.length; i++) {
        rows.push({
          id: data.data[i].id,
          thumbnail: data.data[i].img,
          courseName: data.data[i].course_name,
          description: data.data[i].description,
          price: data.data[i].price,
          category: data.data[i].category.category_name,
          lecturer: data.data[i].lecturer.user_name,
          status: data.data[i].status === 1 ? "active" : "unactive",
        })
        if (data.data[i].status === 1) activeCoursesList.push(rows[i])
        else unactiveCourseList.push(rows[i])

        if (i === data.data.length - 1) {
          setCourse(rows)

          console.log(course)
          setActiveCourse(activeCoursesList)
          setUnactiveCourse(unactiveCourseList)
        }
      }
    }
    fetchCourse()
  }, [])

  const onRowsSelectionHandler = async (ids) => {
    const selectedRowsData = await ids.map((id) =>
      course.find((row) => row.id === id)
    )
    setSelectedRowData(selectedRowsData)
  }

  const handleUpdateStatus = async (params) => {
    handleCloseActiveDialog()
    handleCloseUnactiveDialog()
    await axios.put(
      `http://localhost:8000/api/course/${selectedRowData[0].id}`,
      {
        status: selectedRowData[0].status === "active" ? 0 : 1,
      }
    )
    window.location.reload()
  }

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
                  onRowSelectionModelChange={(ids) =>
                    onRowsSelectionHandler(ids)
                  }
                  rowHeight={60}
                  className='manage-table'
                  rows={activeCourse}
                  columns={columnsPending}
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
            <Box className='manage-wrapper pending-list'>
              <DataGrid
                onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                rowHeight={60}
                className='manage-table'
                rows={unactiveCourse}
                columns={columnsPending}
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
