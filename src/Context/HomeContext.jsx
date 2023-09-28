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

    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = outfits.find((outfit) => outfit.id === +(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    }

    const newCartCounter = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, newCartCounter, totalCartAmount};

    console.log(cartItems)
    return ( 
        <HomeContext.Provider value={contextValue}>{props.children}</HomeContext.Provider>
     );
}
 
export default HomeContextProvider
;