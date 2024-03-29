import React from 'react'
import './footer.scss'
import logo from '../../../assets/images/logo.svg'
import iconHotline from '../../../assets/images/icon-hotline.svg'
import iconMail from '../../../assets/images/icon-email.svg'
import iconFacebook from '../../../assets/images/icon-facebook.svg'
import iconIns from '../../../assets/images/icon-instar.svg'
import iconYoutube from '../../../assets/images/icon-youtube.svg'


const Footer = () => {
    return (
        <>
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__iner">
                    <div className="site-footer__menu">
                        <div className="footer-menu">
                            <div className="footer-menu__item">
                                <h4 className="footer-menu__title">
                                    Khám phá khóa học của F8
                                </h4>
                                <ul>
                                    <li>HTML & CSS</li>
                                    <li>JavaScript cơ bản</li>
                                    <li>JavaScript nâng cao</li>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="footer-menu__item">
                                <h4 className="footer-menu__title">
                                    Dịch vụ khách hàng
                                </h4>
                                <ul>
                                    <li>Hỏi đáp - FAQs</li>
                                    <li>Liên hệ</li>
                                    <li>Thành viên F8</li>
                                    <li>Khách hàng hài lòng 100%</li>
                                    <li>Chính sách khuyến mãi</li>
                                </ul>
                                <h4 className="footer-menu__title">
                                    Các công cụ
                                </h4>
                                <ul>
                                    <li>Tạo CV xin việc</li>
                                    <li>Rút gọn liên kết</li>
                                    <li>Clip-path maker</li>
                                </ul>
                            </div>
                            <div className="footer-menu__item">
                                <h4 className="footer-menu__title">
                                    Tài liệu - Tuyển dụng
                                </h4>
                                <ul>
                                    <li>Tuyển dụng</li>
                                    <li>Đăng ký bản quyền</li>
                                </ul>
                                <h4 className="footer-menu__title">
                                    Về F8
                                </h4>
                                <ul>
                                    <li>Giới thiệu</li>
                                    <li>Liên hệ</li>
                                    <li>Điều khoản</li>
                                    <li>Bảo mật</li>
                                </ul>
                            </div>
                            <div className="footer-menu__item">
                                <h4 className="footer-menu__title">
                                    Địa chỉ liên hệ
                                </h4>
                                <p className="footer-menu__desciption">
                                    <u>HUB Hà Nội:</u> 
                                    Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội
                                </p>
                                <p className="footer-menu__desciption">
                                    <u>HUB Tp HCM:</u> 
                                    Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__sidebar">
                        <h4 className="site-footer__title">F8 lắng nghe bạn!</h4>
                        <p className="site-footer__description">
                            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ
                            khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                        </p>
                        <a href="/" className="site-footer__btn">Gửi Ý Kiến</a>
                        <div className="footer-info">
                            <div className="footer-info__icon">
                                <img src={iconHotline} alt="" />
                            </div>
                            <div className="footer-info__content">
                                <span className="footer-info__title">Hotline</span>
                                <p className="footer-info__desciption">
                                    <a href="tel: 1900272737">1900.272737</a>
                                    <a href="tel: 02877772737">(028.7777.2737)</a>
                                </p>
                    
                            </div>
                        </div>
                        <div className="footer-info">
                            <div className="footer-info__icon">
                                <img src={iconMail} alt="" />
                            </div>
                            <div className="footer-info__content">
                                <span className="footer-info__title">Email</span>
                                <p class="footer-info__desciption">
                                    <a href="mailto: Cool@coolmate.me">ChanhBao@online.course</a>
                                </p>
                            </div>
                        </div>
                        <div className="footer-social">
                            <a href="/" className="footer-social__item">
                                <img src={iconFacebook} alt="" />
                            </a>
                            <a href="/" className="footer-social__item">
                                <img src={iconIns} alt="" />
                            </a>
                            <a href="/" className="footer-social__item">
                                <img src={iconYoutube} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="site-footer__after">
                    <div className="copyright">
                        {/* <h5 className="copyright__title">CÔNG TY TNHH BAOCOOL</h5>
                        <p className="copyright__descriptioN">Mã số doanh nghiệp: 19H1120066. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Phú Yên cấp lần đầu ngày 10/11/2022.</p> */}
                    </div>
                    <div className="site-footer__logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>


    )
}

export default Footer
