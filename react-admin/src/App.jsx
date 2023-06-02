import { Routes, Route } from "react-router-dom"
import LoginPage from "./scenes/LoginPage/LoginPage"
import Register from "./scenes/RegisterPage/Register"
import HomePage from "./scenes/HomePage"
import ForgotPassword from "./scenes/ForgotPassword/ForgotPassword"
import ForgotPasswordEnterOTP from "./scenes/ForgotPassword/ForgotPasswordEnterOTP"
import ForgotPasswordChangePassword from "./scenes/ForgotPassword/ForgotPasswordChangePassword"

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='*'
          element={<HomePage />}
        ></Route>

        <Route
          path='/login'
          element={<LoginPage />}
        ></Route>

        <Route
          path='/register'
          element={<Register />}
        ></Route>

        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        ></Route>

        <Route
          path='/forgot-password/enterOTP'
          element={<ForgotPasswordEnterOTP />}
        ></Route>

        <Route
          path='/forgot-password/changePassword'
          element={<ForgotPasswordChangePassword />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
