import React from "react"
import iconvip from "../../../assets/images/icon-vip.svg"
import { Link } from "react-router-dom"
function CourseItem({ course }) {
  const { course_name, img, price, id } = course

  return (
    <div className='index-module_l-3'>
      <div className='CommonItem_wrapper Home_courseItem'>
        <Link
          to={`/course-detail/${id}`}
          className='CommonItem_thumb CommonItem_has-link'
          style={{ backgroundImage: `url(${img})` }}
        >
          <button className='Button_btn CommonItem_cta-btn'>
            Xem khóa học
          </button>
        </Link>
        <h3 className='CommonItem_title'>
          <a href='/'>{course_name}</a>
        </h3>
        <div className='CourseItem_pro-icon'>
          <img
            src={iconvip}
            alt=''
          />
        </div>
        <div className='price'>
          <span className='CourseItem_old-price'>1.2000.000</span>
          <span className='CourseItem_main-price'>FREE</span>
        </div>
      </div>
    </div>
  )
}

export default CourseItem