import React from 'react'

export default function Cartreducer(state, action) {
    if (action.type === "add_to_cart") {
        const { id, quentity, product } = action.payload
      // console.log(action.payload);

        const cartproduct = {
            id,                            ///jo color hot to id=id+coclor levupad kem id agaga creta karava mate
            title: product.title,
            quentity,                       ///qutity:qutity hoy taye direct aam lakhi shakay
            description: product.description,
            stock: product.stock,
            image: product.image,
            price: product.price,
            category: product.category,
        }
        return {
            ...state,
            cart: [...state.cart, cartproduct]
        }
    }

    if (action.type === "remove_item") {
        let updatedcart = state.cart.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cart: updatedcart,
        }
    }

    if (action.type === "clear_cart") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "cart_total_item") {
        const updateditemval = state.cart.reduce((initalvalll, curElem) => {
            let { quentity } = curElem
            initalvalll = initalvalll + quentity
            return initalvalll;
        }, 0)

        return {
            ...state,
            cart_item: updateditemval
        }
    }

    if (action.type === "cart_total_amount") {
        const cartvalue = state.cart.reduce((intia, curr) => {
            let { quentity, price } = curr

            intia = intia + price * quentity
            return intia
        }, 0)

        return {
            ...state,
            cart_amount:cartvalue
        }
    }

    ///item purched cart====uper batave te 0 thay mate
    if(action.type==="cart_item_purchsed"){
        return{
            ...state,
            cart_item:0,
            cart_amount:0,
            cart:[   ]
        }
    }

    return state;
}
