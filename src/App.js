import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
// import Home from './Component/Home';
import Howusecontext from './context/Howusecontext';
import Navbar1 from './Component/Navbar1';
import Header_1 from './Component/Header_1';
import Usertable from './Component/Usertable';
import Product1 from './Component/Product1';
import Addtocart from './Component/Addtocart';
import Singleproduct from './Component/Singleproduct';
import Adminprdcrud from './Component/Adminprdcrud';
import Addproduct from './Component/Addproduct';


function App() {
  return (

    <BrowserRouter>
    <Navbar1 />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Header_1 />} />
        <Route path='/usertable' element={<Usertable />} />
        <Route path='/product' element={<Product1 />} />
        <Route path='/adminprdcrud' element={<Adminprdcrud />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/single/:id' element={<Singleproduct />} />
        <Route path='/cart' element={<Addtocart />} />

        <Route path='/howusecontext' element={<Howusecontext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
