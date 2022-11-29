import React, { useContext, useEffect } from 'react'
import { AiFillThunderbolt } from "react-icons/ai"
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Prcontext from '../context/productcontext'

export default function Adminprdcrud() {
    const { product, getproduct, updateprd } = useContext(Prcontext)
    const { id } = useParams()

    useEffect(() => {
        getproduct()
        console.log("useefct is calling")
    }, [])

    ///delete product
    const deleteprd = (id) => {
        console.log("item removed")
        const text = "Are you sure you want to delete this product"
        if (window.confirm(text) === true) {
            fetch(`http://localhost:3008/product/${id}`, {
                method: "DELETE",
            })
        }
        else {
            alert("your data is saved")
        }
    }

    ////////////--------2nd method axios to delete product
    // remove = (id) => {
    //     axios.delete('http://127.0.0.1:3000/people/', id)
    //       .then(function(response) {
    //         this.setState({
    //           filtered: response
    //         })
    //       }).catch(function(error) {
    //         console.log(error)
    //       })
    //   }

    return (
        <div>
            <section id="new-arrivals" className="new-arrivals">
                <div className="container">
                    <div className="section-header">
                        <h2>Product visible to Customer</h2>
                    </div>
                    <div className="section-header" style={{ border: "2px solid #e99c2e", backgroundColor: "#e99c2e", color: "black", width: "150px", margin: "auto", marginTop: "35px" }}>
                        <LinkContainer to="/addproduct">
                            <button>Add product</button>
                        </LinkContainer>
                    </div>
                    <div className="new-arrivals-content">
                        <div className="row">
                            {product && product.map((item) => {
                                const titleee = item.title ? item.title.slice(0, 40) : null

                                return <div className="col-md-3 col-sm-4">
                                    <div className="single-new-arrival">
                                        <div className="single-new-arrival-bg">
                                            <img src={item.image} alt="new-arrivals images" />
                                            <div className="single-new-arrival-bg-overlay" />
                                            <div className="sale bg-1">
                                                <p onClick={() => { deleteprd(item.id) }} style={{ cursor: "pointer" }}>Remove</p>
                                            </div>
                                        </div>
                                        <p onClick={() => { updateprd(item.id) }} style={{ cursor: "pointer", border: "2px solid #e99c2e", color: "black" }}>Update Product</p>
                                        <h4 style={{ cursor: "pointer" }}><Link to={`/single/${item.id}`} >{titleee}...</Link></h4>
                                        <p className="arrival-product-price">{item.price}</p>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
