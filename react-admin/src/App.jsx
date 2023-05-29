import { Routes, Route } from "react-router-dom"
import LoginPage from "./scenes/LoginPage/LoginPage"
import Register from "./scenes/RegisterPage/Register"
import HomePage from "./scenes/HomePage"
import ForgotPassword from "./scenes/ForgotPassword/ForgotPassword"
import ForgotPasswordEnterOTP from "./scenes/ForgotPassword/ForgotPasswordEnterOTP"
import ForgotPasswordChangePassword from "./scenes/ForgotPassword/ForgotPasswordChangePassword"
import Home from "./pages/home/Home"

import Roadmap from "./pages/roadmap/Roadmap"
import Coursedetail from "./pages/coursedetail/Coursedetail"
import Learningpage from "./pages/learningpage/Learningpage"
import Slider from "./components/user/slider/SlickSlider"
import Cart from "./pages/CartUser/CartUser"

import Dashboard from "./screens/Dashboard/Dashboard"
import MyCourses from "./screens/MyCourses/MyCourses"
import EditCourse from "./screens/EditCourse/EditCourse"
import CreateNewCourse from "./screens/CreateNewCourse/CreateNewCourse"
import RegisterEnterOTP from "./scenes/RegisterPage/RegisterEnterOTP"

import { PayPalScriptProvider} from "@paypal/react-paypal-js";


function App() {
  return (
   
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>

        <Route
          path='/lecturer'
          element={<Dashboard />}
        ></Route>

        <Route
          path='/lecturer/my-course'
          element={<MyCourses />}
        ></Route>

        <Route
          path='/lecturer/edit-my-course/'
          element={<EditCourse />}
        >
          <Route path=':id'  element={<EditCourse />}/>
        </Route>

        <Route
          path='/lecturer/create-new-course'
          element={<CreateNewCourse />}
        ></Route>

        <Route
          path='/cart'
          element={<Cart />}
        ></Route>

        <Route path='/course-detail'>
          <Route
            path=':id'
            element={<Coursedetail />}
          />
        </Route>
        <Route
          path='/roadmap'
          element={<Roadmap />}
        />
        <Route
          path='/learning-page'
          element={<Learningpage />}
        />
        <Route
          path='/slider'
          element={<Slider />}
        />

        <Route
          path='/admin/*'
          element={<HomePage />}
        ></Route>

        <Route
          exact
          index
          path='/login'
          element={<LoginPage />}
        ></Route>

        <Route
          path='/register'
          element={<Register />}
        ></Route>

        <Route
          path='/register/enterOTP'
          element={<RegisterEnterOTP />}
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
