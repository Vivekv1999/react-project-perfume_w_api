import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Prcontext from '../context/productcontext'

export default function Addproduct() {
    const [values, setvalues] = useState({ title: "", stock: "", price: "", description: "", category: "", image: "" })
    const { addproduct } = useContext(Prcontext)
    const navigate=useNavigate()

    const onchange = (e) => {
        setvalues({
            ...values, [e.target.name]: e.target.value
        })
    }


    console.log(values);
    const handleaddproduct = () => {
        addproduct(values.title, values.stock, values.category, values.description, values.image, values.price)
        setvalues({title:"",stock:"",price:"",description:"",category:"",image:""})
        setTimeout(() => {
            alert("product added sucessfully")
        }, 1.5);
        navigate('/product')

    }




    return (
        <>
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
                                        <p style={{margin:"25px 0px 25px 0px",fontSize:"20px"}}>or</p>
                                        <label htmlFor="product link" style={{marginRight:"5px",color:"black"}}>Enter Produt Link</label>
                                        <input type="text" name="image" onChange={onchange} />
                                     </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                <label htmlFor="product title" >product title</label><br />
                                                <input type="text" name="title" placeholder="Product title" onChange={onchange} />
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
                                                <input type="text" name="price" id="" onChange={onchange} />
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                <label htmlFor="product title">Stock</label><br />
                                                <input type="text" name="stock" id="" onChange={onchange} /> Units
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "10px", color: "black" }}>
                                                <label htmlFor="product title">Product Description</label><br />
                                                <textarea cols={60} rows={4} name="description" onChange={onchange} />
                                            </div>

                                            <div style={{ backgroundColor: "#e99c2e", cursor: "pointer", color: "black", borderRadius: "10px", width: "100px", padding: "3px" }} onClick={handleaddproduct} >
                                                <span style={{ marginLeft: "3px" }}>
                                                    Add Product
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
