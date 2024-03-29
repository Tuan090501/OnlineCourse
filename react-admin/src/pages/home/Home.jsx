import "./home.scss"
import Sidebar from "../../components/user/sidebar/Sidebar"
import Slider from "../../components/user/slider/SlickSlider"
import htmlcsspro from "../../assets/images/htmlcsspro.png"
import Footer from "../../components/user/footer/Footer"
import Header from "../../components/user/header/Header"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CourseItem from "../../components/user/CourseItem/CourseItem"
import useAuthContext from "../../context/AuthContext"
import { Cartcontext } from "../../context/CartContext"



const CourseList = ({ courses }) => {
  return (
    <div className='ScrollList_body'>
      <div className='index-module_row'>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </div>
  )
}

// const frontendCourses = courses.filter((course) => course.category === "frontend");
// const backendCourses = courses.filter((course) => course.category === "backend");

const Home = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = "https://embed.tawk.to/645f08f074285f0ec46b320c/1h09jlr40"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      s0.parentNode.insertBefore(s1, s0)
    })()
  }, [])
  const [data, setCourse] = useState([])
  const coursesByCategory = data.reduce((result, course) => {
    const {
      category: { category_name },
    } = course

    if (!result[category_name]) {
      result[category_name] = []
    }

    result[category_name].push(course)
    return result
  }, {})
  const categoryNames = Object.keys(coursesByCategory)

  useEffect(() => {
    const fectchCourse = async () => {
      const data = await axios.get(`http://localhost:8000/api/course`)
      setCourse(data.data)
    }

    fectchCourse()
  }, [])
  console.log(data)

  const Globalstate = useContext(Cartcontext)
  const dispatch = Globalstate.dispatch
  console.log(Globalstate)
  return (
    <div>
      <Header />

      <div className='App_withSidebar'>
        <Sidebar />

        <div className='Home_wrapper'>
          <Slider />
          <div className='ScrollList_vertical'>
            <div>
              <div className='ScrollList_vertical-wrap'>
                <h2 className='ScrollList_vertical'>
                  <span>
                    <span className='ScrollList_title'>Tất cả khóa học</span>
                    <span className='ScrollList_label'>Mới</span>
                  </span>
                </h2>
              </div>
            </div>

            <CourseList courses={data} />

            {categoryNames.map((i) => (
              <div>
                <div key={i.id}>
                  <div className='ScrollList_vertical-wrap'>
                    <h2 className='ScrollList_vertical'>
                      <span>
                        <span className='ScrollList_title'>{i}</span>
                        <span className='ScrollList_label'>Mới</span>
                      </span>
                    </h2>
                  </div>
                </div>
                <CourseList courses={coursesByCategory[i]} />
              </div>
            ))}

            <div className='ScrollList_body'>
              <div className='index-module_row'></div>
            </div>
          </div>
        </div>
      </div>
      <script
        src='//code.tidio.co/s3vbpcahqgcxvpjgbfcgqjceurb2uxef.js'
        async
      ></script>
      <Footer />
    </div>
  )
}

export default Home
