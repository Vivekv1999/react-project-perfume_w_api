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

    return state;
}
