import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Login_d from './Component/Login_d';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Signup from './Component/Signup';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Login_d/> */}
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Signup />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
