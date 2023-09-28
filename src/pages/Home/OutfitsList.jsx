import React from 'react'
import './OutfitsList.css'
import HomeContextProvider, { HomeContext } from '../../Context/HomeContext'
import { useContext } from 'react';
import Button from '../../UI/Button'

const OutfitsList = (props) => {
    const { addToCart, cartItems } = useContext(HomeContext)
    const { id, outfitName, price, outfitImage } = props.items
    const cartItemsAmount = cartItems[id]
    return (
        <div className='outfit-list'>
            <div className="outfit-img">
                <img src={outfitImage} alt="" />
            </div>
            <div className="outfit-details">
            <p>{outfitName}</p>
            <p>${price}</p>
            <Button onClick={() => addToCart(id)}>Add to Cart {
                (cartItemsAmount > 0 && <>[{cartItemsAmount}]</>)
            }</Button>
        </div>
        </div >
    )
}


export default OutfitsList;

