import React from 'react'
import './Header.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <a href="/">
                        <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
                    </a>
                    <div>   </div>
                    <h4 className="header_logoHeading">Go back to homepage</h4>
                </div>
                
                <div className="header_body">
                    <div>
                        <div className="Search_wrapper" aria-expanded="false">
                            <div className="Search_searchIcon"></div>
                            <input type="text" className="Search_input" spellcheck='false' placeholder='Tìm kiếm khóa học, bài viết, video, ...' />
                        </div>
                    </div>
                </div>

                <div className="header_right">
                    <a href="/" className='Notification_Icon'>
                        <NotificationsIcon />
                    </a>

                    <a href="/" className="Shopping_Cart">
                        <ShoppingCartIcon />
                    </a>
                        
                    <a href="/" className="right_wrapper">
                        <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" className="profile_img"/>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Header