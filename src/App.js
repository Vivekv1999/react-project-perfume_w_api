import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Login_d from './Component/Login_d';
import Login from './Component/Login';
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Signup from './Component/Signup';
import Home from './Component/Home';
import Howusecontext from './context/Howusecontext';
import Usertable from './Component/Usertable';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Signup />} />
        <Route path='/usertable' element={<Usertable />} />

        <Route path='/howusecontext' element={<Howusecontext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
