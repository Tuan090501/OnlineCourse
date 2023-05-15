import React from 'react'
import './navbar.scss'
import logo from '../../assets/images/logo.svg'
import iconSearch from '../../assets/images/icon-search.svg'
import iconAccount from '../../assets/images/icon-account.svg'
import iconCart from '../../assets/images/icon-cart.svg'

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className="navbar__logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar__menu">
                <ul>
                    <li>SIÊU SALE 11.11</li>
                    <li>Sản phẩm</li>
                    <li>84RISING</li>
                    <li>Coolxprint</li>
                    <li>Về Coolmate</li>
                    <li>Chọn size</li>
                </ul>
            </div>
            <div className="navbar__action">
                <img src= {iconSearch} alt="" />
                <img src= {iconAccount} alt="" />
                <img src= {iconCart} alt="" />
            </div>
        </div>
        </>
        
    )
}

export default Navbar
