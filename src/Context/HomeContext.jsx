import React from 'react';
import {createContext, useState} from 'react';
import outfits from '../pages/Home/outfits'

export const HomeContext = createContext()

const defaultCart = () => {
    let cart = {}
    for (let i=1; i < outfits.length +1; i++) {
        cart[i] = 0
    }
    return cart;
}


const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart};

    console.log(cartItems)
    return ( 
        <HomeContext.Provider value={contextValue}>{props.children}</HomeContext.Provider>
     );
}
 
export default HomeContextProvider
;