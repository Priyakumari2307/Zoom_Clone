import './App.css';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Authentication from './pages/authentication';
import HomeComponent from "./pages/home";
import LandingPage from "./pages/landingPage";
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import History from './pages/history';

function App(){
    return(
        <div className='App'>
        <Router>
            <AuthProvider>

           
            <Routes>
                {/* <Route path='/home' element= /> */}
                <Route path='/' element={<LandingPage />} />
                <Route path='/auth' element={<Authentication/>} />
                <Route path='/home' element={<HomeComponent/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path='/:url' element={<VideoMeetComponent/>}/>
            </Routes>
            </AuthProvider>
        </Router>
        </div>
    );
}
export default App;