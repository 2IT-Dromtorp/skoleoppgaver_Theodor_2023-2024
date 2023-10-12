import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import  Profile, {profile} from './Profile'
import namesData from './profile.json';
import Home from './home';


function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/:Profile" element={<Profile />} />
 </Routes>
  );
}

export default App;
