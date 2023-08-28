import React from 'react';
const CartList= (props) => {
    
    const { id, outfitName, price, outfitImage } = props.items
    return ( 
        <div className="cart-item">
            <img src={outfitImage} alt="" />
            <div className="cart-item-desc">
                <p>{outfitName}</p>
                <p>${price}</p>
            </div>
        </div>
     );
}
 
export default CartList;