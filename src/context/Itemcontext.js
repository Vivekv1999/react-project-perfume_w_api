import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Prcontext from './productcontext'
import reducer from '../reducer/Productreducer'
import { useParams } from 'react-router-dom'

const intialstage = {
  isloading: false,
  iserror: false,
  product: [],
  diplayproduct: [],
  issingleloading: false,
  singleproduct: {}
}

export default function Itemcontext(props) {
  // const [productdata, setproductdata] = useState([])
  const [state, dispatch] = useReducer(reducer, intialstage)
  const {id}=useParams;



  const url = "http://localhost:3008/product";
  useEffect(() => {
    getproduct(url)
  }, [])
  // }, [state.product])            ////delete product kati vakahte aa karvu jaruri nakar page rfresh karvu padse


  const getproduct = async (url) => {
    dispatch({ type: "set_loading" })
    try {
      const res = await axios.get(url)
      const producttt = await res.data
      // setproductdata(product)
      dispatch({ type: "api_data", payload: producttt })
    } catch (error) {
      dispatch({ type: "api_errror" })
    }
  }


  ////for single product
  const getSingleproduct = async (url) => {
    dispatch({ type: "set_singleloading" })
    try {
      const res = await axios.get(url)
      const singleproducttt = await res.data
      dispatch({ type: "set_single_product", payload: singleproducttt })

    } catch (error) {
      dispatch({ type: "set_single_errror" })

    }
  }

  ////for add product ==(new listing)//// admin only
  const addproduct = async (title, stock, price, description, category, image) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;Charset=UTF-8',
      },
      body: JSON.stringify( title, stock, price, description, category, image ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sucess", data);
      })
  }



  return (
    <>

      <Prcontext.Provider value={{ ...state, getproduct, getSingleproduct, addproduct}}>
        {props.children}
      </Prcontext.Provider>

    </>
  )
}
