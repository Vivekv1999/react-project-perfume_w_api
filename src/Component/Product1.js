import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'



export default function Product1() {
    const [product, setproduct] = useState(null)

    useEffect(() => {
        getproduct()
    }, [product])

    const getproduct = async () => {
        let url = "https://fakestoreapi.com/products"
        let data = await fetch(url);
        let parsedata = await data.json()
        setproduct(parsedata)
        console.log(setproduct(parsedata));
    }

    return (
        <>
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    {/* <div className="section-header">
                        <h2>new arrivals</h2>
                    </div> */}
                    <div className="new-arrivals-content">
                        <div className="row">
                            {product && product.map((item) => {


                                return <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals1.png" alt="new-arrivals images" />
                                            <div className="single-new-arrival-bg-overlay" />
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <NavLink to='/cart' style={{margin:"0px 30px"}}>buy</NavLink>
                                                    <span className="lnr lnr-cart" />
                                                    <a href="#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart" />
                                                    <span className="lnr lnr-frame-expand" />
                                                </p>
                                            </div>
                                        </div>
                                        <h4><a href="#">{item.title}</a></h4>
                                        <p className="arrival-product-price">$65.00</p>
                                    </div>
                                </div>
                            })
                            }


                            {/* <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals2.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">single armchair</a></h4>
                                    <p className="arrival-product-price">$80.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals3.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">wooden armchair</a></h4>
                                    <p className="arrival-product-price">$40.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals4.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">stylish chair</a></h4>
                                    <p className="arrival-product-price">$100.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals5.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">modern chair</a></h4>
                                    <p className="arrival-product-price">$120.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals6.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">mapple wood dinning table</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals7.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="sale bg-2">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">arm chair</a></h4>
                                    <p className="arrival-product-price">$90.00</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src="assets/images/collection/arrivals8.png" alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="new-arrival-cart">
                                            <p>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a href="#">wooden bed</a></h4>
                                    <p className="arrival-product-price">$140.00</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            
            <div style={{textAlign:"auto",width:"15%",margin:"auto"}}>
                <p className='btnn' style={{ border: "2px solid Green", padding: "5px 5px", display: "flex", alignItems: "center", justifyContent: "center" }}>More Product</p>
            </div>
        </>
    )
}
