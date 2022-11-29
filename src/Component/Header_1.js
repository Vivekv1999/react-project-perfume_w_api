import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Newarrival from './Newarrival'

export default function Header_1() {
    return (
        <>
            {/* 6-241 ----header,,,  305-section,,,307 new arrival */}
            <header id="home" className="welcome-hero">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    {/*/.carousel-indicator */}
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to={0} className="active"><span className="small-circle" /></li>
                        <li data-target="#header-carousel" data-slide-to={1}><span className="small-circle" /></li>
                        <li data-target="#header-carousel" data-slide-to={2}><span className="small-circle" /></li>
                    </ol>{/* /ol*/}
                    {/*/.carousel-indicator */}
                    {/*/.carousel-inner */}
                    <div className="carousel-inner" role="listbox">
                        {/* .item */}
                        <div className="item active">
                            <div className="single-slide-item slide1">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h4>great design collection</h4>
                                                        <h2>Hugo Boss Femme eau DE perfuem for WOMEN </h2>
                                                        <p>
                                                            Hugo Boss Femme Edp For Women is casual, sparkling and joyful.  Its opening is composed of tangerine and black currant with a touch of freesiacomposed of white flowers, Madagascar jasmine, lily and rose. The long lasting fragment.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 399.00
                                                                <del>$ 499.00</del>
                                                            </p>
                                                        </div>
                                                        <LinkContainer to='/product'>
                                                        <button className="btn-cart welcome-add-cart">
                                                            <span className="lnr lnr-plus-circle" />
                                                            More<span> product</span>
                                                        </button>
                                                        </LinkContainer>
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                            <div className="col-sm-5">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="assets/images/slider/slider1.png" alt="slider image" />
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                        </div>{/*/.row*/}
                                    </div>{/*/.welcome-hero-content*/}
                                </div>{/* /.container*/}
                            </div>{/* /.single-slide-item*/}
                        </div>{/* /.item .active*/}
                        <div className="item">
                            <div className="single-slide-item slide2">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h4>great design collection</h4>
                                                        <h2>Aqua Mission Wave Unisex Perfume</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 199.00
                                                                <del>$ 299.00</del>
                                                            </p>
                                                        </div>
                                                        <LinkContainer to='/product'>
                                                        <button className="btn-cart welcome-add-cart">
                                                            <span className="lnr lnr-plus-circle" />
                                                            More<span> product</span>
                                                        </button>
                                                        </LinkContainer>
                                                        
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                            <div className="col-sm-5">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="assets/images/slider/slider2.png" alt="slider image" />
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                        </div>{/*/.row*/}
                                    </div>{/*/.welcome-hero-content*/}
                                </div>{/* /.container*/}
                            </div>{/* /.single-slide-item*/}
                        </div>{/* /.item .active*/}
                        <div className="item">
                            <div className="single-slide-item slide3">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h4>great design collection</h4>
                                                        <h2>Mont Blanc Legend Carolina Herrera For Men</h2>
                                                        <p>
                                                            A fresh fougère fragrance with top notes that are lively, bright and clean, heart notes that are magnetic, and dry notes that create an unforgettable signature. laboris nisi ut aliquip.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 299.00
                                                                <del>$ 399.00</del>
                                                            </p>
                                                        </div>
                                                        <LinkContainer to='/product'>
                                                        <button className="btn-cart welcome-add-cart" >
                                                            <span className="lnr lnr-plus-circle" />
                                                            More<span> product</span> 
                                                        </button>
                                                        </LinkContainer>
                                                        {/* <button className="btn-cart welcome-add-cart welcome-more-info" onClick="window.location.href='#'">
                                                            more info
                                                        </button> */}
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                            <div className="col-sm-5">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="assets/images/slider/slider3.png" alt="slider image" />
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                        </div>{/*/.row*/}
                                    </div>{/*/.welcome-hero-content*/}
                                </div>{/* /.container*/}
                            </div>{/* /.single-slide-item*/}
                        </div>{/* /.item .active*/}
                    </div>{/* /.carousel-inner*/}
                </div>
            </header>

            {/* <!--populer-products start --> */}
            <section id="populer-products" className="populer-products">
                <div className="container">
                    <div className="populer-products-content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-populer-products">
                                    <div className="single-populer-product-img mt40">
                                        <img src="assets/images/populer-products/p1.webp" alt="populer-products images" />
                                    </div>
                                    <h2><a href="#">Women perfume</a></h2>
                                    <div className="single-populer-products-para">
                                        <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-populer-products">
                                    <div className="single-inner-populer-products">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <div className="single-inner-populer-product-img">
                                                    <img src="assets/images/populer-products/p2.webp" alt="populer-products images" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="single-inner-populer-product-txt">
                                                    <h2>
                                                        <a href="#">
                                                            Unisex Perfume
                                                        </a>
                                                    </h2>
                                                    <p>
                                                        Lattafa Maali Thameen For Men And Women
                                                    </p>
                                                    <div className="populer-products-price">
                                                        <h4>Sales Start from <span>$99.00</span></h4>
                                                    </div>
                                                    <button className="btn-cart welcome-add-cart populer-products-btn" onClick="window.location.href='#'">
                                                        discover more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-populer-products">
                                    <div className="single-populer-products">
                                        <div className="single-populer-product-img">
                                            <img src="assets/images/populer-products/p3.webp" alt="populer-products images" />
                                        </div>
                                        <h2><a href="#">Mens perfume</a></h2>
                                        <div className="single-populer-products-para">
                                            <p>Oriflame Sweden Possess Man Eau De Toilette...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/.container*/}
            </section>


            {/* <!--new-arrivals start --> */}
            <Newarrival />



            {/* <!--sofa-collection start --> */}
            <section id="sofa-collection">
                <div className="owl-carousel owl-theme" id="collection-carousel">
                    <div className="sofa-collection collectionbg1">
                        <div className="container">
                            <div className="sofa-collection-txt">
                                <h2>unlimited sofa collection</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="sofa-collection-price">
                                    <h4>strting from <span>$ 199</span></h4>
                                </div>
                                <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick="window.location.href='#'">
                                    view more
                                </button>
                            </div>
                        </div>
                    </div>{/*/.sofa-collection*/}
                    <div className="sofa-collection collectionbg2">
                        <div className="container">
                            <div className="sofa-collection-txt">
                                <h2>unlimited dainning table collection</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="sofa-collection-price">
                                    <h4>strting from <span>$ 299</span></h4>
                                </div>
                                <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick="window.location.href='#'">
                                    view more
                                </button>
                            </div>
                        </div>
                    </div>{/*/.sofa-collection*/}
                </div>{/*/.collection-carousel*/}
            </section>

            {/* <!--feature start --> */}
            <section id="feature" className="feature">
                <div className="container">
                    <div className="section-header">
                        <h2>featured products</h2>
                    </div>{/*/.section-header*/}
                    <div className="feature-content">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-feature">
                                    <img src="assets/images/features/f1.png" alt="feature image" />
                                    <div className="single-feature-txt text-center">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <span className="spacial-feature-icon"><i className="fa fa-star" /></span>
                                            <span className="feature-review">(45 review)</span>
                                        </p>
                                        <h3><a href="#">designed sofa</a></h3>
                                        <h5>$160.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-feature">
                                    <img src="assets/images/features/f2.webp" alt="feature image" />
                                    <div className="single-feature-txt text-center">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <span className="spacial-feature-icon"><i className="fa fa-star" /></span>
                                            <span className="feature-review">(45 review)</span>
                                        </p>
                                        <h3><a href="#">dinning table </a></h3>
                                        <h5>$200.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-feature">
                                    <img src="assets/images/features/f3.webp" alt="feature image" />
                                    <div className="single-feature-txt text-center">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <span className="spacial-feature-icon"><i className="fa fa-star" /></span>
                                            <span className="feature-review">(45 review)</span>
                                        </p>
                                        <h3><a href="#">chair and table</a></h3>
                                        <h5>$100.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-feature">
                                    <img src="assets/images/features/f4.png" alt="feature image" />
                                    <div className="single-feature-txt text-center">
                                        <p>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <span className="spacial-feature-icon"><i className="fa fa-star" /></span>
                                            <span className="feature-review">(45 review)</span>
                                        </p>
                                        <h3><a href="#">modern arm chair</a></h3>
                                        <h5>$299.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/.container*/}
            </section>

            {/* <!-- clients strat --> */}
            <section id="clients" className="clients">
                <div className="container">
                    <div className="owl-carousel owl-theme" id="client">
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/clients/c1.png" alt="brand-image" />
                            </a>
                        </div>{/*/.item*/}
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/clients/c2.png" alt="brand-image" />
                            </a>
                        </div>{/*/.item*/}
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/clients/c3.png" alt="brand-image" />
                            </a>
                        </div>{/*/.item*/}
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/clients/c4.png" alt="brand-image" />
                            </a>
                        </div>{/*/.item*/}
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/clients/c5.png" alt="brand-image" />
                            </a>
                        </div>{/*/.item*/}
                    </div>{/*/.owl-carousel*/}
                </div>{/*/.container*/}
            </section>

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
                                            <li><a href="#">about us</a></li>{/*/li*/}
                                            <li><a href="#">contact us</a></li>{/*/li*/}
                                            <li><a href="#">news</a></li>{/*/li*/}
                                            <li><a href="#">store</a></li>{/*/li*/}
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
                                            <li><a href="#">wooden chair</a></li>{/*/li*/}
                                            <li><a href="#">royal cloth sofa</a></li>{/*/li*/}
                                            <li><a href="#">accent chair</a></li>{/*/li*/}
                                            <li><a href="#">bed</a></li>{/*/li*/}
                                            <li><a href="#">hanging lamp</a></li>{/*/li*/}
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
                                            <li><a href="#">my account</a></li>{/*/li*/}
                                            <li><a href="#">wishlist</a></li>{/*/li*/}
                                            <li><a href="#">Community</a></li>{/*/li*/}
                                            <li><a href="#">order history</a></li>{/*/li*/}
                                            <li><a href="#">my cart</a></li>{/*/li*/}
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
