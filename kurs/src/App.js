import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomeLayout from './Layout_home';
import Signup from './Signup';
import Login from './Login';
import Courses from './layout_courses';
import Heimkunnskap from './heimkunnskap';
import Kroppsøving from './kroppsøving';
import Norsk from './norsk';
import Datakunnskap from './datakunnskap';


function App() {
  return (
    <Routes>
    <Route path="/" element={<HomeLayout  />} />  
    <Route path="/login" element={<Login  />} /> 
    <Route path="/signup" element={<Signup  />} /> 
    <Route path="/courses" element={<Courses  />} />
    <Route path="/Heimkunnskap" element={<Heimkunnskap  />} />
    <Route path="/Kroppsøving" element={<Kroppsøving />} />
    <Route path="/Norsk" element={<Norsk  />} />
    <Route path="/DataKunnskap" element={<Datakunnskap  />} />
  
 </Routes>
  );
}

export default App;

/* watch these tutorials later https://www.youtube.com/watch?v=8QgQKRcAUvM  https://www.youtube.com/watch?v=Ul3y1LXxzdU*/