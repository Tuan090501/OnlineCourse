import Roadmap from "./pages/roadmap/Roadmap"
import Home from "./pages/home/Home"
import Coursedetail from "./pages/coursedetail/Coursedetail"
import Learningpage from "./pages/learningpage/Learningpage"
import Slider from "./components/slider/SlickSlider"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
        <Routes>
          <Route index element = {<Home />} />
          <Route path='/course-detail'  >
              <Route path=":id" element={<Coursedetail />} />

          </Route>
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/learning-page' element={<Learningpage />} />
          <Route path='/slider' element={<Slider />} />
        </Routes>
      </Router>
   
   
    
    )
}

export default App;