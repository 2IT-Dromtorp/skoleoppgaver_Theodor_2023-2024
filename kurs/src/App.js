import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomeLayout from './Layout_home';
import Signup from './Signup';
import Login from './Login';


function App() {
  return (
    <Routes>
    <Route path="/" element={<HomeLayout  />} />  
    <Route path="/login" element={<Login  />} /> 
    <Route path="/signup" element={<Signup  />} /> 
 </Routes>
  );
}

export default App;

/* watch these tutorials later https://www.youtube.com/watch?v=8QgQKRcAUvM  https://www.youtube.com/watch?v=Ul3y1LXxzdU*/