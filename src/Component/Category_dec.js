import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Prcontext from '../context/productcontext'

export default function Category_dec(props) {
    // const {category}=useParams()
    const [categortprd, setCategortprd] = useState([])

    // useEffect(()=>{
    //     fetch(`http://localhost:3008/product/${category}`)
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setCategortprd(data)
    //     })
    // })

    const { product } = useContext(Prcontext)
    ///////-----------have ama data ma filter lagavu ,,reducer karu su karcu......only men ni detail leva.....
    // useEffect(()=>{
    //     fetch('http://localhost:3008/product/')
    //     .then(res=> res.json())
    //     .then(data=>{
    //        for(let i=0;i<data.length;i++){

    //        }
    //     })
    // },[])
    // console.log(categortprd, "categoryyy console");
    console.log(props);


    return (
        <>
            {props.name === "men" ?

                <div className="container" style={{ marginTop: "40px" }}>
                    <div className="new-arrivals-content">

                        <h1 style={{ marginBottom: "15px", backgroundColor: "#f0b45e", width: "150px", padding: "10px" }}>Mens Category</h1>
                        <div className="row">
                            {product && product.map((item) => {

                                return item.category === "men" ?
                                    <>
                                        <div className="col-md-3">
                                            <div className="single-new-arrival">
                                                <div className="single-new-arrival-bg">
                                                    <img src={"/" + item.image} alt="new-arrivals images" />
                                                    <div className="single-new-arrival-bg-overlay" />
                                                    <div className="sale bg-1">
                                                        <p>sale</p>
                                                    </div>
                                                    <div className="new-arrival-cart">
                                                        <p>
                                                            <NavLink to={`/single/${item.id}`} style={{ margin: "0px 15px" }}>Buy</NavLink>
                                                            {/* <span className="lnr lnr-cart" /> */}
                                                            {/* <a href="#">add <span>to </span> cart</a> */}
                                                        </p>
                                                        <p className="arrival-review pull-right">
                                                            <span className="lnr lnr-heart" />
                                                            <Link to={`/single/${item.id}`} style={{ marginRight: "10px" }} className="lnr lnr-frame-expand" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <h4><Link to={`/single/${item.id}`} >{item.title}</Link></h4>

                                                <h4><a href="#">{item.id}</a></h4>
                                                <p className="arrival-product-price">{item.price} $</p>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    null
                            })}
                        </div>
                    </div>
                </div>

                :
                props.name === "women" ?

                    <div className="container" style={{ marginTop: "40px" }}>
                        <div className="new-arrivals-content">

                            <h1 style={{ marginBottom: "15px", backgroundColor: "#f0b45e", width: "173px", padding: "10px" }}>Womens Category</h1>
                            <div className="row">
                                {product && product.map((item) => {

                                    return item.category === "women" ?
                                        <>
                                            <div className="col-md-3">
                                                <div className="single-new-arrival">
                                                    <div className="single-new-arrival-bg">
                                                        <img src={"/" + item.image} alt="new-arrivals images" />
                                                        <div className="single-new-arrival-bg-overlay" />
                                                        <div className="sale bg-1">
                                                            <p>sale</p>
                                                        </div>
                                                        <div className="new-arrival-cart">
                                                            <p>
                                                                <NavLink to={`/single/${item.id}`} style={{ margin: "0px 15px" }}>Buy</NavLink>
                                                                {/* <span className="lnr lnr-cart" /> */}
                                                                {/* <a href="#">add <span>to </span> cart</a> */}
                                                            </p>
                                                            <p className="arrival-review pull-right">
                                                                <span className="lnr lnr-heart" />
                                                                <Link to={`/single/${item.id}`} style={{ marginRight: "10px" }} className="lnr lnr-frame-expand" />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h4><Link to={`/single/${item.id}`} >{item.title}</Link></h4>

                                                    <h4><a href="#">{item.id}</a></h4>
                                                    <p className="arrival-product-price">{item.price} $</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        null
                                })}
                            </div>
                        </div>
                    </div>


                    :
                    ///unisex
                    props.name === "unisex" ?

                        (<div className="container" style={{ marginTop: "40px" }}>
                            <div className="new-arrivals-content">

                                <h1 style={{ marginBottom: "15px", backgroundColor: "#f0b45e", width: "160px", padding: "10px" }}>Unisex Category</h1>
                                <div className="row">
                                    {product && product.map((item) => {

                                        return item.category === "unisex" ?
                                            <>
                                                <div className="col-md-3">
                                                    <div className="single-new-arrival">
                                                        <div className="single-new-arrival-bg">
                                                            <img src={"/" + item.image} alt="new-arrivals images" />
                                                            <div className="single-new-arrival-bg-overlay" />
                                                            <div className="sale bg-1">
                                                                <p>sale</p>
                                                            </div>
                                                            <div className="new-arrival-cart">
                                                                <p>
                                                                    <NavLink to={`/single/${item.id}`} style={{ margin: "0px 15px" }}>Buy</NavLink>
                                                                    {/* <span className="lnr lnr-cart" /> */}
                                                                    {/* <a href="#">add <span>to </span> cart</a> */}
                                                                </p>
                                                                <p className="arrival-review pull-right">
                                                                    <span className="lnr lnr-heart" />
                                                                    <Link to={`/single/${item.id}`} style={{ marginRight: "10px" }} className="lnr lnr-frame-expand" />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <h4><Link to={`/single/${item.id}`} >{item.title}</Link></h4>

                                                        <h4><a href="#">{item.id}</a></h4>
                                                        <p className="arrival-product-price">{item.price} $</p>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            null
                                    })}
                                </div>
                            </div>
                        </div>)
                        :
                        null
            }
        </>
    )
}
