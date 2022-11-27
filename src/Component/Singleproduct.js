import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Prcontext from '../context/productcontext'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbReplace } from "react-icons/tb";
import Carttoggle from './Carttoggle';
import { LinkContainer } from 'react-router-bootstrap';
import { useCartcontext } from '../context/Cartcontext';


const single_api = "http://localhost:3008/product"
export default function Singleproduct() {
    const { id } = useParams()
    const [product, setproduct] = useState({})
    const [quentity, setquentity] = useState(1)
    const {cartproduct}=useCartcontext()
    const { price, stock, category,description, image, title } = product

    const setdecrese = () => {
        quentity > 1 ? setquentity(quentity - 1) : setquentity(quentity)
    }
    const setincrese = () => {
        console.log('clcik')
        quentity < stock ? setquentity(quentity + 1) : setquentity(stock)
    }

    useEffect(() => {
        // fetch(`https://fakestoreapi.com/products/${id}`)
        fetch(`http://localhost:3008/product/${id}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data.image)
                setproduct(data)
            })
    }, [])

    // const { getSingleproduct, singleproduct } = useContext(Prcontext)
    // useEffect(() => {
    //     getSingleproduct(`http://localhost:3008/product/${id}`)
    //     // getSingleproduct(`${single_api}?id=${id}`)
    //     console.log(singleproduct, "ssssssssssin")
    // }, [])

    // const

    return (
        <>
            <div className="container" style={{ marginTop: "125px" }}>
                {/* {console.log(product, "in single consolelllll")} */}
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="images p-3" style={{ marginTop: "125px" }}>
                            <div className="text-center p-4"> <img id="main-image" src={'/' + image} width={250} /> </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="product p-4">
                            <div className="mt-4 mb-3">
                                <span className="text-uppercase text-muted brand">{product.category}</span>
                                <h5 className="text-uppercase" style={{ marginTop: "10px" }}>{title}</h5>
                                <div className="price d-flex flex-row align-items-center">
                                    <div className="ml-2" style={{ marginTop: "15px", color: "black" }}> <small className="dis-price">{product.price}</small>
                                    </div>
                                </div>
                            </div>
                            <p className="about" style={{ marginTop: "35px" }}>{product.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nam eum aliquid molestias modi reprehenderit consectetur velit magnam, quidem vel, dolores excepturi officiis impedit saepe blanditiis. Quia atque repellat repellendus?</p>
                            <div className='settt' style={{ marginTop: "15px", color: "black", fontSize: "25px" }}>
                                <CiDeliveryTruck style={{ backgroundColor: "#e99c2e", borderRadius: "5px" }} /><span style={{ marginRight: "75px" }} />
                                <TbReplace style={{ backgroundColor: "#e99c2e", borderRadius: "6px" }} />
                                <p><span style={{ marginRight: "10px" }}>free delivery</span><span>30 Days Return</span></p>

                            </div>
                            <hr />

                            <Carttoggle quentityy={quentity} setdecrese={setdecrese} setincrese={setincrese} namee="kkk" />

                            <LinkContainer to="/cart" onClick={()=>{cartproduct(id, quentity,product )}}>
                                <div className="cart mt-4 align-items-center" style={{ marginTop: "35px" }} >
                                    <button className="btn btn-danger text-uppercase mr-2 px-4" >Add to cart</button>
                                </div>
                            </LinkContainer>
                            
                        </div>
                        {/* </div>
                </div>
            </div> */}
                    </div>
                </div >
            </div >



            {/* <section id="new-arrivals" className="new-arrivals">
            {console.log(singleproduct,"eadfzeadf")}
                <div className="container">
                    <div className="new-arrivals-content">


                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-new-arrival">
                                    <div className="single-new-arrival-bg">
                                        <img src={singleproduct.image} alt="new-arrivals images" />
                                        <div className="single-new-arrival-bg-overlay" />
                                        <div className="sale bg-1">
                                            <p>sale</p>
                                        </div>
                                        <div className="new-arrival-cart">
                                            <p>
                                                <NavLink to='/cart' style={{ margin: "0px 30px" }}>buy</NavLink>
                                                <span className="lnr lnr-cart" />
                                                <a href="#">add <span>to </span> cart</a>
                                            </p>
                                            <p className="arrival-review pull-right">
                                                <span className="lnr lnr-heart" />
                                                <span className="lnr lnr-frame-expand" />
                                            </p>
                                        </div>
                                    </div>
                                    <h4><a >{singleproduct.title}</a></h4>
                                    <h4><a >{singleproduct.id}</a></h4>
                                    <p className="arrival-product-price">{singleproduct.price}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section> */}

            {/* 
            <div className="row">
                <div className="col-md-3">
                    <div className="single-new-arrival">
                        <div className="single-new-arrival-bg">
                            <img src={product.image} alt="new-arrivals images" />
                            <div className="single-new-arrival-bg-overlay" />
                            <div className="sale bg-1">
                                <p>sale</p>
                            </div>
                            <div className="new-arrival-cart">
                                <p>
                                    <NavLink to='/cart' style={{ margin: "0px 30px" }}>buy</NavLink>
                                    <span className="lnr lnr-cart" />
                                    <a href="#">add <span>to </span> cart</a>
                                </p>
                                <p className="arrival-review pull-right">
                                    <span className="lnr lnr-heart" />
                                    <span className="lnr lnr-frame-expand" />
                                </p>
                            </div>
                        </div>
                        <h4><a >{product.title}</a></h4>
                        <h4><a >{product.id}</a></h4>
                        <p className="arrival-product-price">{product.price}</p>
                    </div>
                </div>
            </div> */}



        </>
    )
}
