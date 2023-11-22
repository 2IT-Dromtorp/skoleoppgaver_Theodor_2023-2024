import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Ho />} />  
    <Route path="/:Profile" element={<po />} />
 </Routes>
  );
}

export default App;
