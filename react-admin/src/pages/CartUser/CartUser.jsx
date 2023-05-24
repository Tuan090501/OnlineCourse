import { Box, Divider, Typography } from "@mui/material"
import React, { useState, useContext, useEffect } from "react"
import Header from "../../components/user/header/Header"
import Footer from "../../components/user/footer/Footer"
import "./CartUser.scss"
import Grid from "@mui/material/Unstable_Grid2"
import { useNavigate } from "react-router-dom"
import { Cartcontext } from "../../context/CartContext"
import axios from "axios"



function Cart() {
  const GlobalState = useContext(Cartcontext)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch
  
  const [cart, setCart] = useState(state.length)
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    
  //  const data =  axios.post(`http://localhost:8000/api/orders`,{

  //  })

    // navigate('/cart/checkout')
  }
  const handleRemoveCourse = (id) =>(e)=>{ 
    dispatch({type:"REMOVE",payload:id})
    setCart(state.length)
  }


  const getTotalPrice = (arr)=>{
    let total = 0;
    arr.forEach((item)=>{
      total+=item.price
    })
    return total
  }
 
  const total = getTotalPrice(state);



 
  useEffect(()=>{
    
  },[])
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
          {
            GlobalState.state.length===0?"Không có khóa học nào trong giỏ hàng":`Có ${ GlobalState.state.length} khóa học trong giỏ hàng`
          }
        </Typography>
        {GlobalState.state.length === 0 ? (
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

              <button className='keep-shopping' onClick={()=>{ navigate('/')}}>Keep Shopping</button>
            </Box>
          </Box>
        ) : (
          <Grid
            className='cart__courses-wrapper'
            container
            spacing={4}
          >
            <Grid
              className='cart__course-list'
              item
              xs={9}
            >
              
              {
                state.map((item,index)=>{
                  return <Box>
                    <Divider />
                    <Box className='cart_course'>
                      <img src={`${item.img}`} className='cart_course-img'></img>
                      <Box className='cart_course-detail'>
                        <Typography className='cart_course-name'>{`${item.course_name }`}</Typography>
                        <Typography className='cart_course-author'>By {`${item.lecturer.user_name}`}</Typography>

                      </Box>
                      <button className='cart_course-remove' onClick={handleRemoveCourse(item.id)}>Remove</button>
                      <Typography className='cart_course-price'>đ{`${item.price}`}</Typography>
                    </Box>
                  </Box>
                })
              }
            </Grid>
            <Grid
              className='cart__course-checkout'
              item
              xs={3}
            >
              <Typography variant='h4'>
                Tổng tiền:  {`${getTotalPrice(state)}`}đ
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
