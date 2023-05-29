import React, { useEffect, useState } from 'react'
import './learningpage.scss'
import logo from '../../assets/images/logof8.png'

const Learningpage = () => {
    const  video1 = 'video1.mp4'
    const [video,setVideo] = useState('')
    useEffect(() => {
       
        setVideo('video1.mp4');
      }, []);
    console.log(video)

  return (
    
    <>
      <div>
        <section className='index-module_grid index-module_fullWidth'>
          <div className='Header_wrapper'>
            <div className='Header_back-btn'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='chevron-left'
                class='svg-inline--fa fa-chevron-left
                        Header_icon'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path
                  fill='currentColor'
                  d='M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75
                            0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4
                            169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z'
                ></path>
              </svg>
            </div>
            <a
              href='/'
              className='Header_logo'
            >
              <img
                src={logo}
                alt=''
              />
            </a>
            <div className='Header_course-title'>
              Xây Dựng Website với ReactJS
            </div>
            <div className='Header_actions'>
              <div className='Header_progress-bar'>
                <p className='Header_completed-msg'>
                  <strong>
                    <span className='Header_num'>56</span>/
                    <span className='Header_num'>119 </span>
                  </strong>
                  bài học
                </p>
              </div>
              <button className='Header_action-btn'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='file'
                  class='svg-inline--fa fa-file Header_icon'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M256 0v128h128L256 0zM224 128L224
                            0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128z'
                  ></path>
                </svg>
                <span className='Header_label'>Ghi chú</span>
              </button>
              <button className='Header_action-btn Header_help-btn'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='circle-question'
                  class='svg-inline--fa fa-circle-question Header_icon'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6
                            256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1
                            258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186
                                301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1
                                128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'
                  ></path>
                </svg>
                <span className='Header_label'>Hướng dẫn</span>
              </button>
            </div>
          </div>
          <div className='Tracks_wrapper'>
            <div className='Tracks_container'>
              <header className='Tracks_header'>
                <h1 className='Tracks_heading'>Nội dung khóa học</h1>
                <button className='Tracks_close-btn'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='xmark'
                    class='svg-inline--fa fa-xmark '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path
                      fill='currentColor'
                      d='M310.6 361.4c12.5
                                12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9
                                40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75
                                    0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'
                    ></path>
                  </svg>
                </button>
              </header>
              <div className='Tracks_body'>
                <div className='TrackItem_wrapper'>
                  <h3 className='TrackItem_title'>1. Giới thiệu</h3>
                  <span className='TrackItem_desc'>4/4 | 34:15</span>
                  <span className='TrackItem_icon'>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='chevron-down'
                      class='svg-inline--fa fa-chevron-down '
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path
                        fill='currentColor'
                        d='M224 416c-8.188
                                    0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5
                                    45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z'
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className='TrackItem_track-steps-list TrackItem_opened'>
                  <div className='StepItem_wrapper learn-item-1'>
                    <div className='StepItem_info'>
                      <h3 className='StepItem_title'>
                        1. ReactJS là gì? Tại sao nên học ReactJS?
                      </h3>
                      <p className='StepItem_desc'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='circle-play'
                          class='svg-inline--fa fa-circle-play StepItem_lesson-icon'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4
                                            0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6
                                            272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z'
                          ></path>
                        </svg>
                        <span>10:41</span>
                      </p>
                    </div>
                    <div className='StepItem_icon-box'>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='circle-check'
                        class='svg-inline--fa fa-circle-check StepItem_state-icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512
                                        256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3
                                        140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='StepItem_wrapper learn-item-1'>
                    <div className='StepItem_info'>
                      <h3 className='StepItem_title'>2. SPA/MPA là gì?</h3>
                      <p className='StepItem_desc'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='circle-play'
                          class='svg-inline--fa fa-circle-play StepItem_lesson-icon'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4
                                            0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6
                                            272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z'
                          ></path>
                        </svg>
                        <span>22:20</span>
                      </p>
                    </div>
                    <div className='StepItem_icon-box'>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='circle-check'
                        class='svg-inline--fa fa-circle-check StepItem_state-icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512
                                        256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3
                                        140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='StepItem_wrapper learn-item-1'>
                    <div className='StepItem_info'>
                      <h3 className='StepItem_title'>3. Ưu điểm của SPA</h3>
                      <p className='StepItem_desc'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='circle-question'
                          class='svg-inline--fa fa-circle-question StepItem_lesson-icon'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4
                                            0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308
                                            213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'
                          ></path>
                        </svg>
                        <span>00:14</span>
                      </p>
                    </div>
                    <div className='StepItem_icon-box'>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='circle-check'
                        class='svg-inline--fa fa-circle-check StepItem_state-icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512
                                        256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3
                                        140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className='StepItem_wrapper learn-item-1'>
                    <div className='StepItem_info'>
                      <h3 className='StepItem_title'>
                        4. Khảo sát ý kiến người dùng về các tính năng trong App
                        học giao tiếp
                      </h3>
                      <p className='StepItem_desc'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='file-lines'
                          class='svg-inline--fa fa-file-lines StepItem_lesson-icon'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 384 512'
                        >
                          <path
                            fill='currentColor'
                            d='M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5
                                            21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836
                                            0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352
                                                272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z'
                          ></path>
                        </svg>
                        <span>01:00</span>
                      </p>
                    </div>
                    <div className='StepItem_icon-box'>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='circle-check'
                        class='svg-inline--fa fa-circle-check StepItem_state-icon'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512
                                        256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3
                                        140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Content_wrapper">
                    <div className="Video_wrapper noselect">
                        <div data-tour ="learning-center">
                            <div className="VideoPlayer_wrapper">
                                <div className="VideoPlayer_player" style={{"height" : "100%", "width" : "100%"}}>
                                    <div style={{"height" : "100%", "width" : "100%"}}>
                                        <video controls width="100%" height='100%'>
                                            <source src={require(`../../assets/videos/${video1}`)} type="video/mp4" />
                                        </video>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Video_content'>
              <div className='Video_contentTop'>
                <header className='wrapper'>
                  <h1 className='Heading_heading'>useEffect with DOM events</h1>
                  <p className='Heading_updated'>Cập nhật tháng 5 năm 2022</p>
                </header>
                <button className='Video_addNote'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='plus'
                    class='svg-inline--fa fa-plus '
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67
                                0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7
                                    224 432 238.3 432 256z'
                    ></path>
                  </svg>
                  <span className='Video_label'>
                    Thêm ghi chú
                    {/* Thêm thời gian ==> Đang tìm hiểu */}
                  </span>
                </button>
              </div>
              <div className='MarkdownParser_wrapper'>
                <p>
                  Bạn muốn học lập trình hiệu quả hơn không? Hãy học tại trang
                  web
                  <a
                    href='http://fullstack.edu.vn/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {" "}
                    http://fullstack.edu.vn{" "}
                  </a>
                  thay vì Youtube. Lý do tại sao mời bạn bấm vào đây: ...
                </p>
                <hr />
                <h2
                  id='tham-gia-nhom-reactjs-viet-nam'
                  data-appended='true'
                >
                  <a
                    data-link=''
                    href='https://fullstack.edu.vn/learning/reactjs?id=b0f2c2e7-2afa-482b-844d-a05a9aa41130#tham-gia-nhom-reactjs-viet-nam'
                    target='_self'
                  ></a>
                  Tham gia nhóm ReactJS Việt Nam
                </h2>
                <p>
                  Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã
                  bị chủ sở hữu cũ bán, nhóm không còn chất lượng vì có nhiều
                  tin bán hàng, quảng cáo.
                </p>
                <p>
                  Nay F8 tạo nhóm "ReactJS Việt Nam" mới, với mong muốn mang lại
                  môi trường tốt hơn cho việc chia sẻ, học tập kiến thức liên
                  quan tới ReactJS tại Việt Nam 🎉
                </p>
                <p>
                  👉{" "}
                  <strong>
                    Xin mời tham gia tại đây:{" "}
                    <a
                      href='/external-url?continue=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1134618593772787'
                      target='_blank'
                      rel='noreferrer'
                    >
                      https://www.facebook.com/groups/1134618593772787
                    </a>
                  </strong>
                </p>
                <blockquote>
                  <p>
                    Cao ốc nào cũng được xây từ viên gạch đầu tiên, hãy đăng câu
                    hỏi hoặc chia sẻ kiến thức của bạn để nhóm mới này sớm trở
                    thành tòa cao ốc bạn nhé &lt;3
                  </p>
                </blockquote>
              </div>
              <p class='Powered_wrapper'>
                Made with{" "}
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='heart'
                  class='svg-inline--fa fa-heart Powered_heart'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512
                         185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z'
                  ></path>
                </svg>{" "}
                <span class='Powered_dot'>·</span> Powered by F8
              </p>
            </div>
          <div className='ActionBar_wrapper'>
            <button className='ActionBar_btn'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='chevron-left'
                class='svg-inline--fa fa-chevron-left '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path
                  fill='currentColor'
                  d='M224 480c-8.188
                         0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5
                          32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0
                           45.25C240.4 476.9 232.2 480 224 480z'
                ></path>
              </svg>
              <span>BÀI TRƯỚC</span>
            </button>
            <button className='ActionBar_btn ActionBar_primary ActionBar_highlight'>
              <span>BÀI TIẾP THEO</span>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='chevron-right'
                class='svg-inline--fa fa-chevron-right '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path
                  fill='currentColor'
                  d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75
                          0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 
                          192C112.4 476.9 104.2 480 96 480z'
                ></path>
              </svg>
            </button>
            <div className='ActionBar_toggle-wrap'>
              <h3 className='ActionBar_track-title'>6. Hooks</h3>
              <button className='ActionBar_toggle-btn'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-right'
                  class='svg-inline--fa fa-arrow-right '
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='currentColor'
                    d='M438.6 278.6l-160 160C272.4
                             444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 
                             224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className='Main_comment-btn Main_show-tracks'
            data-tour='comments-tutorial'
          >
            <button className='ActionButton_wrapper'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='comments'
                class='svg-inline--fa fa-comments '
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 512'
              >
                <path
                  fill='currentColor'
                  d='M416 176C416 78.8 322.9 0 208 
                        0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 
                        2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 
                        343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 
                        238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 
                        181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 
                        512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z'
                ></path>
              </svg>
              <span className='ActionButton_title'>Hỏi đáp</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Learningpage
