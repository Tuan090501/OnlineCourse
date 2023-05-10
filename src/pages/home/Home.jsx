import React from 'react'
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Slider from "../../components/slider/SlickSlider";
import htmlcsspro from '../../assets/images/htmlcsspro.png'
import iconvip from '../../assets/images/icon-vip.svg'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const Home = () => {
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
                    <span className="ScrollList_title">Khóa học Pro</span> 
                    <span className="ScrollList_label">Mới</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="ScrollList_body">
              <div className="index-module_row">
                <div className="index-module_l-3">
                  <div className="CommonItem_wrapper Home_courseItem">
                    <a href="/course-detail" className="CommonItem_thumb CommonItem_has-link" style={{ backgroundImage: `url(${htmlcsspro})` }}>
                      <button className="Button_btn CommonItem_cta-btn">Xem khóa học</button>
                    </a>
                    <h3 className="CommonItem_title">
                      <a href="/">HTML CSS Pro</a>
                    </h3>
                    <div className="CourseItem_pro-icon">
                      <img src={iconvip} alt="" />
                    </div>
                    <div className="price">
                      <span className="CourseItem_old-price">2.499.000đ</span>
                      <span className="CourseItem_main-price">1.299.000đ</span>
                    </div>
                  </div>
                </div>
                <div className="index-module_l-3">
                  <div className="CommonItem_wrapper Home_courseItem">
                    <a href="/" className="CommonItem_thumb CommonItem_has-link" style={{ backgroundImage: `url(${htmlcsspro})` }}>
                      <button className="Button_btn CommonItem_cta-btn">Xem khóa học</button>
                    </a>
                    <h3 className="CommonItem_title">
                      <a href="/">HTML CSS Pro</a>
                    </h3>
                    <div className="CourseItem_pro-icon">
                      <img src={iconvip} alt="" />
                    </div>
                    <div className="price">
                      <span className="CourseItem_old-price">2.499.000đ</span>
                      <span className="CourseItem_main-price">1.299.000đ</span>
                    </div>
                  </div>
                </div>
                <div className="index-module_l-3">
                  <div className="CommonItem_wrapper Home_courseItem">
                    <a href="/" className="CommonItem_thumb CommonItem_has-link" style={{ backgroundImage: `url(${htmlcsspro})` }}>
                      <button className="Button_btn CommonItem_cta-btn">Xem khóa học</button>
                    </a>
                    <h3 className="CommonItem_title">
                      <a href="/">HTML CSS Pro</a>
                    </h3>
                    <div className="CourseItem_pro-icon">
                      <img src={iconvip} alt="" />
                    </div>
                    <div className="price">
                      <span className="CourseItem_old-price">2.499.000đ</span>
                      <span className="CourseItem_main-price">1.299.000đ</span>
                    </div>
                  </div>
                </div>
                <div className="index-module_l-3">
                  <div className="CommonItem_wrapper Home_courseItem">
                    <a href="/" className="CommonItem_thumb CommonItem_has-link" style={{ backgroundImage: `url(${htmlcsspro})` }}>
                      <button className="Button_btn CommonItem_cta-btn">Xem khóa học</button>
                    </a>
                    <h3 className="CommonItem_title">
                      <a href="/">HTML CSS Pro</a>
                    </h3>
                    <div className="CourseItem_pro-icon">
                      <img src={iconvip} alt="" />
                    </div>
                    <div className="price">
                      <span className="CourseItem_old-price">2.499.000đ</span>
                      <span className="CourseItem_main-price">1.299.000đ</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
