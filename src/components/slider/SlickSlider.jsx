import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss'

const FullstackSlider = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {props.slides.map((slide, index) => (
        <div key={index} className="fullstack-slide">
          <div className="Slideshow_item">
            <div className="Slideshow_left">
              <h2 className="Slideshow_heading">
                <a href="">{slide.title}</a> 
              </h2>
              <p className="Slideshow_decs">{slide.description}</p>
            </div>
            <div className="Slideshow_right">
              <a href="">
                <img className='Slideshow_img' src={slide.image} alt={slide.title} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const SlickSlider = () => {
  const slides = [
    {
      image: 'https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png',
      title: 'Học lập trình Fullstack cùng chuyên gia',
      description:
        'Khóa học sẽ giúp bạn trở thành một lập trình viên Fullstack chuyên nghiệp, có khả năng xây dựng được cả phần mềm và ứng dụng web.',
    },
    {
      image: 'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
      title: 'Đào tạo theo mô hình thực tế',
      description:
        'Khóa học được thiết kế dựa trên các dự án thực tế để giúp bạn có khả năng xây dựng được sản phẩm thực tế.',
    },
    {
      image: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
      title: 'Hỗ trợ tuyển dụng sau khóa học',
      description:
        'Sau khi hoàn thành khóa học, bạn sẽ được hỗ trợ tuyển dụng vào các công ty đối tác của Fullstack.',
    },
  ];

  return (
    <div>
      <FullstackSlider slides={slides} />
    </div>
  );
};

export default SlickSlider;