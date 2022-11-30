import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useCartcontext } from '../context/Cartcontext'


export default function Navbar1(props) {
    const nevigate = useNavigate()
    const { cart, cart_item, cart_amount } = useCartcontext()
    console.log(cart, "navbarrr cart");


    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);

    const handlelogout = (e) => {
        e.preventDefault()
        console.log('cccc');

        if (localStorage.getItem('user')) {
            console.log('cccciiiiiiiiiiii');
            localStorage.removeItem('user')
            nevigate('/')
        }
        else {
            localStorage.removeItem('admin')
            nevigate('/')
        }

    }

    const category_define = "men";          ////// same name db.json ma jovu jaruri
    const category_define2 = "women";      //// same name db.json ma jovu jaruri
    const category_define3 = "unisex";     ///// same name db.json ma jovu jaruri


    return (
        <>

            <div className="container" >
                <div className="top-area cccc">
                    <div className="header-area">
                        {/* <h1>mens</h1> */}
                        <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop={70} data-minus-value-mobile={55} data-speed={1000}>

                            <div className="top-search">
                                <div className="container">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-search" /></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                                    </div>
                                </div>
                            </div>


                            {
                                localStorage.getItem('user') ?

                                    <>
                                        <div className="container heighttt">
                                            <div className="attr-nav">
                                                <ul>
                                                    <li className="search">
                                                        <a><button>{user.uname}</button></a>
                                                    </li>
                                                    <li className="nav-setting">
                                                        <a href="#"><buttonn className='btnnn' onClick={handlelogout}>Logout</buttonn></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                                            <span className="lnr lnr-cart" />
                                                            <span className="badge badge-bg-1">{cart_item}</span>
                                                        </a>
                                                        {/* smalll cart  in navbarrr */}

                                                        <ul className="dropdown-menu cart-list s-cate">

                                                            {cart && cart.map((item) => {
                                                                // const title = item.title;
                                                                const titleee = item.title ? item.title.slice(0, 32) : null
                                                                return <li className="single-cart-list">
                                                                    <a href="#" className="photo"><img src={'/' + item.image} className="cart-thumb" alt="image" /></a>
                                                                    <div className="cart-list-txt">
                                                                        <h6><a>{titleee}...</a></h6>
                                                                        <p>{item.quentity} * <span className="price">{item.price} $</span></p>
                                                                        <span className="price"></span>
                                                                    </div>
                                                                    <div className="cart-close" style={{ marginTop: "35px", color: "black" }}>
                                                                        {item.price} $
                                                                    </div>
                                                                </li>
                                                            })}


                                                            <li className="total">
                                                                <span>Total: {cart_amount} $</span>
                                                                <Link to='/cart' style={{ float: 'right', backgroundColor: "#e99c2e", fontSize: "15px", borderRadius: "5px", padding: "5px" }}>view cart</Link>
                                                            </li>
                                                        </ul>


                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                                    <i className="fa fa-bars" />
                                                </button>
                                                <Link className="navbar-brand" to="/">Scent<span>store</span>.</Link>
                                            </div>
                                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                    <li className=" scroll active"><Link to="/">home</Link></li>
                                                    <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                    <li className="scroll">
                                                        <a href="#feature">
                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    category
                                                                </a>
                                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                    <li><Link to="/category/men" onClick={() => {
                                                                        props.name(category_define)
                                                                        console.log(category_define, "in navbarrrr");
                                                                    }}>Mens</Link></li>

                                                                    <li><Link to="/category/women" onClick={() => {
                                                                        props.name(category_define2)
                                                                    }}>Women</Link></li>
                                                                    <li><Link to="/category/unisex" onClick={() => {
                                                                        props.name(category_define3)
                                                                    }}>Unisex</Link></li>
                                                                </ul>
                                                            </li>
                                                        </a>
                                                    </li>
                                                    {/* <li className="scroll"><a href="#feature">features</a></li> */}
                                                    {/* <li className="scroll"><a href="#blog">blog</a></li> */}
                                                    <li className="scroll"><Link to="/about">About</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    (localStorage.getItem('admin') ?
                                        <>
                                            <div className="container heighttt">
                                                <div className="attr-nav">
                                                    <ul>
                                                        <li className="search">
                                                            <a href="#">Admin</a>
                                                        </li>
                                                        <li className="nav-setting">
                                                            <a href="#" onClick={handlelogout}>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-product="#navbar-menu">
                                                        <i className="fa fa-bars" />
                                                    </button>
                                                    <NavLink className="navbar-brand" to="/">Scent<span>store</span>.</NavLink>
                                                </div>
                                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                        <li className=" scroll active"><Link to="/">home</Link></li>
                                                        <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                        {/* <li className="scroll"><a href="#feature">features</a></li> */}
                                                        <li className="scroll"><Link to="/adminprdcrud">Product Crud</Link></li>
                                                        <li className="scroll"><Link to="/usertable">Crude</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="container heighttt">
                                                <div className="attr-nav">
                                                    <ul>
                                                        <li className="search">
                                                            <Link to="/Login">Login</Link>
                                                        </li>
                                                        <li className="nav-setting">
                                                            <Link to="/signup">Signup</Link>
                                                        </li>
                                                        <li className="dropdown">
                                                            <Link to="/login" className="dropdown-toggle" data-toggle="dropdown">
                                                                <span className="lnr lnr-cart" />
                                                                <span className="badge badge-bg-1">{0}</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                                        <i className="fa fa-bars" />
                                                    </button>
                                                    <Link className="navbar-brand" to="/">Scent<span>store</span>.</Link>
                                                </div>
                                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                        <li className=" scroll active"><Link href="/">home</Link></li>
                                                        <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                        {/* <li className="scroll"><a href="#feature">features</a></li> */}

                                                        <li className="scroll"><a href="#feature"><li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                category
                                                            </a>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                <li><Link to="/category/men" onClick={() => {
                                                                        props.name(category_define)
                                                                        console.log(category_define, "in navbarrrr");
                                                                    }}>Mens</Link></li>

                                                                <li><Link to="/category/women" onClick={() => {
                                                                        props.name(category_define2)
                                                                    }}>Women</Link></li>
                                                                <li><Link to="/category/unisex" onClick={() => {
                                                                        props.name(category_define3)
                                                                    }}>Unisex</Link></li>
                                                            </ul>
                                                        </li>
                                                        </a>
                                                        </li>



                                                        <li className="scroll"><Link to="/about">About</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </nav>
                    </div>
                    <div className="clearfix" />
                </div>

            </div>
        </>
    )
}
