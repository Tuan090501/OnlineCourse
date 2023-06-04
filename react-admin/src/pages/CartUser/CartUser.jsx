import { Box, Divider, Typography } from "@mui/material"
import React, { useState, useContext, useEffect } from "react"
import Header from "../../components/user/header/Header"
import Footer from "../../components/user/footer/Footer"
import "./CartUser.scss"
import Grid from "@mui/material/Unstable_Grid2"
import { useNavigate } from "react-router-dom"
import { Cartcontext } from "../../context/CartContext"
import axios from "axios"
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";




function Cart() {
  const GlobalState = useContext(Cartcontext)
  const state = GlobalState.state
  console.log(state)
  const dispatch = GlobalState.dispatch
  console.log(state)
  const [cart, setCart] = useState(state.length)
  const navigate = useNavigate()
  const handleCheckout = (total,state)=>{
    const data = []
    for (let i = 0; i < state.length; i++) {
        data.push({
          course_id: state[i].id,
          price: state[i].price
        })
      
    }
    const payment = {
      total : total,
      user_id: localStorage.getItem('id'),
      order_detail: data,
  

    }
    const pay = axios.post(`http://localhost:8000/api/orders`,payment)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
    }
    
  //  const data =  axios.post(`http://localhost:8000/api/orders`,{

  //  })

    // navigate('/cart/checkout')
 
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

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (total,state) => {
    console.log(state)
    const data = []
    for (let i = 0; i < state.length; i++) {
        data.push({
          course_id: state[i].id,
          price: state[i].price
        })
      
    }
    const payment = {
      total : total,
      user_id: localStorage.getItem('id'),
      order_detail: data
    }
      axios.post(`http://localhost:8000/api/orders`,payment)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  
 


   

    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

   
    
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
    
  }
  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

 
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
                      <Typography className='cart_course-price'>${`${item.price}`}</Typography>
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
                Tổng tiền:  {`${getTotalPrice(state)}`}$
              </Typography>
              <PayPalScriptProvider options={{ "client-id": "AdrUj8lKOMQ55mATfM89HcpENy7XpwkpftfSTFE5e3s3lbwryADM8lqSUsYzAPhsJFjNeI-FJpw0Re7-" }}>
                <PayPalButtons
                    style={{ 
                        color:"silver",
                        layout:"horizontal",
                        tagline: false,
                        shape: "pill"

                     }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              description: state.description,
                              amount: {
                                value: total
                              }
                            }
                          ]
                        });
                      }}

                    onApprove={async (data, actions) => {
                        const order = await actions.order.capture(); 
                        console.log("order", order);
                      
                        handleApprove(total,state);
                      }}

                    onError={(err) => {
                        setError(err);
                        console.error("PayPal Checkout onError", err);
                      }}
                    
                    onCancel={() => {
                        // Display cancel message, modal or redirect user to cancel page or back to cart
                      }}

                    onClick={(data, actions) => {
                        // Validate on button click, client or server side
                        const hasAlreadyBoughtCourse = false;
                      
                        if (hasAlreadyBoughtCourse) {
                          setError(
                            "You already bought this course. Go to your account to view your list of courses."
                          );
                      
                          return actions.reject();
                        } else {
                          return actions.resolve();
                        }
                      }}
                      
                />
              </PayPalScriptProvider>
              <button className='checkout-btn' onClick={()=>handleCheckout(total,state)}>Thanh toán</button>
            </Grid>
          </Grid>
        )}
      </Box>
      <Footer />
    </Box>
  )
}

export default Cart
