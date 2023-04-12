import Sidebar from "../components/Sidebar/Sidebar"
import Dashboard from "./Dashboard/Dashboard"
import Header from "../components/Header/Header"
import { Route, Routes } from "react-router-dom"
import ManageUser from "./Manage/ManageUser"
import ManageLecturer from "./Manage/ManageLecturer"
import ManageCourse from "./Manage/ManageCourse"
import ManageCategory from "./Manage/ManageCategory"
import { Box } from "@mui/material"
import CreateUser from "./CreateUser/CreateUser"
import EditUser from "./EditUser/EditUser"

const homePage = {
  marginTop: "68px",
  marginLeft: {
    md: "250px",
  },
  maxWidth: {
    md: "calc(100% - 250px)",
  },
  backgroundColor: "#eeeeee",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 10px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 9px 12px -36px inset",
}

function HomePage() {
  return (
    <Box
      className='content'
      sx={homePage}
    >
      <Header />
      <Sidebar />
      <Routes>
        <Route
          exact
          path='/*'
          element={<Dashboard />}
        />

        <Route
          path='/manage-user/*'
          element={<ManageUser />}
        ></Route>

        <Route
          path='/manage-user/admin-edit-user'
          element={<EditUser></EditUser>}
        ></Route>

        <Route
          path='/manage-user/admin-create-user'
          element={<CreateUser></CreateUser>}
        ></Route>

        <Route
          path='/manage-lecturer/*'
          element={<ManageLecturer />}
        ></Route>

        <Route
          path='/manage-course/*'
          element={<ManageCourse />}
        ></Route>

        <Route
          path='/manage-category'
          element={<ManageCategory />}
        ></Route>
      </Routes>
    </Box>
  )
}

export default HomePage
