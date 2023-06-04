import React, { useState } from 'react';
import './searchbar.scss';

const styleMyCourse = {
    zIndex: 9999,
    position: "absolute",
    inset: "0px 0px auto auto",
    margin: "0px",
    transform: "translate3d(-540px, 58.4px, 0px)",
};

const CourseSellingPage = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredCourses);
  };
//   test
  const [isDivVisible, setIsDivVisible] = useState(false);
  
    function toggleDiv() {
      setIsDivVisible((prevIsDivVisible) => !prevIsDivVisible);
    }
  
    const styleMyCourse = {
        zIndex: 9999,
        position: "absolute",
        inset: "0px 0px auto auto",
        margin: "0px",
        transform: "translate3d(-540px, 58.4px, 0px)",
        display: isDivVisible ? "block" : "none"
    };
// test
  return (
    <div>
        <div className="Search_wrapper" aria-expanded="false">
            <div className="Search_searchIcon"></div>
            <input
                type="text"
                className="Search_input"
                placeholder='Tìm kiếm khóa học, bài viết, video, ...'
                value={searchTerm}
                onChange={handleSearch}
                onClick={toggleDiv}
            />

        </div>
        <div style={styleMyCourse}>
            <ul className='Tippy-module_wrapper'>
                <div className="Search_result">
                    <div className="Search_header">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" 
                        data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass Search_icon" 
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 
                            40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 
                            1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 
                            119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                            57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
                        <span style={{fontSize: "1rem"}}>Kết quả cho '{searchTerm}'</span>
                    </div>
                    <div className="Search_heading">
                        <h5>KHÓA HỌC</h5>
                    </div>
                    {searchResults.map((course) => (
                      
                        <div className="Search_searchItem">
                            <a href={`/course-detail/${course.id}`} className="FallbackAvatar_avatar">
                         <img src={course.image} alt="" />
                          
                            <span>{course.title}</span>
                            </a>
                        </div>
                       
                    ))}
                </div>
            </ul>
        </div>

    </div>
  );
};

export default CourseSellingPage;