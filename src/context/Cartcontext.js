import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from "react";
import reducer from '../reducer/Cartreducer'

const Cartcontext = createContext()

const getcartdata = () => {
    const localstoragedataaa = localStorage.getItem("cartdataa")
    if (localstoragedataaa === null) {
        // if (localstoragedataaa.length === 0) {
        return []
    }
    else {
        return JSON.parse(localstoragedataaa);
    }
}

const initialstate = {
    // cart: [],
    cart: getcartdata(),
    cart_item: 0,
    cart_amount: 0,
}

export default function Cartprovider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialstate)


    const cartproduct = (id, quentity, product) => {
        dispatch({ type: "add_to_cart", payload: { id, quentity, product } })
    }

    ////remove item from cart
    const removefromcart = (id) => {
        dispatch({ type: "remove_item", payload: id })

    }
    ///to claer the cart
    const clearcart = () => {
        dispatch({ type: "clear_cart" })
    }

    /////if item is purched then last page cart===0
    const itempurchased = () => {
        dispatch({ type: "cart_item_purchsed" })
    }

    //////to ad data in localStorage
    ////get set
    ///dispatch--------useefetct ma karu kem ke-----item cartma 6 te item count karelu te batavava0--navbar ma 
    useEffect(() => {
        dispatch({ type: "cart_total_item" })
        dispatch({ type: "cart_total_amount" })
        localStorage.setItem('cartdataa', JSON.stringify(state.cart))  //at here cart ma data 6 te array na form ma 6
        //parntu local storage ma data string ma form ma j accept kare mate.......JSON.strigify karvu pade
    }, [state.cart])


    return (
        <Cartcontext.Provider value={{ ...state, cartproduct, removefromcart, clearcart, itempurchased }}>
            {children}
        </Cartcontext.Provider>
    )
}

const useCartcontext = () => {
    return useContext(Cartcontext)
}

export { useCartcontext }














// export default Cartcontext


