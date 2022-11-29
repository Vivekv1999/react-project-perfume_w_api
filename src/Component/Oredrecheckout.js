import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartcontext } from '../context/Cartcontext'
import { AiFillDelete } from "react-icons/ai";

import Prcontext from '../context/productcontext'

export default function Oredrecheckout() {
  const { cart,cart_amount,itempurchased,removefromcart } = useCartcontext()
  
  return (
    <>
      <section className="vh-90 gradient-custom-2" style={{ marginTop: "125px"}}>
<h1 style={{marginLeft:"600px",fontSize:"25px"}}>Order Detail</h1>
        <div className="container py-5 h-100" style={{marginTop:"20px",marginLeft:"180px"}}>
          {cart && cart.map((item) => {
               const itemslice = item.title ? item.title.slice(0, 40) : null
               return  <div className = "col-md-5" >
                <div className="card card-stepper" style={{ borderRadius: 16 }}>
                  <div className="container">
                    <div className="card-header p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div style={{marginTop:"15px"}}>
                          <p className="text-muted mb-2"> Order ID :<span className="fw-bold text-body">{Math.round(100000000*Math.random(9))}</span><span style={{fontSize:"20px",color:"#f24e4e",cursor:"pointer",marginLeft:"275px"}} onClick={() => {
                          removefromcart(item.id)
                        }}><AiFillDelete /></span></p>
                          <p className="text-muted mb-0"> Place On :<span className="fw-bold text-body">{new Date().toJSON().slice(0, 10)}</span> </p>
                        </div>
                        <div>
                          <h6 className="mb-0"> <a href="#">Title</a> </h6>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex flex-row mb-4 pb-2">
                        <div className="flex-fill">
                          <h5 className="bold">{itemslice}...</h5>
                          <p className="text-muted"> Qt: {item.quentity} item</p>
                          <h4 className="mb-3" style={{marginTop:"10px"}}>{item.price} $ </h4>
                          {/* <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p> */}
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <img className="align-self-center img-fluid" src={item.image} width={250} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
          </div>
          })}
      </div>

      <div>
        
        <h1 className="btn" style={{marginTop:"20px",float:"right",fontSize:"25px",marginRight:"100px"}}>Total amount: <span >{cart_amount} $</span></h1><br/><br/><br/><br/>


<div className='container' style={{float:'right',margin:'auto',width:"250px",padding:"10px"}} onClick={itempurchased}>
         <LinkContainer to='/thankspage' >
        <h1 className="btn btn-success" >Proceed To PAY </h1>
          </LinkContainer>
</div>
      </div>
        {/* <hr/> */}
    </section>

    </>
  )
}
