import { Box, Divider, Typography } from "@mui/material"
import React, { useState, useContext } from "react"
import Header from "../../components/user/header/Header"
import Footer from "../../components/user/footer/Footer"
import "./CartUser.scss"
import Grid from "@mui/material/Unstable_Grid2"
import { useNavigate } from "react-router-dom"
import { Cartcontext } from "../../context/CartContext"



function Cart() {
  const GlobalState = useContext(Cartcontext)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch
  const [cart, setCart] = useState([1, 2])
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    navigate('/cart/checkout')
  }
  return (
    <Box>
      <Header />
      <Box className='cart-container'>
        <Typography
          variant='h3'
          className='cart__heading'
        >
          Giỏ Hàng
        </Typography>
        <Typography
          variant='h6'
          className='cart__quantity'
        >
          Không có khóa học nào trong giỏ hàng
        </Typography>
        {cart.length === 0 ? (
          <Box
            className='cart__courses-wrapper'
            sx={{
              border: "1px solid #ddd",
            }}
          >
            <Box className='cart__course-list'>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "40px",
                }}
              >
                <img
                  src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg'
                  alt='0 course cart'
                  className='cart__zero-course-img'
                />
              </Box>

              <Typography>
                Không có khóa học nào trong giỏ hàng! Keep Shopping
              </Typography>

              <button className='keep-shopping'>Keep Shopping</button>
            </Box>
          </Box>
        ) : (
          <Grid
            className='cart__courses-wrapper'
            container
            spacing={2}
          >
            <Grid
              className='cart__course-list'
              item
              xs={9}
            >
              <Divider />
              {
                state.map((item,index)=>{
                  return <div>hello</div>
                })
              }
            </Grid>
            <Grid
              className='cart__course-checkout'
              item
              xs={3}
            >
              <Typography variant='h4'>
                Tổng tiền:{" "}
                <span style={{ fontWeight: "bold" }}>đ1,225,500</span>
              </Typography>
              <button className='checkout-btn' onClick={handleCheckout}>Thanh toán</button>
            </Grid>
          </Grid>
        )}
      </Box>
      <Footer />
    </Box>
  )
}

export default Cart
