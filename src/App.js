// import { Dashboard } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import MyCourses from './pages/MyCourses/MyCourses';
import EditCourse from './pages/EditCourse/EditCourse';
import CreateNewCourse from './pages/CreateNewCourse/CreateNewCourse';
function App() {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="wp-app-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/my-course" element={<MyCourses />} />
                    <Route path="/create-new-course" element={<CreateNewCourse />} />
                    <Route path="/edit-my-course/:id" element={<EditCourse />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
