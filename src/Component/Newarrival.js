import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AiFillThunderbolt } from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import Itemcontext from '../context/Itemcontext';
import Prcontext from '../context/productcontext';
import { LinkContainer } from 'react-router-bootstrap';
import { useCartcontext } from '../context/Cartcontext';


export default function Newarrival() {
    const quentity = 1
    const { diplayproduct } = useContext(Prcontext)
    console.log(diplayproduct, "profucyvnnnnnnnnnnn")
    const { cartproduct } = useCartcontext()

    // const {productdata}=name
    // const url = "http://localhost:3008/product";
    // const [productdata, setproductdata] = useState([])
    // useEffect(() => {
    //     getproduct(url)
    // },[])
    // const getproduct = async () => {
    //     const res = await axios.get(url)
    //     const product = await res.data
    //     setproductdata(product)
    //     console.log(productdata,"i am newrraivas");

    ////////////////////////////// 2222 nd method ///////////////////////////////////
    // fetch("http://localhost:3008/product")
    //     .then(res => res.json())
    //     .then((result) => {
    //         setproductdata(result)
    //         console.log(productdata);
    //     })
    //   }


    return (
        <>
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    <div className="section-header">
                        <h2>new arrivals</h2>
                    </div>
                    <div className="new-arrivals-content">
                        <div className="row">
                            {diplayproduct && diplayproduct.map((item) => {
                                const titleee = item.title ? item.title.slice(0, 40) : null
                                const product = item.id ? item :null
                                //return  item.id <= 8  ?   ===/////usecontex ma educe rvapro jethi aa logic ni jarur nathu have
                                return <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src={item.image} alt="new-arrivals images" />
                                            <div className="single-new-arrival-bg-overlay" />
                                            <div className="sale bg-1">
                                                <p>sale</p>
                                            </div>
                                            <div className="new-arrival-cart">
                                                <p>
                                                    <Link to='/cart' onClick={() => {cartproduct(item.id, quentity, product)
                                                        console.log(item.id, quentity,product,"kkkkkkkkkkkkkkkkkkkkkkkkkkk");
                                                    }} style={{ margin: "0px 30px" }}><AiFillThunderbolt />buy</Link>


                                                    <span className="lnr lnr-cart" />
                                                    <Link to="/cart" onClick={() => {cartproduct(item.id, quentity, product)}}>add <span>to </span> cart</Link>
                                                </p>
                                                <p className="arrival-review pull-right">
                                                    <span className="lnr lnr-heart" />
                                                    <span className="lnr lnr-frame-expand" />
                                                </p>
                                            </div>
                                        </div>
                                        <h4 style={{ cursor: "pointer" }}><Link to={`/single/${item.id}`} >{titleee}...</Link></h4>
                                        <p className="arrival-product-price">{item.price} $</p>
                                    </div>
                                </div>
                                // : null     ///////////usecontex ma educe rvapro jethi aa logic ni jarur nathu have
                            })}

                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: "auto", width: "15%", margin: "auto", cursor: "pointer" }}>
                <NavLink className='btnn' style={{ border: "2px solid Green", padding: "5px 5px", display: "flex", alignItems: "center", justifyContent: "center" }} to="/product" >More Product</NavLink>
            </div>

            {/* <button className='btn my-0 ' style={{color:"black",border:"2px solid #e99c2e",backgroundColor:"#e99c2e",marginTop:"0px",marginLeft:"0px",marginRight:"0px",marginBottom:"0px"}}>more</button> */}


        </>
    )
}
