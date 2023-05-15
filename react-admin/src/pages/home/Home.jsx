import "./home.scss"
import Sidebar from "../../components/user/sidebar/Sidebar"
import Slider from "../../components/user/slider/SlickSlider"
import htmlcsspro from "../../assets/images/htmlcsspro.png"
import iconvip from "../../assets/images/icon-vip.svg"
import Footer from "../../components/user/footer/Footer"
import Header from "../../components/user/header/Header"
import { useEffect, useState } from "react"
import axios from "axios"

const courses = [
  {
    id: 1,
    title: 'Kiến Thức Nhập Môn IT',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
    category: {category_name : "frontend",id: 1},
    price: {
      oldPrice: '2.499.000đ',
      mainPrice: '1.299.000đ',
    },
  },
  {
    id: 2,
    title: 'Lập Trình C++ cơ bản, nâng cao',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
    category: {category_name : "frontend",id: 2},
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 3,
    title: 'HTML CSS từ Zero đến Hero',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    category: {category_name : "backend",id: 3},
    price: {
      oldPrice: '3.999.000đ',
      mainPrice: '2.499.000đ',
    },
  },
  {
    id: 4,
    title: 'Responsive Với Grid System',
    image: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
    category: {category_name : "backend",id: 4},
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
          <a href="/">{course_name}</a>
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
    useEffect(()=>{
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/645f08f074285f0ec46b320c/1h09jlr40';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();


    },[])
    const [data, setCourse] = useState([])
    const coursesByCategory = data.reduce((result, course) => {
      const { category: { category_name } } = course;
      
      if (!result[category_name]) {
        result[category_name] = [];
      }
      
      result[category_name].push(course);
      return result;
    }, {});
    const categoryNames = Object.keys(coursesByCategory);

    

     
     useEffect(()=>{
        const fectchCourse = async () => {
            const data = await axios.get(`http://localhost:8000/api/course`)
           setCourse(data.data)          
        }
      
        fectchCourse()
    },[])
  
console.log(categoryNames )

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
                    <span className="ScrollList_title">Tất cả khóa học</span> 
                    <span className="ScrollList_label">Mới</span>
                  </span>
                </h2>
              </div>
            </div>
          
            <CourseList courses={data}  />
            
            {categoryNames.map(i => (
              <div>
              <div key={i.id}>
                <div className="ScrollList_vertical-wrap">
                  <h2 className="ScrollList_vertical">
                    <span>
                      <span className="ScrollList_title">{i}</span> 
                      <span className="ScrollList_label">Mới</span>
                    </span>
                  </h2>
                </div>
             
              </div>
              <CourseList courses={coursesByCategory[i]}  />

              </div>
           
)           )}

            
            <div className="ScrollList_body">
              <div className="index-module_row">
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="//code.tidio.co/s3vbpcahqgcxvpjgbfcgqjceurb2uxef.js" async></script>
      <Footer />
      
    </div>
    
  )
}

export default Home