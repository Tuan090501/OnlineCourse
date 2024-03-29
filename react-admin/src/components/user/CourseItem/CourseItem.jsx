import React from "react"
import iconvip from "../../../assets/images/icon-vip.svg"
import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating';

function CourseItem({ course }) {

  const { course_name, img, price, id,lecturer,rating } = course
 
  return (
    <div className='index-module_l-3'>
      <div className='CommonItem_wrapper Home_courseItem'>
        <Link
          to={`/course-detail/${id}`}
          className='CommonItem_thumb CommonItem_has-link'
          style={{ backgroundImage: `url(${require(`../../../assets/images/${img}`)})` }}
          >
          <button className='Button_btn CommonItem_cta-btn'>
            Xem khóa học
          </button>
        </Link>
        <h3 className='CommonItem_title'>
          <Link to={`/course-detail/${id}`}>{course_name}</Link>
        </h3>
        <div className="rating">
          <Rating value={rating} precision={0.1} readOnly/>
         
        </div>
        <div className="author">
          <span className="author-name">{lecturer.user_name}</span>
        </div>
        <div className='CourseItem_pro-icon'>
          <img
            src={iconvip}
            alt=''
          />
      
        </div>
        <div className='price'>
          <span className='CourseItem_old-price'>{price}$</span>
          <span className='CourseItem_main-price'>{price}$</span>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
