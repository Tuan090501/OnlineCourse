import React from 'react'

export default function Courses({thumbnailCourse,nameCourse,subtitleCourses,active}) {
  return (
    <div className='courses_wrapper'>
        <div className="image_wrapper">
            <img src={thumbnailCourse} alt="courses" className="courses_image" />
        </div>
        
        <div className="courses_detail_wrapper">
            <a href="/"> 
            <h3 className="header_courses">
                {nameCourse}
            </h3>

            <p className="sub_header_courses">
                {subtitleCourses}
            </p>

            </a>
        </div>
    </div>
  )
}
