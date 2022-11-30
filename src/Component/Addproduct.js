import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Prcontext from '../context/productcontext'

export default function Addproduct() {
    const [values, setvalues] = useState({ title: "", stock: "", price: "", description: "", category: "", image: "" })
    const { addproduct } = useContext(Prcontext)
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3008/product/${id}`)
            .then(res => res.json())
            .then(dataa => {
                setvalues(dataa)
            })
    }, [])

    /////handleEditPrd========
    const handleEditPrd = (e) => {
        e.preventDefault()
        const { title, stock, price, description, category, image } = values
        fetch(`http://localhost:3008/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, stock, price, description, category, image}),
        })
            .then(res => res.json())
            .then(dddta => {
                console.log('sucess edit prd', dddta);
                navigate('/product')
            })

        //     fetch(`http://localhost:3005/user/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json;Charset=UTF-8',
        //     },
        // })
        //     .then((result) => result.json())
        //     .then((data) => {
        //         console.log(data);
        //         navigate('/crud')
        //     })
    }


    ///////add new producttt============
    const onchange = (e) => {
        setvalues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const { title, stock, price, description, category, image } = values


    console.log(values);
    const handleaddproduct = () => {
        addproduct({ title, stock, price, description, category, image })
        alert("product added sucessfully")
        setTimeout(() => {
            console.log('product added sucessfully');

        }, 5);
        navigate('/product')
    }

    /////////without using context  add product
    // const addproduct = () => {
    //     const data = {  title, stock, price, description, category, image  }
    //     fetch(" http://localhost:3008/product", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;Charset=UTF-8',
    //         },
    //         body: JSON.stringify(data ),
    //     })
    //         .then(res => res.json())
    //         .then(ddd => {
    //             console.log('sucess', ddd);

    //         })

    // }





    return (
        <>
            <section>

                <div className="container mt-5 mb-5" style={{ marginTop: "125px" }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="row">
                                    <form >
                                        <div className="col-md-6">
                                            <div className="images p-3">
                                                <div className="text-center p-4"> <img src="https://icon-library.com/images/upload-picture-icon/upload-picture-icon-25.jpg" width={250} height="250px" alt="upload image here" />
                                                </div>
                                                <input type="file" id="" />
                                            </div>
                                            <p style={{ margin: "25px 0px 25px 0px", fontSize: "20px" }}>or</p>
                                            <label htmlFor="product link" style={{ marginRight: "5px", color: "black" }}>Enter Produt Link</label>
                                            <input type="text" name="image" value={image} onChange={onchange} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="product p-4">
                                                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                    <label htmlFor="product title" >product title</label><br />
                                                    <input type="text" name="title" value={title} placeholder="Product title" onChange={onchange} />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "20px", color: "black" }}>
                                                    <label htmlFor="product title">catagoery</label><br />
                                                    <input type="radio" name="category" id="" value="Men" onChange={onchange} />
                                                    <label htmlFor="product title">Male</label><br />
                                                    <input type="radio" name="category" id="" value="Women" onChange={onchange} />
                                                    <label htmlFor="product title">Female</label><br />
                                                    <input type="radio" name="category" id="" value="Unisex" onChange={onchange} />
                                                    <label htmlFor="product title">Unisex</label><br />
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                    <label htmlFor="product title">Product price</label><br />
                                                    <input type="text" name="price" value={price} onChange={onchange} />
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                    <label htmlFor="product title">Stock</label><br />
                                                    <input type="text" name="stock" value={stock} onChange={onchange} /> Units
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                    <label htmlFor="product title">Product Description</label><br />
                                                    <textarea cols={60} rows={4} name="description" value={description} onChange={onchange} />
                                                </div>
                                                {
                                                    id === undefined ?
                                                        <div style={{ backgroundColor: "#e99c2e", cursor: "pointer", color: "black", borderRadius: "10px", width: "100px", padding: "3px" }} onClick={handleaddproduct} >
                                                            <span style={{ marginLeft: "3px" }}>
                                                                Add Product
                                                            </span>
                                                        </div>
                                                        :
                                                        <div style={{ backgroundColor: "#e99c2e", cursor: "pointer", color: "black", borderRadius: "10px", width: "100px", padding: "3px" }} onClick={handleEditPrd} >
                                                            <span style={{ marginLeft: "3px" }}>
                                                                Edit Product
                                                            </span>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
