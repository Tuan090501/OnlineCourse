import "./App.scss"

import { Routes, Route } from "react-router-dom"
import LoginPage from "./scenes/LoginPage/LoginPage"

import HomePage from "./scenes/HomePage"

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
      </Routes>
    </div>
  )
}

export default App
