import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>

       {/* <!--newsletter strat --> */}
       <section id="newsletter" className="newsletter">
                <div className="container">
                    <div className="hm-footer-details">
                        <div className="row">
                            <div className=" col-md-3 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>information</h4>
                                    </div>{/*/.hm-foot-title*/}
                                    <div className="hm-foot-menu">
                                        <ul>
                                            <li><Link to="/about">about us</Link></li>{/*/li*/}
                                            <li><Link >contact us</Link></li>{/*/li*/}
                                         
                                            <li><Link to="/">store</Link></li>{/*/li*/}
                                        </ul>{/*/ul*/}
                                    </div>{/*/.hm-foot-menu*/}
                                </div>{/*/.hm-footer-widget*/}
                            </div>{/*/.col*/}
                            <div className=" col-md-3 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>collections</h4>
                                    </div>{/*/.hm-foot-title*/}
                                    <div className="hm-foot-menu">
                                        <ul>
                                            <li><Link to="">Mens Perfume</Link></li>{/*/li*/}
                                            <li><Link>Women Perfume</Link></li>{/*/li*/}
                                            <li><Link >Unisex Perfume</Link></li>{/*/li*/}
                                            
                                        </ul>{/*/ul*/}
                                    </div>{/*/.hm-foot-menu*/}
                                </div>{/*/.hm-footer-widget*/}
                            </div>{/*/.col*/}
                            <div className=" col-md-3 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>my accounts</h4>
                                    </div>{/*/.hm-foot-title*/}
                                    <div className="hm-foot-menu">
                                        <ul>
                                            <li><Link to="/">my account</Link></li>{/*/li*/}
                                            <li><Link >wishlist</Link></li>{/*/li*/}
                                            <li><Link >Community</Link></li>{/*/li*/}
                                            {/* <li><a href="#">order history</a></li> */}
                                            <li><Link to="/cart">my cart</Link></li>{/*/li*/}
                                        </ul>{/*/ul*/}
                                    </div>{/*/.hm-foot-menu*/}
                                </div>{/*/.hm-footer-widget*/}
                            </div>{/*/.col*/}
                            <div className=" col-md-3 col-sm-6  col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>newsletter</h4>
                                    </div>{/*/.hm-foot-title*/}
                                    <div className="hm-foot-para">
                                        <p>
                                            Subscribe  to get latest news,update and information.
                                        </p>
                                    </div>{/*/.hm-foot-para*/}
                                    <div className="hm-foot-email">
                                        <div className="foot-email-box">
                                            <input type="text" className="form-control" placeholder="Enter Email Here...." />
                                        </div>{/*/.foot-email-box*/}
                                        <div className="foot-email-subscribe">
                                            <span><i className="fa fa-location-arrow" /></span>
                                        </div>{/*/.foot-email-icon*/}
                                    </div>{/*/.hm-foot-email*/}
                                </div>{/*/.hm-footer-widget*/}
                            </div>{/*/.col*/}
                        </div>{/*/.row*/}
                    </div>{/*/.hm-footer-details*/}
                </div>{/*/.container*/}
            </section>

            {/* <!--footer start--> */}
            
     <footer id="footer" className="footer">
                <div className="container">
                    <div className="hm-footer-copyright text-center">
                        <div className="footer-social">
                            <a href="#"><i className="fa fa-facebook" /></a>
                            <a href="#"><i className="fa fa-instagram" /></a>
                            <a href="#"><i className="fa fa-linkedin" /></a>
                            <a href="#"><i className="fa fa-pinterest" /></a>
                            <a href="#"><i className="fa fa-behance" /></a>
                        </div>
                        <p>
                            ©copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
                        </p>{/*/p*/}
                    </div>{/*/.text-center*/}
                </div>{/*/.container*/}
                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title data-original-title="Back to Top" aria-hidden="true" />
                    </div>
                </div>{/*/.scroll-Top*/}
            </footer>

      
    </>
  )
}
