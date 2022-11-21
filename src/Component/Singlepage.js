import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Prcontext from '../context/productcontext'

export default function Singlepage() {
    const name=useContext(Prcontext)
  return (
    <>
      <div className="col-md-3 col-sm-4" style={{marginTop:"120px"}}>
        <h1>{name}</h1>
                                  <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src="assets/images/collection/arrivals1.png" alt="new-arrivals images" />
                                            <div className="single-new-arrival-bg-overlay" />
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    {/* <span className="lnr lnr-cart" /> */}
                                                    <Link to='/cart' style={{margin:"0px 30px"}}>buy</Link>
                                                    <span className="lnr lnr-cart" />
                                                    <a href="#">add <span>to </span> cart</a>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart" />
                                                    <span className="lnr lnr-frame-expand" />
                                                </p>
                                            </div>
                                        </div>
                                        {/* <h4><a href="#">{item.title}</a></h4> */}
                                        <p className="arrival-product-price">$65.00</p>
                                    </div>
                                </div>
      
    </>
  )
}
