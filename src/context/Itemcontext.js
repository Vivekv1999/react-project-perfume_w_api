import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Prcontext from './productcontext'


export default function Itemcontext(props) {
  const [productdata, setproductdata] = useState([])

  const url = "http://localhost:3008/product";
    useEffect(() => {
        getproduct(url)
    },[])
    const getproduct = async () => {
        const res = await axios.get(url)
        const product = await res.data
        setproductdata(product)
        console.log(productdata,"i am newrraivas");
  }


    return (
      <>
        
        <Prcontext.Provider value={{productdata,getproduct}}>
          {props.children}
        </Prcontext.Provider>

      </>
    )
  }
