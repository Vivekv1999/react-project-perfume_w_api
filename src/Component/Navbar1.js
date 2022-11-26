import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Navbar1() {
    const nevigate = useNavigate()

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


    return (
        <>

            <div className="container">
                <div className="top-area cccc">
                    <div className="header-area">
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
                                                        <a><button>User</button></a>
                                                    </li>
                                                    {/* <li className="search">
                                                    <a href="#"><span className="lnr lnr-magnifier" /></a>
                                                </li> */}
                                                    {/* <li className="search">
                                                    <a href="#"> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/></a>
                                                </li> */}
                                                    <li className="nav-setting">
                                                        <a href="#"><buttonn className='btnnn' onClick={handlelogout}>Logout</buttonn></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                            <span className="lnr lnr-cart" />
                                                            <span className="badge badge-bg-1">2</span>
                                                        </a>
                                                        <ul className="dropdown-menu cart-list s-cate">
                                                            <li className="single-cart-list">
                                                                <a href="#" className="photo"><img src="assets/images/collection/arrivals1.png" className="cart-thumb" alt="image" /></a>
                                                                <div className="cart-list-txt">
                                                                    <h6><a href="#">arm <br /> chair</a></h6>
                                                                    <p>1 x - <span className="price">$180.00</span></p>
                                                                </div>
                                                                <div className="cart-close">
                                                                    <span className="lnr lnr-cross" />
                                                                </div>
                                                            </li>
                                                            <li className="single-cart-list">
                                                                <a href="#" className="photo"><img src="assets/images/collection/arrivals2.png" className="cart-thumb" alt="image" /></a>
                                                                <div className="cart-list-txt">
                                                                    <h6><a href="#">single <br /> armchair</a></h6>
                                                                    <p>1 x - <span className="price">$180.00</span></p>
                                                                </div>
                                                                <div className="cart-close">
                                                                    <span className="lnr lnr-cross" />
                                                                </div>
                                                            </li>
                                                            <li className="single-cart-list">
                                                                <a href="#" className="photo"><img src="assets/images/collection/arrivals3.png" className="cart-thumb" alt="image" /></a>
                                                                <div className="cart-list-txt">
                                                                    <h6><a href="#">wooden arn <br /> chair</a></h6>
                                                                    <p>1 x - <span className="price">$180.00</span></p>
                                                                </div>
                                                                <div className="cart-close">
                                                                    <span className="lnr lnr-cross" />
                                                                </div>
                                                            </li>
                                                            <li className="total">
                                                                <span>Total: $0.00</span>
                                                                <button className="btn-cart pull-right" onClick="window.location.href='#'">view cart</button>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                                    <i className="fa fa-bars" />
                                                </button>
                                                <Link className="navbar-brand" to="/">sine<span>mkt</span>.</Link>
                                            </div>
                                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                    <li className=" scroll active"><Link to="/">home</Link></li>
                                                    <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                    <li className="scroll"><a href="#feature">features</a></li>
                                                    <li className="scroll"><a href="#blog">blog</a></li>
                                                    <li className="scroll"><a href="#newsletter">contact</a></li>
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
                                                    <NavLink className="navbar-brand" to="/">sine<span>mkt</span>.</NavLink>
                                                </div>
                                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                        <li className=" scroll active"><Link to="/">home</Link></li>
                                                        <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                        {/* <li className="scroll"><a href="#feature">features</a></li> */}
                                                        <li className="scroll"><a href="/adminprdcrud">Product Crud</a></li>
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
                                                            {/* <ul className="dropdown-menu cart-list s-cate">
                                                                <li className="single-cart-list">
                                                                    <a href="#" className="photo"><img src="assets/images/collection/arrivals1.png" className="cart-thumb" alt="image" /></a>
                                                                    <div className="cart-list-txt">
                                                                        <h6><a href="#">arm <br /> chair</a></h6>
                                                                        <p>1 x - <span className="price">$180.00</span></p>
                                                                    </div>
                                                                    <div className="cart-close">
                                                                        <span className="lnr lnr-cross" />
                                                                    </div>
                                                                </li>
                                                                <li className="single-cart-list">
                                                                    <a href="#" className="photo"><img src="assets/images/collection/arrivals2.png" className="cart-thumb" alt="image" /></a>
                                                                    <div className="cart-list-txt">
                                                                        <h6><a href="#">single <br /> armchair</a></h6>
                                                                        <p>1 x - <span className="price">$180.00</span></p>
                                                                    </div>
                                                                    <div className="cart-close">
                                                                        <span className="lnr lnr-cross" />
                                                                    </div>
                                                                </li>
                                                                <li className="single-cart-list">
                                                                    <a href="#" className="photo"><img src="assets/images/collection/arrivals3.png" className="cart-thumb" alt="image" /></a>
                                                                    <div className="cart-list-txt">
                                                                        <h6><a href="#">wooden arn <br /> chair</a></h6>
                                                                        <p>1 x - <span className="price">$180.00</span></p>
                                                                    </div>
                                                                    <div className="cart-close">
                                                                        <span className="lnr lnr-cross" />
                                                                    </div>
                                                                </li>
                                                                <li className="total">
                                                                    <span>Total: $0.00</span>
                                                                    <button className="btn-cart pull-right" onClick="window.location.href='#'">view cart</button>
                                                                </li>
                                                            </ul> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                                        <i className="fa fa-bars" />
                                                    </button>
                                                    <Link className="navbar-brand" to="/">sine<span>mkt</span>.</Link>
                                                </div>
                                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                                        <li className=" scroll active"><Link href="/">home</Link></li>
                                                        <li className="scroll"><Link to="/product">new arrival</Link></li>
                                                        {/* <li className="scroll"><a href="#feature">features</a></li> */}



                                                        <li className="scroll"><a href="#feature"><li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Dropdown
                                                            </a>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                <li><a  href="">Mens</a></li>
                                                                <li><a  href="">Women</a></li>
                                                            </ul>
                                                        </li>
                                                        </a></li>
                                                        


                                                        <li className="scroll"><a href="#blog">blog</a></li>
                                                        <li className="scroll"><a href="#newsletter">contact</a></li>
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
