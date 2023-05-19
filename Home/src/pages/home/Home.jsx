import React from 'react'
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Slider from "../../components/slider/SlickSlider";
import htmlcsspro from '../../assets/images/htmlcsspro.png'
import iconvip from '../../assets/images/icon-vip.svg'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios"




const courses = [
  {
    id: 1,
    title: 'Kiến Thức Nhập Môn IT',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
    category: 'frontend',
    price: {
      oldPrice: '2.499.000đ',
      mainPrice: '1.299.000đ',
    },
  },
  {
    id: 2,
    title: 'Lập Trình C++ cơ bản, nâng cao',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
    category: 'frontend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 3,
    title: 'HTML CSS từ Zero đến Hero',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    category: 'frontend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 4,
    title: 'Responsive Với Grid System',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 5,
    title: 'Lập trình JavaScript Cơ Bản',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 6,
    title: 'Lập trình JavaScript Nâng Cao',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 7,
    title: 'Làm việc với Terminal & Ubuntu',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 8,
    title: 'Xây Dựng Website Với ReactJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 9,
    title: 'NodeJS & ExpressJS',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 10,
    title: 'App "Đừng Chạm Tay Lên Mặt"',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
    category: 'backend',
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  
];


const CourseItem = ({ course }) => {

  const { course_name, img, price,id } = course;

  return (
    <div className="index-module_l-3">
      <div className="CommonItem_wrapper Home_courseItem">
        <a  href={`/course-detail/${id}`}  className="CommonItem_thumb CommonItem_has-link" style={{ backgroundImage: `url(${img})` }}>
          <button className="Button_btn CommonItem_cta-btn" >Xem khóa học</button>
        </a>
        <h3 className="CommonItem_title">
          <a href="/">{course_name}</a>w
        </h3>
        <div className="CourseItem_pro-icon">
          <img src={iconvip} alt="" />
        </div>
        <div className="price">
          <span className="CourseItem_old-price">1.2000.000</span>
          <span className="CourseItem_main-price">FREE</span>
        </div>
      </div>
    </div>
  );
};

const CourseList = ({ courses }) => {
  return (
    <div className="ScrollList_body">
      <div className="index-module_row">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course}  />
        ))}
      </div>
    </div>
  );
};

// const frontendCourses = courses.filter((course) => course.category === "frontend");
// const backendCourses = courses.filter((course) => course.category === "backend");

const Home = () => {

    const [data, setCourse] = useState([])
    useEffect(()=>{
        const fectchCourse = async () => {
            const data = await axios.get(`http://localhost:8000/api/course`)
           
           setCourse(data.data)          
        }
        fectchCourse()
    },[])
  console.log(data)

  return (
    <div>
      <Header />
      
      <div className="App_withSidebar">
        <Sidebar/>
       
        <div className="Home_wrapper">
          <Slider />
          <div className="ScrollList_vertical">
            <div>
              <div className="ScrollList_vertical-wrap">
                <h2 className="ScrollList_vertical">
                  <span>
                    <span className="ScrollList_title">Khóa học FREE</span> 
                    <span className="ScrollList_label">Mới</span>
                  </span>
                </h2>
              </div>
            </div>
            
            <CourseList courses={data}  />
        
            <div>
              <div className="ScrollList_vertical-wrap">
                <h2 className="ScrollList_vertical">
                  <span>
                    <span className="ScrollList_title">Khóa học miễn phí</span> 
                    <span className="ScrollList_label">Mới</span>
                  </span>
                </h2>
              </div>
            </div>
            {/* <CourseList courses={frontendCourses} />
            <div>
              <div className="ScrollList_vertical-wrap">
                <h2 className="ScrollList_vertical">
                  <span>
                    <span className="ScrollList_title">Khóa học BackEnd</span> 
                    <span className="ScrollList_label">Mới</span>
                  </span>
                </h2>
              </div>
            </div>
            <CourseList courses={backendCourses} /> */}
            
            <div className="ScrollList_body">
              <div className="index-module_row">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
