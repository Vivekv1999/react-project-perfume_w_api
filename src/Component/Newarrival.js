import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'


const url = "http://localhost:3008/product";
export default function Newarrival() {
    const [productdata, setproductdata] = useState([])

    useEffect(() => {
        getproduct(url)
    }, [productdata])

    const getproduct = async () => {
        const res = await axios.get(url)
        const product=await res.data
        setproductdata(product)
        console.log(productdata);


        // fetch("http://localhost:3008/product")
        //     .then(res => res.json())
        //     .then((result) => {
        //         setproductdata(result)
        //         console.log(productdata);
        //     })
    }


    return (
        <>
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    <div className="section-header">
                        <h2>new arrivals</h2>
                    </div>
                    <div className="new-arrivals-content">
                        <div className="row">
                            {productdata.map((item) => {
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
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: "auto", width: "15%", margin: "auto", cursor: "pointer" }}>
                <p className='btnn' style={{ border: "2px solid Green", padding: "5px 5px", display: "flex", alignItems: "center", justifyContent: "center" }}>More Product</p>
            </div>

            {/* <button className='btn my-0 ' style={{color:"black",border:"2px solid #e99c2e",backgroundColor:"#e99c2e",marginTop:"0px",marginLeft:"0px",marginRight:"0px",marginBottom:"0px"}}>more</button> */}


        </>
    )
}
