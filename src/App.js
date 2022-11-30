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
import Thankspage from './Component/Thankspage';
import Oredrecheckout from './Component/Oredrecheckout';
import Category_dec from './Component/Category_dec';
import { useState } from 'react';
import About from './Component/About';


function App() {
  const [cate, setcate] = useState()

  const category = (aaa) => {  ///at here data==(perametr 3 ney mate same chale 
                                          //////kem ke te to navbar mathio j ley 6 atle
    setcate(aaa)    
  }
  
  return (


    <BrowserRouter>
      <Navbar1 name={category} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Header_1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/usertable' element={<Usertable />} />
        <Route path='/product' element={<Product1 />} />
        <Route path='/category/men' element={<Category_dec name={cate} />} />
        <Route path='/category/women' element={<Category_dec name={cate} />} />
        <Route path='/category/unisex' element={<Category_dec name={cate} />} />
        <Route path='/adminprdcrud' element={<Adminprdcrud />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/addproduct/:id' element={<Addproduct />} />
        <Route path='/single/:id' element={<Singleproduct />} />
        <Route path='/cart' element={<Addtocart />} />
        <Route path='/ordercheckout' element={<Oredrecheckout />} />
        <Route path='/thankspage' element={<Thankspage />} />

        <Route path='/howusecontext' element={<Howusecontext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
