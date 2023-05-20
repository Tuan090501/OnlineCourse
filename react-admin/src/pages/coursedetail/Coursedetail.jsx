import React, { useContext, useEffect, useState } from "react"
import "./coursedetail.scss"
import Sidebar from "../../components/user/sidebar/Sidebar"
import ktnt from "../../assets/images/KTNT.png"
import Footer from "../../components/user/footer/Footer"
import Header from "../../components/user/header/Header"
import { useNavigate } from "react-router-dom"
import { Cartcontext } from "../../context/CartContext"
import axios from "axios"

const Coursedetail = () => {
  const navigate = useNavigate()
  const Globalstate = useContext(Cartcontext)
  const dispatch = Globalstate.dispatch
  const [course, setCourse] = useState({})

  useEffect(() => {
    const fetchCourse = async () => {
      const copyURL = window.location.href.split("/")
      const id = copyURL[copyURL.length - 1]
      const { data } = await axios.get(`http://localhost:8000/api/course/${id}`)
      setCourse(data)
      console.log(Globalstate)
    }
    fetchCourse()
  }, [])
console.log(course)
  return (
    <>
      <Header />
      <div className='App_withSidebar'>
        <Sidebar />
        {}
        <div className='App_withSidebarContent'>
          <section className='index-module_grid index-module_fullWidth'>
            <section className='index-module_row CourseDetail_wrapper'>
              <section className='index-module_col index-module_c-12 index-module_m-12 index-module_l-8'>
                <h1 className='CourseDetail_courseName'>
                  Kiến thức nhập môn IT
                </h1>
                <div className='CourseDetail_textContent'>
                  Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn
                  nên xem các videos tại khóa này trước nhé.
                </div>
                <div className='CourseDetail_topicList'>
                  <h2 className='CourseDetail_topicHeading'>
                    Bạn sẽ học được gì?
                  </h2>
                  <section className='index-module_row'>
                    <section className='index-module_col index-module_c-12 index-module_m-12 index-module_l-12'>
                      <ul className='CourseDetail_list'>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='check'
                            class='svg-inline--fa fa-check CourseDetail_icon'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                          >
                            <path
                              fill='currentColor'
                              d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 
                                                406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124
                                                 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63
                                                  233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                            ></path>
                          </svg>
                          <span>
                            Các kiến thức cơ bản, nền móng của ngành IT
                          </span>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='check'
                            class='svg-inline--fa fa-check CourseDetail_icon'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                          >
                            <path
                              fill='currentColor'
                              d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 
                                                406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124
                                                 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63
                                                  233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                            ></path>
                          </svg>
                          <span>
                            Các mô hình, kiến trúc cơ bản khi triển khai ứng
                            dụng
                          </span>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='check'
                            class='svg-inline--fa fa-check CourseDetail_icon'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                          >
                            <path
                              fill='currentColor'
                              d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 
                                                406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124
                                                 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63
                                                  233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                            ></path>
                          </svg>
                          <span>
                            Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng
                            dụng
                          </span>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='check'
                            class='svg-inline--fa fa-check CourseDetail_icon'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                          >
                            <path
                              fill='currentColor'
                              d='M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 
                                                406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124
                                                 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63
                                                  233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z'
                            ></path>
                          </svg>
                          <span>
                            Hiểu hơn về cách internet và máy vi tính hoạt động
                          </span>
                        </li>
                      </ul>
                    </section>
                  </section>
                </div>
                <div className='CurriculumOfCourse_curriculumOfCourse'>
                  <div className='CurriculumOfCourse_headerSticky'>
                    <div className='CurriculumOfCourse_headerBlock'>
                      <h2 className='CurriculumOfCourse_floatLeft'>
                        Nội dung khóa học
                      </h2>
                    </div>
                    <div className='CurriculumOfCourse_subHeadWrapper'>
                      <ul>
                        <li className='CurriculumOfCourse_hiddenMobile'>
                          <strong>4 </strong>
                          chương
                        </li>
                        <li className='CurriculumOfCourse_dot CurriculumOfCourse_hiddenMobile'>
                          •
                        </li>
                        <li>
                          <strong>11 </strong>
                          bài học
                        </li>
                        <li className='CurriculumOfCourse_dot'>•</li>
                        <li>
                          <span>
                            Thời lượng
                            <strong> 3 giờ 25 phút</strong>
                          </span>
                        </li>
                      </ul>
                      <div className='CurriculumOfCourse_toggleBtn'>
                        Mở rộng tất cả
                      </div>
                    </div>
                  </div>
                  <div className='CurriculumOfCourse_curriculumPanel'>
                    <div className='CurriculumOfCourse_panelGroup'>
                      <div>
                        <div className='CurriculumOfCourse_panel'>
                          <div className='CurriculumOfCourse_panelHeading CurriculumOfCourse_activePanel'>
                            {/* <h5 className="CurriculumOfCourse_panelTitle">
                                                        <div className="CurriculumOfCourse_headline">
                                                            <span className="CurriculumOfCourse_floatLeft CurriculumOfCourse_groupName">
                                                                <strong>1. Khái niệm kỹ thuật cần biết</strong>
                                                            </span>
                                                            <span className="CurriculumOfCourse_floatRight CurriculumOfCourse_timeOfSection">
                                                                2 bài học
                                                            </span>
                                                        </div>
                                                    </h5> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CurriculumOfCourse_author">
                                <h2 className="CurriculumOfCourse_floatLeft">Giảng viên</h2>
                                <div>
                                    <h3 className="instructor__name">Ngô Minh Hiếu</h3>
                                    <p className="instructor__job-title">"Bắt đầu để trờ thành một Developer chuyên nghiệp"</p>
                                </div>
                                <div className="instructor__info">
                                    <img src="https://cafebiz.cafebizcdn.vn/162123310254002176/2021/5/28/photo-1-162218959229049086641.jpg" alt="" className="instructor__image" />
                                    <ul className="info-list">
                                        <li>
                                            <div className="list-content">
                                                <i className="fa-solid fa-ranking-star"></i>
                                                <div className="item-list-content">4.8 Xếp hạng giảng viên</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-content">
                                                <i className="fa-sharp fa-regular fa-star"></i>
                                                
                                                <div className="item-list-content">359 đánh giá</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-content">
                                                <i className="fa-solid fa-circle-user"></i>
                                                <div className="item-list-content">2032 học viên</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list-content">
                                                <i className="fa-solid fa-folder-open"></i>
                                                <div className="item-list-content">10 khóa học</div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                           
                            </div>

              </section>
              <section className='index-module_col index-module_c-12 index-module_m-12 index-module_l-4'>
                <div className='CourseDetail_purchaseBadge'>
                  <div className='CourseDetail_imgPreview'>
                    <div
                      className='CourseDetail_bg'
                      style={{ backgroundImage: `url(${ktnt})` }}
                    ></div>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='circle-play'
                      class='svg-inline--fa fa-circle-play CourseDetail_icon'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0
                                      256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2
                                       205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1
                                        142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z'
                      ></path>
                    </svg>
                    <p>Xem giới thiệu khóa học</p>
                  </div>
                  <h5>Miễn phí</h5>

                  <button
                    className='Button_btn CourseDetail_learnNow'
                    onClick={() => {
                      dispatch({ type: "ADD", payload: course })
                      console.log(Globalstate)
                      
                    }}
                  >
                    Add to cart
                  </button>

                  <button
                    className='Button_btn CourseDetail_learnNow'
                    style={{
                      backgroundColor: "#f05123",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Buy now
                  </button>

                  <ul>
                    <li>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='gauge-high'
                        class='svg-inline--fa fa-gauge-high CourseDetail_icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M512 256C512 397.4 397.4 512 256 512C114.6 512
                                        0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7
                                        288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7
                                            130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144
                                            112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128
                                            256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416
                                            288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z'
                        ></path>
                      </svg>
                      <span>Trình độ cơ bản</span>
                    </li>
                    <li>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='film'
                        class='svg-inline--fa fa-film CourseDetail_icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48
                                        47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8
                                        8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8
                                            8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164
                                            16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.
                                            0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418
                                            3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1
                                                152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z'
                        ></path>
                      </svg>
                      <span>
                        Tổng số
                        <strong> 11 </strong>
                        bài học
                      </span>
                    </li>
                    <li>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='clock'
                        class='svg-inline--fa fa-clock CourseDetail_icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z'
                        ></path>
                      </svg>
                      Thời lượng
                      <strong> 03 giờ 25 phút </strong>
                    </li>
                    <li>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='battery-full'
                        class='svg-inline--fa fa-battery-full CourseDetail_icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 576 512'
                      >
                        <path
                          fill='currentColor'
                          d='M448 320H96V192H448V320zM0 176C0 131.8 35.82 96 80
                                          96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0
                                           380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z'
                        ></path>
                      </svg>
                      <span>Học mọi lúc, mọi nơi</span>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Coursedetail
