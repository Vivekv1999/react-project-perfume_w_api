import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

// export default function Carttoggle(quentityy, setdecrese, setincrese,namee) {
export default function Carttoggle(props) {
  
  console.log(props.quentityy)
  return (
    <div>
      <button style={{ fontSize: "25px",marginTop:"5px"}} onClick={() => props.setdecrese() }><AiOutlineMinusCircle /></button>
      <span style={{fontSize: "25px" ,padding:"10px",color:"black"}}>{props.quentityy}</span>
      <buttonn style={{ fontSize: "25px" }} onClick ={() =>props.setincrese()}><AiOutlinePlusCircle /></buttonn>
    </div>
  )
}
