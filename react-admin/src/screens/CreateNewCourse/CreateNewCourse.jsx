import React, { useState } from "react"
import "./CreateNewCourse.scss"
import {
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "./components/StepComponent/StepComponent"
import Header from "../../components/admin/Header/Header"
import Sidebar from "../../components/admin/Sidebar/Sidebar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function CreateNewCourse() {
  const [stepActive, setStepActive] = useState(1)
  const [isActiveNextFeature, setIsNextFeature] = useState(false)
  const [data,setData] = useState(null)
  const [course,setCourse] = useState([])
  const navigate = useNavigate()
  const handleDataChange = (newData) => {
    
    setData(newData);
  };
 
  console.log(course)
  const handleClickNextAndPrevStep = (type,newData) => {
    
    if (type === "prev") {
      setStepActive(stepActive - 1)
    }

    if (type === "next") {
      setStepActive(stepActive + 1)
      setCourse(prevCourse => {
        const updatedCourse = [...prevCourse];
        updatedCourse.push(newData);
        return updatedCourse;
      });
    }
  }

  const handleConfirmData = (newData,course) => {
    setCourse(prevCourse => {
      const updatedCourse = [...prevCourse];
      updatedCourse.push(newData);
      return updatedCourse;
    });
    const data = axios.post('http://localhost:8000/api/course',{
      course_name: course[1].course_name,
      description : course[2].description,
      user_id: parseInt(localStorage.getItem('id')),
      id_category: course[3].category,
      img: course[4].img.name,
      video: course[4].video.name,
      status: 0
     
    }).then(e=> console.log(e.data)).catch(err=>console.log(err))
    alert("Thêm khóa học thành công")
    navigate("/lecturer/my-course")
    
  
  
  }

  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <div
        className='create-new-course-wp'
        style={{
          width: "calc(100vw - 250px)",
          marginLeft: "240px",
          marginTop: "68px",
          padding: "0px 10px",
        }}
      >
        <div className='header-create-new-course'>
          <span>Step {stepActive} of 5</span>
          <button onClick={() => (window.location.href = "/")}>Exit</button>
          <div
            style={{
              zIndex: "1",
              width: `${
                stepActive === 1
                  ? 20
                  : stepActive === 2
                  ? 40
                  : stepActive === 3
                  ? 60
                  : stepActive === 4
                  ? 80
                  : stepActive === 5
                  ? 100
                  : 0
              }%`,
            }}
          ></div>
        </div>
        <div
          className='py-5 content-render-step'
          style={{
            marginBottom: "20px",
          }}
        >
          {stepActive === 1 && <StepOne setIsNextFeature={setIsNextFeature} />}
          {stepActive === 2 && <StepTwo setIsNextFeature={setIsNextFeature} onDataChange={handleDataChange} />}
          {stepActive === 3 && (
            <StepThree setIsNextFeature={setIsNextFeature} onDataChange={handleDataChange} />
          )}
          {stepActive === 4 && <StepFour setIsNextFeature={setIsNextFeature} onDataChange={handleDataChange} />}
          {stepActive === 5 && <StepFive setIsNextFeature={setIsNextFeature}  onDataChange={handleDataChange}/>}
        </div>
        <div
          style={{
            padding: "10px 20px",
          }}  
          className={stepActive !== 1 ? "navigate-ft" : "navigate-ft first"}
        >
          {stepActive !== 1 && (
            <button onClick={() => handleClickNextAndPrevStep("prev")}>
              Previous
            </button>
          )}
          <button
            className={
              isActiveNextFeature
                ? stepActive === 5
                  ? "confirm"
                  : ""
                : "disabled"
            }
            onClick={() => {
              if (isActiveNextFeature) {
                if (stepActive < 5) {
                  handleClickNextAndPrevStep("next",data)
                } else {
                  handleConfirmData(data,course)
                }
              }
            }}
          >
            {stepActive === 5 ? "Confirm" : "Next Feature"}
          </button>
        </div>
      </div>
    </div>
  )
}
