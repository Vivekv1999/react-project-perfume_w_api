import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartcontext } from '../context/Cartcontext'
import { AiFillDelete } from "react-icons/ai";
import Itemcontext from '../context/Itemcontext';
import { Link } from 'react-router-dom';

export default function Addtocart() {
  const { cart_amount,cart,removefromcart,clearcart } = useCartcontext()
  // console.log(cart[0].title);


  return (
    <>
      <div className="container px-3 my-5 clearfix" style={{ marginTop: "120px" }}>
        {/* Shopping cart table */}
        <div className="carddd">
          <div className="carddd-header " style={{ marginBottom: "20px" }}>
            <h2>Shopping Cart</h2>
          </div>
          <div className="carddd-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* Set columns width */}
                    <th className="text-center py-3 px-4" style={{ minWidth: 400 }}></th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>Price</th>
                    <th className="text-center py-3 px-4" style={{ width: 120 }}>Quantity</th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>Total</th>
                    <th className="text-center align-middle py-3 px-0" style={{ width: 40 }}><a href="#" className="shop-tooltip float-none text-light" title data-original-title="Clear cart"><i className="ino ion-md-trash" /></a></th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.map((item) => {

                    return <>
                      <tr>


                        <td className="p-4">
                          <div className="media align-items-center">
                            <img src={item.image} className="d-block ui-w-40 ui-bordered mr-4" alt />
                            <div className="media-body">
                              <Link to={`/single/${item.id}`} className="d-block text-dark">{item.title}</Link>
                              <small>
                                {/* <span className="text-muted">{item.category}</span> */}
                                <span className="ui-product-color ui-product-color-sm align-text-bottom" style={{ background: '#e81e2c', marginLeft: "15px" }} /> &nbsp;
                                {/* <span className="text-muted">Price</span>  &nbsp; */}
                                <span className="text-muted">catagory:</span> {item.category}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">{item.price}$</td>
                        <td className="align-middle p-4"><span style={{ marginLeft: "45px" }}>{item.quentity}</span></td>
                        <td className="text-right font-weight-semibold align-middle p-2">{item.price * item.quentity} $</td>
                        <td className="text-center align-middle px-0"><a href="#" className="shop-tooltip close float-none text-danger" style={{ color: "red" }} onClick={() => {
                          removefromcart(item.id)
                        }}><AiFillDelete /></a></td>
                        {/* <td className="text-center align-middle px-0"><a href="#" className="shop-tooltip close float-none text-danger" title data-original-title="Remove">×</a></td> */}
                      </tr>
                    </>
                  })}
                </tbody>
              </table>
            </div>
            {/* / Shopping cart table */}
            <div className="float-right">
              <LinkContainer to="/product">
                <buttonn className="btn md-btn-flat" ><span style={{marginRight:"20px",fontSize:"18px",color:"#e99c2e"}}>Back to shopping</span></buttonn>
              </LinkContainer>
              <buttonn type="button" className="btn btn-sm btn-danger" onClick={clearcart}>Clear Cart</buttonn>
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">  
           
                {/* <div className="text-right mt-4 mr-5">
                    <label className="text-muted font-weight-normal">Discount</label>
                  <div className="text-large"><strong>$20</strong></div>
                </div> */}
                <div className="text-right mt-4">
                  <label className="text-muted font-weight-normal m-0"><span style={{marginTop:"90px"}}>Total price</span></label>
                  <div className="text-large"><strong>{cart_amount} $</strong></div>
                  {console.log(cart_amount,"cart amt")}
                  
                  {/* <div className="text-large"><strong>{state.cart_amount}</strong></div> */}
               
              </div>
                  
             
              <Link to='/ordercheckout' className="btn btn-success" style={{float:"right",color:"black",marginTop:"15px"}}>Proceeed to pay</Link>
            
            </div>
            <div style={{float:"right"}}>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
