import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Divider, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import "./Step.scss"
import axios from "axios"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import Spinning from "../../../../components/Spinning"

const dataCoursesSelect = [
  { value: "c1", label: "Học HTML CSS Căn Bản Để Thực Chiến" },
  { value: "c2", label: "Học JS và JS Nâng Cao Cùng Với Tom" },
  { value: "c3", label: "Git Căn Bản Cho Người Mới Bắt Đầu" },
  { value: "c4", label: "TypeScript Không Khó - Học Cùng Với Chúng Tôi" },
]

export const StepOneEditCourse = () => {
  const [fileImage, setFileImage] = useState(null)
  const [fileVideo, setFileVideo] = useState(null)
  return (
    <div className='step-wp-edit-course'>
      <div className='top-step'>
        <h2>Trang thu thập thông tin khóa học</h2>
      </div>
      <Box
        className='top-step-detail'
        sx={{
          padding: "30px",
        }}
      >
        <p className='step-desc py-4'>
          Tất cả Giảng viên có thể nhìn thấy của khóa học này phải hoàn thành hồ
          sơ của họ trước khi khóa học có thể được xuất bản. Điều này bao gồm
          tên và một bản tóm tắt ngắn về lý lịch của bạn.
        </p>
        <div className='step-content-edit-course-wp'>
          <div className='item-step-edit mb-4'>
            <label
              className='d-block'
              style={{
                display: "block",
              }}
            >
              <strong>Nội dung khóa học*</strong>
            </label>
            <span
              style={{
                fontSize: 14,
                display: "block",
                marginBottom: "6px",
                marginTop: "6px",
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              (nhiều hơn <strong>5 từ</strong>)
            </span>
            <input
              className='form-control'
              placeholder='Bạn hãy nhập tên khóa học của bạn...'
              style={{
                padding: "12px",
                fontSize: "16px",
                width: "100%",
                border: "1px solid #222",
              }}
            />
          </div>
          <div className='item-step-edit mb-4'>
            <label
              className='d-block'
              style={{
                display: "block",
                marginTop: "16px",
              }}
            >
              <strong>Mô tả khóa học*</strong>
            </label>
            <span
              style={{
                fontSize: 14,
                display: "block",
                margin: "6px 0px",
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              (nhiều hơn <strong>10 từ</strong>)
            </span>
            <textarea
              style={{
                minHeight: 150,
                width: "100%",
                border: "1px solid #222",
              }}
              className='form-control'
              placeholder='Bạn hãy nhập tên khóa học của bạn...'
            />
          </div>
          <div
            className='item-step-edit mb-3'
            style={{
              marginTop: "10px",
            }}
          >
            <label
              className='d-block'
              style={{}}
            >
              <strong>Danh mục khóa học*</strong>
            </label>
            <span
              style={{
                fontSize: 14,
                display: "block",
                marginBottom: "6px",
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              (Danh mục khóa học là <strong>bắt buộc</strong>)
            </span>
            <Select
              placeholder='Vui lòng chọn category cho khóa học của bạn'
              options={dataCoursesSelect}
            />
          </div>
          <div
            className='item-step-edit mb-3'
            style={{
              marginTop: "12px",
            }}
          >
            <label
              className='d-block'
              style={{
                display: "block",
                marginBottom: "4px",
              }}
            >
              <strong>Danh mục con*</strong>
            </label>
            <span
              style={{
                fontSize: 14,
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              (Danh mục con khóa học là <strong>bắt buộc</strong>)
            </span>
            <Select
              placeholder='Vui lòng chọn danh mục con cho khóa học của bạn'
              options={dataCoursesSelect}
            />
          </div>
          <div className='mt-3 mb-2'>
            <Box className='create-container'>
              <button
                className='create-btn'
                type='button'
                style={{
                  fontSize: "16px",
                  height: "100%",
                  padding: "10px 12px",
                  cursor: "pointer",
                  backgroundColor: "#ff6c03",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transition: "all 0.15s ease-in",
                  marginTop: "16px",
                  minWidth: "70px",
                }}
              >
                Lưu
              </button>
            </Box>
          </div>
          <div className='content-render-confirm'>
            <div className='row item'>
              <label
                className='text-left d-block'
                style={{
                  fontWeight: "bold",
                }}
              >
                Ảnh của khóa học*
              </label>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <div>
                  <img
                    style={{
                      width: "450px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    src={
                      fileImage
                        ? URL.createObjectURL(fileImage)
                        : "https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg"
                    }
                    alt=''
                  />
                </div>
                <div>
                  <p
                    style={{
                      margin: "0px 8px",
                    }}
                  >
                    Tải lên hình ảnh khóa học của bạn ở đây. Ảnh phải đáp ứng
                    các tiêu chuẩn chất lượng hình ảnh để được chấp nhận{" "}
                  </p>
                  <input
                    style={{
                      margin: "8px",
                    }}
                    onChange={(e) => setFileImage(e.target.files[0])}
                    type='file'
                  />
                  <button
                    className='btn btn-danger d-block mt-3'
                    style={{
                      padding: "10px",
                      margin: "8px",
                    }}
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </Box>
            </div>
            <div className='row item'>
              <label className='text-left d-block'>Video của khóa học</label>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <div className='col-4'>
                  {fileVideo ? (
                    <video
                      src={URL.createObjectURL(fileVideo)}
                      controls
                      autoPlay
                      loop
                    />
                  ) : (
                    <img
                      style={{
                        width: "450px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      src={
                        "https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg"
                      }
                      alt=''
                    />
                  )}
                </div>
                <div className='col-8'>
                  <p
                    style={{
                      margin: "8px",
                    }}
                  >
                    Tải lên hình ảnh khóa học của bạn ở đây. Ảnh phải đáp ứng
                    các tiêu chuẩn chất lượng hình ảnh để được chấp nhận{" "}
                  </p>
                  <input
                    onChange={(e) => setFileVideo(e.target.files[0])}
                    type='file'
                    style={{
                      margin: "8px",
                    }}
                  />
                  <button
                    className='btn btn-danger d-block mt-3'
                    style={{
                      padding: "10px",
                      margin: "8px",
                    }}
                  >
                    Lưu và thay đổi
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export const StepTwoEditCourse = () => {
  const [CountOne, setCountOne] = useState([
    {
      school: (
        <div
          className='school-course'
          style={{
            display: "flex",
          }}
        >
          <input
            name='school-1'
            className='form-control'
            placeholder='Bạn hãy nhập tên khóa học của bạn 1...'
            style={{
              flex: "1",
              padding: "10px",
            }}
          />
          <span>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
    {
      school: (
        <div className='school-course'>
          <input
            name='school-2'
            className='form-control'
            placeholder='Bạn hãy nhập tên khóa học của bạn 2 ...'
          />
          <span>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
    {
      school: (
        <div className='school-course'>
          <input
            name='school-3'
            className='form-control'
            placeholder='Bạn hãy nhập tên khóa học của bạn 3...'
          />
          <span>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
    {
      school: (
        <div className='school-course'>
          <input
            name='school-4'
            className='form-control'
            placeholder='Bạn hãy nhập tên khóa học của bạn 4...'
          />
          <span>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
  ])

  const [CountTwo, setCountTwo] = useState([
    {
      school: (
        <div
          className='school-course'
          style={{
            marginTop: "10px",
          }}
        >
          <input
            name='school-1'
            className='form-control'
            placeholder='Bạn hãy nhập yêu cầu của thứ 1 của bạn'
          />
          <span>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
  ])

  const handleClickSchool = (ref = {}, e, index) => {
    const elementRef = ref.current

    if (elementRef) {
      if (e.target.closest("span")) {
        const dataNew = CountOne
        dataNew.splice(index, 1) // 2nd parameter means remove one item only
        setCountOne([...dataNew])
      }
    }
  }

  const handleClickRequirement = (ref = {}, e, index) => {
    const elementRef = ref.current

    if (elementRef) {
      if (e.target.closest("span")) {
        const dataNew = CountTwo
        dataNew.splice(index, 1) // 2nd parameter means remove one item only
        setCountTwo([...dataNew])
      }
    }
  }

  const handleAddMore = () => {
    const lengthCountOne = CountOne.length

    setCountOne((prev) => [
      ...prev,
      {
        school: (
          <div className='school-course'>
            <input
              name={`school-${lengthCountOne - 1}`}
              className='form-control'
              placeholder={`Bạn hãy nhập tên khóa học của bạn ${
                lengthCountOne + 1
              }...`}
            />
            <span>
              <DeleteIcon />
            </span>
          </div>
        ),
      },
    ])
  }

  const handleAddMoreRequirement = () => {
    const lengthCountTwo = CountTwo.length

    setCountTwo((prev) => [
      ...prev,
      {
        school: (
          <div className='school-course'>
            <input
              name={`school-${lengthCountTwo - 1}`}
              className='form-control'
              placeholder={`Hãy nhập yêu cầu thứ ${
                lengthCountTwo + 1
              } của bạn ...`}
            />
            <span>
              <DeleteIcon />
            </span>
          </div>
        ),
      },
    ])
  }

  return (
    <div className='step-wp-edit-course'>
      <div className='top-step'>
        <h2>Đối tượng học viên</h2>
      </div>
      <Box
        sx={{
          padding: "30px",
        }}
      >
        <p className='step-desc py-4'>
          Các mô tả sau đây sẽ hiển thị công khai trên Landing page của khóa học
          và sẽ có tác động trực tiếp đến hiệu suất của bạn. Những mô tả này sẽ
          giúp học viên quyết định xem khóa học của bạn có phù hợp với họ không.
        </p>
        <div className='step-content-edit-course-wp'>
          <div className='item-step-edit mb-4'>
            <label
              className='d-block'
              style={{
                display: "block",
              }}
            >
              <strong>Học viên sẽ học gì trong khóa học?</strong>
            </label>
            <span
              style={{
                fontSize: 14,
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              Bạn vui lòng nhập{" "}
              <strong>4 mục tiêu và đầu ra của khóa học</strong> mà người học có
              thể mong đợi đạt được sau khi hoàn thành khóa học.
            </span>
            {CountOne &&
              CountOne.length > 0 &&
              CountOne.map((item, index) => {
                return (
                  <SchoolComponent
                    key={index}
                    index={index}
                    onClick={handleClickSchool}
                  >
                    {item.school}
                  </SchoolComponent>
                )
              })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "#333",
                  padding: "8px 14px",
                  color: "#fff",
                }}
                onMouseOver=" this.style.color==='black '"
                onClick={() => handleAddMore()}
              >
                + Thêm mục tiêu
              </span>
              <button
                className='btn btn-danger d-block ms-auto'
                style={{
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  padding: "8px 14px",
                  color: "#000",
                  border: "1px solid #111",
                  minWidth: "100px",
                }}
              >
                Lưu
              </button>
            </Box>
          </div>
          <div
            className='item-step-edit mb-4'
            style={{
              marginTop: "8px",
            }}
          >
            <label
              className='d-block'
              style={{
                display: "block",
                marginBottom: "6px",
              }}
            >
              <strong>
                Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học là gì?
              </strong>
            </label>
            <span
              style={{
                fontSize: 14,
              }}
              className='ms-0 mb-2 mt-1 d-block'
            >
              Liệt kê các kỹ năng, kinh nghiệm, công cụ hoặc thiết bị cần thiết
              mà người học nên có trước khi tham gia khóa học của bạn. Nếu không
              có yêu cầu, hãy sử dụng không gian này như một cơ hội để tăng chất
              lượng cho người mới bắt đầu.
            </span>
            {CountTwo &&
              CountTwo.length > 0 &&
              CountTwo.map((item, index) => {
                return (
                  <SchoolComponent
                    key={index}
                    index={index}
                    onClick={handleClickRequirement}
                  >
                    {item.school}
                  </SchoolComponent>
                )
              })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "#333",
                  padding: "8px 14px",
                  color: "#fff",
                }}
                onClick={() => handleAddMoreRequirement()}
              >
                + Add yêu cầu của khóa học
              </span>
              <button
                className='btn btn-danger d-block ms-auto'
                style={{
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  padding: "8px 14px",
                  color: "#000",
                  border: "1px solid #111",
                  minWidth: "100px",
                }}
              >
                Lưu
              </button>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  )
}

export const StepThreeEditCourse = () => {
  const [section, setSection] = useState({})
  const [lecture, setLecture] = useState([])
  const [videoName, setVideoName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isLectureList, setIsLectureList] = useState(false)

  const onCreateNewSection = async (e) => {
    e.preventDefault()
    const course_id = window.location.href.split("/")
    setSection({
      title: e.target.newsection.value,
      course_id: Number(course_id[course_id.length - 1]),
    })
    if (section) {
      const { data } = await axios.post(
        "http://localhost:8000/api/session",
        section
      )
      const createNewSectionForm = document.querySelector(
        ".create-new-section-form"
      )

      createNewSectionForm.style.display = "none"
      setIsLectureList(true)
    }
  }

  const onCreateNewLecture = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    const sessions = await axios.get("http://localhost:8000/api/session")
    let tempSession = {}
    for (let i = 0; i < sessions.data.length; i++) {
      if (
        section.title === sessions.data[i].title &&
        section.course_id === sessions.data[i].course_id
      ) {
        tempSession = { ...sessions.data[i] }
        break
      }
    }
    const tempLecture = {
      title: e.target.newlecture.value,
      session_id: tempSession.id,
      video: `../../assets/videos/${videoName.name}`,
    }

    const data = await axios.post(
      "http://localhost:8000/api/lecture",
      tempLecture
    )
    if (data) {
      const lectures = await axios.get(
        `http://localhost:8000/api/lecture/${tempLecture.session_id}`
      )

      setIsLoading(false)

      const arr = [...lectures.data]
      console.log(arr)
      setLecture(arr)
      console.log(lecture)
    }
  }

  useEffect(() => {
    const fetchLecture = async () => {}
    fetchLecture()
  }, [])

  return (
    <div
      className='step-wp-edit-course'
      style={{
        marginBottom: 20,
      }}
    >
      <div className='top-step'>
        <h2>Chương trình của khóa học</h2>
      </div>
      <Box
        sx={{
          padding: "30px",
        }}
      >
        <p className='step-desc py-4'>
          Bắt đầu kết hợp khóa học của bạn bằng cách tạo ra{" "}
          <strong>phần, bài giảng</strong> và <strong>thực hành</strong> (câu
          đố, bài tập mã hóa và bài tập).
        </p>
        <div className='step-content-edit-course-wp'>
          <button
            className='curriculum'
            onClick={() => {
              const createNewSection = document.querySelector(
                ".create-new-section"
              )
              createNewSection.style.display = "block"
            }}
          >
            + Add new section
          </button>
          <Box
            className='create-new-section'
            style={{
              display: "none",
            }}
          >
            <Box className='create-new-section-wrapper'>
              <form
                onSubmit={onCreateNewSection}
                className='create-new-section-form'
              >
                <Box
                  style={{
                    padding: "12px 20px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <label
                      for='new-section'
                      style={{
                        fontWeight: "bold",
                        minWidth: "150px",
                      }}
                    >
                      New Section
                    </label>
                    <input
                      type='text'
                      id='new-section'
                      className='new-section'
                      name='newsection'
                      placeholder='Enter title'
                    ></input>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "12px",
                    }}
                  >
                    <button
                      className='cancel-btn'
                      type='button'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='create-section'
                    >
                      Create Section
                    </button>
                  </Box>
                </Box>
              </form>

              {isLoading === true ? (
                <Spinning />
              ) : isLectureList === false ? (
                ""
              ) : lecture.length === 0 ? (
                <form
                  onSubmit={onCreateNewLecture}
                  className='create-new-lecture-form'
                  style={
                    {
                      // display: "none",
                    }
                  }
                >
                  <Box
                    style={{
                      padding: "20px",
                      backgroundColor: "#00daff0f",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        fontWeight: "bold",
                      }}
                    >
                      Unpublished Section
                      <LibraryBooksIcon
                        sx={{ width: "20px", margin: "0px 4px" }}
                      />
                      <Typography sx={{ fontWeight: "normal" }}>
                        : Overview
                      </Typography>
                    </Typography>

                    <button
                      className='add__new-lecture'
                      type='button'
                      onClick={() => {
                        const createNewLecture = document.querySelector(
                          ".create__new-lecture"
                        )
                        createNewLecture.style.display = "block"
                      }}
                    >
                      <AddCircleIcon /> Lecturer
                    </button>

                    <Box
                      className='create__new-lecture'
                      sx={{
                        display: "none",
                      }}
                    >
                      <Box
                        style={{
                          padding: "12px 20px 12px",
                          border: "1px solid #222",
                          marginTop: "18px",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Box>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <label
                              for='new-lecture'
                              style={{
                                fontWeight: "bold",
                                minWidth: "150px",
                              }}
                            >
                              New Lecturer
                            </label>
                            <input
                              type='text'
                              id='new-lecture'
                              className='new-section'
                              name='newlecture'
                              placeholder='Enter title'
                            ></input>
                          </Box>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "20px",
                            }}
                          >
                            <label
                              for='new-lecture'
                              style={{
                                fontWeight: "bold",
                                minWidth: "150px",
                              }}
                            >
                              Lecturer video
                            </label>
                            <input
                              onChange={(e) => {
                                setVideoName(e.target.files[0])
                                console.log(e.target.files[0])
                              }}
                              type='file'
                              name='lecture_video'
                            />
                          </Box>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginTop: "12px",
                            }}
                          >
                            <button
                              className='cancel-btn'
                              type='button'
                            >
                              Cancel
                            </button>
                            <button
                              type='submit'
                              className='create-section'
                            >
                              Add lecture
                            </button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </form>
              ) : (
                <Box>
                  <form
                    onSubmit={onCreateNewLecture}
                    className='create-new-lecture-form'
                  >
                    <Box
                      style={{
                        padding: "20px",
                        backgroundColor: "#00daff0f",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          fontWeight: "bold",
                        }}
                      >
                        Unpublished Section
                        <LibraryBooksIcon
                          sx={{ width: "20px", margin: "0px 4px" }}
                        />
                        <Typography sx={{ fontWeight: "normal" }}>
                          : Overview
                        </Typography>
                      </Typography>

                      <button
                        className='add__new-lecture'
                        type='button'
                        onClick={() => {
                          const createNewLecture = document.querySelector(
                            ".create__new-lecture"
                          )
                          createNewLecture.style.display = "block"
                        }}
                      >
                        <AddCircleIcon /> Lecturer
                      </button>

                      <Box
                        className='create__new-lecture'
                        sx={{
                          display: "none",
                        }}
                      >
                        <Box
                          style={{
                            padding: "12px 20px 12px",
                            border: "1px solid #222",
                            marginTop: "18px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <label
                                for='new-lecture'
                                style={{
                                  fontWeight: "bold",
                                  minWidth: "150px",
                                }}
                              >
                                New Lecturer
                              </label>
                              <input
                                type='text'
                                id='new-lecture'
                                className='new-section'
                                name='newlecture'
                                placeholder='Enter title'
                              ></input>
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "20px",
                              }}
                            >
                              <label
                                for='new-lecture'
                                style={{
                                  fontWeight: "bold",
                                  minWidth: "150px",
                                }}
                              >
                                Lecturer video
                              </label>
                              <input
                                onChange={(e) => {
                                  setVideoName(e.target.files[0])
                                  console.log(e.target.files[0])
                                }}
                                type='file'
                                name='lecture_video'
                              />
                            </Box>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "12px",
                              }}
                            >
                              <button
                                className='cancel-btn'
                                type='button'
                              >
                                Cancel
                              </button>
                              <button
                                type='submit'
                                className='create-section'
                              >
                                Add lecture
                              </button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </form>
                  {lecture.map((item, index) => (
                    <Box
                      sx={{
                        padding: "16px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "20px",
                          }}
                        >
                          Lecture {`${index}`}:{" "}
                        </span>
                        <LibraryBooksIcon />
                        <span
                          style={{
                            marginLeft: "10px",
                          }}
                        >{`${item.title}`}</span>
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  )
}

export const StepFourEditCourse = () => {
  return (
    <div className='step-wp-edit-course'>
      <div
        className='top-step'
        style={{
          position: "relative",
        }}
      >
        <h2>Giá cả</h2>
        <Box
          className='create-container'
          sx={{
            position: "absolute",
            top: "450px",
            right: "0",
          }}
        >
          <button
            className='create-btn'
            type='button'
            style={{
              fontSize: "16px",
              height: "100%",
              padding: "12px 16px",
              cursor: "pointer",
              backgroundColor: "#ff6c03",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              transition: "all 0.15s ease-in",
              marginTop: "16px",
              minWidth: "70px",
            }}
          >
            Gửi để review
          </button>
        </Box>
      </div>

      <Box
        sx={{
          padding: "30px",
        }}
      >
        <p className='step-desc py-4'>
          Vui lòng chọn mức giá cho khóa học của bạn bên dưới và nhấp vào
          <strong> "Lưu"</strong>. <br />
          Vui lòng tính toán đơn đăng ký Giảng viên cao cấp tại đây để đặt giá
          cho khóa học của bạn. Bạn có thể đặt giá cho khóa học của mình ngay
          khi phương thức thanh toán được liên kết của bạn được chấp thuận.
          <br />
        </p>
        <div className='step-content-edit-course-wp'>
          <div className='item-step-edit mb-4'>
            <label className='d-block'>
              <strong>Giá tiền * VND</strong>
            </label>

            <div
              className='wp-input-edit'
              style={{
                display: "flex",
              }}
            >
              <input
                className='form-control'
                placeholder='e.g 200.000VND'
                style={{
                  flex: "1",
                  padding: "10px",
                }}
              />
              <button
                className='btn btn-danger d-block ms-auto'
                style={{
                  width: "90px",
                  height: "41px",
                  border: "1px solid #111",
                  cursor: "pointer",
                }}
              >
                Lưu
              </button>
            </div>
          </div>
          <div
            className='item-step-edit mb-4'
            style={{
              marginTop: "30px",
            }}
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png'
              alt=''
              className='paypal-logo'
            />
            <label
              className='d-block'
              style={{ display: "block" }}
            >
              <strong>Thanh toán</strong>
            </label>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <input
                style={{
                  flex: "1",
                  padding: "10px",
                }}
                className='form-control'
                placeholder='Paypal account: example@example.com'
              />

              <button
                className='btn btn-danger d-block ms-auto'
                style={{
                  width: "90px",
                  height: "41px",
                  border: "1px solid #111",
                  cursor: "pointer",
                  marginLeft: "8px",
                }}
              >
                Lưu
              </button>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  )
}

export const SchoolComponent = ({ children, onClick = () => {}, index }) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      onClick={(e) => onClick(ref, e, index)}
    >
      {children}
    </div>
  )
}