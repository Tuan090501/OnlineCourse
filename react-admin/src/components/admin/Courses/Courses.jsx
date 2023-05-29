import React from "react"
import { Link } from "react-router-dom"

export default function Courses({
  thumbnailCourse,
  nameCourse,
  subtitleCourses,
  active,
}) {
  return (
    <div
      className='courses_wrapper'
      style={{
        padding: "0px",
        // maxHeight: "0px",
        borderRadius: "0px",
      }}
    >
      <div
        className='image_wrapper'
        style={{
          maxHeight: "none",
        }}
      >
        <img
          src={require(`../../../assets/images/${thumbnailCourse}`)}
          alt='courses'
          className='courses_image'
        />
      </div>

      <div className='courses_detail_wrapper'>
        <Link to='/lecturer/edit-my-course/1'>
          <h3 className='header_courses'>{nameCourse}</h3>

          <p className='sub_header_courses'>{subtitleCourses}</p>
        </Link>
      </div>
    </div>
  )
}
