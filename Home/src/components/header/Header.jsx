import React from 'react'
import './header.scss'
import logo from '../../assets/images/logof8.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    <h4 className="header_logoHeading">Học Lập Trình Để Đi Làm</h4>
                </div>
                <div className="header_body">
                    <div>
                        <div className="Search_wrapper" aria-expanded="false">
                            <div className="Search_searchIcon"></div>
                            <input type="text" className="Search_input" spellcheck='false' placeholder='Tìm kiếm khóa học, bài viết, video, ...' />
                        </div>
                    </div>
                </div>
                <div className="header_action">
                    <div className="navbar-actions-portal"></div>
                    {/* Phần user chưa đăng nhập */}
                    {/* <a href="/" className="header_loginBtn">Đăng nhập</a> */}
                    
                    {/* User khi đăng nhập */}
                    <div>
                        <button className="Navbar_myLearn" aria-expanded="false">Khóa học của tôi</button>
                    </div>
                    <div>
                        <div className="Navbar_actionBtn">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" 
                            class="svg-inline--fa fa-bell NavBar_action-icon" role="img" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" 
                            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 
                            354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 
                            416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 
                            354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 
                            206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 
                            493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 
                            505.3 240.1 512 224 512z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="NavBar_avatar-wrapper">
                        <div className="FallbackAvatar_avatar">
                            <img src="https://files.fullstack.edu.vn/f8-prod/user_photos/204816/62873d6d15e85.jpg" alt="" className="Navbar_avatar" />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Header