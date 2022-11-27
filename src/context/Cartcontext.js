import React, { useContext, useReducer } from 'react'
import { createContext } from "react";
import reducer from '../reducer/Cartreducer'

const Cartcontext = createContext()

const initialstate = {
    cart: [],
    total_item: "",
    total_amount: ""
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


    return (
        <Cartcontext.Provider value={{ ...state, cartproduct, removefromcart }}>
            {children}
        </Cartcontext.Provider>
    )
}

const useCartcontext = () => {
    return useContext(Cartcontext)
}

export { useCartcontext }














// export default Cartcontext


