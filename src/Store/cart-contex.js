import React from 'react'

const CartContext = React.createContext({
    med:[],
    items: [],
    totalAmount: 0,
    addItem :(()=>{}),
    removeItem :(()=>{})
})
export default CartContext