import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="Sidebar_wrap">
            <div className="Sidebar_wrapper" id="Sidebar">
                <div className="Profile_wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="profile"
                        className="profile-image"
                    />
                    <h3 className="name">Phan The Cuong</h3>
                    <p className="profile_career">Online Lecture</p>
                </div>

                {/* .si */}
                <ul className="sidebar_list">
                    <div className="manage_wrapper">
                        <Link to="/" className="dash_board">
                            <li className="sidebar_dash">
                                <div className="dashboard_wrapper">
                                    <DashboardIcon />
                                    <span className="sub_dashboard">Quản lý thông tin</span>
                                </div>
                            </li>
                        </Link>

                        <Link to="/my-course">
                            <li className="sidebar_MyCourse">
                                <div className="sidebar_wrapper">
                                    <DevicesIcon />
                                    <span className="sub_dashboard">Khóa học của tôi</span>
                                </div>
                            </li>
                        </Link>
                    </div>

                    <Link to="/">
                        <li className="sidebar_home">
                            <div className="home_wrapper">
                                <HomeIcon />
                                <span className="sub_home">Trang chính</span>
                            </div>
                        </li>
                    </Link>

                    <Link to="/">
                        <li className="sidebar_logout">
                            <div className="logout_wrapper">
                                <LogoutIcon />
                                <span className="sub_logout">Đăng xuất</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
