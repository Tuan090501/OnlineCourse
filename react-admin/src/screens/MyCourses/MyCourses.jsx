import React, { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import "./MyCourses.scss"
import Courses from "../../components/admin/Courses/Courses"
import { Box, Grid } from "@mui/material"
import Sidebar from "../../components/admin/Sidebar/Sidebar"
import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/admin/Header/Header"
import SearchBar from "../../components/admin/SearchBar/SearchBar"
import  axios  from "axios"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'

export default function MyCourses() {
 

  const navigate = useNavigate()
  const [course, setCourse] = useState([])
  useEffect(()=>{
      const fetchCourse = async ()=>{
        const id = Number(localStorage.getItem('id'))
         const data = await axios.get(`http://localhost:8000/api/lecture/${id}`)
         setCourse(data.data)
      }
      fetchCourse()
  },[])
  console.log(course)
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
          paddingLeft: "8px",
          height: "calc(100vh - 68px)",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <div
            className='myCourse_wrapper'
            style={{
              height: "100%",
            }}
          >
            {/* <Sidebar /> */}

            <div
              className='courses_wrapper'
              style={{
                marginLeft: "0px",
                backgroundColor: "#ddd",
              }}
            >
              <Box className='create-container'>
                <button
                  className='create-btn'
                  type='button'
                  onClick={() => {
                    navigate("/lecturer/create-new-course")
                  }}
                >
                  Create Course
                </button>
              </Box>

              <Box
                className='searchBar-wrapper'
                sx={{
                  marginBottom: "30px",
                }}
              >
                <SearchBar placeholder='Search course by name or description' />
              </Box>
            

              <div className='render-course'>
                <Grid
                  container
                  rowSpacing={3}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {course.map((item, index) => (
                    <Grid
                      item
                      xs={6}
                    >
                      <Link to={`/lecturer/edit-my-course/${item.id}`}>
                        <Courses
                          thumbnailCourse={item.img}
                          nameCourse={"CSS Essential Training"}
                          subtitleCourses={
                            "Cascading Style Sheets (CSS) is a stylesheet language that allows you to control the appearance of your webpages. In this hands-on course, Christina Truong demonstrates the concepts that form the foundation of CSS, explaining what you need to know to tweak existing CSS and write your own."
                          }
                        />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
