import React, {useContext} from 'react';
import './CartList.css'
import  HomeContextProvider, {HomeContext} from '../../Context/HomeContext';


const CartList= (props) => {
    
    const { id, outfitName, price, outfitImage } = props.items
    const {cartItems, addToCart, removeFromCart, newCartCounter} = useContext(HomeContext)

    return ( 
        <div className="cart-item">
            <img src={outfitImage} alt="" />
            <div className="cart-item-desc">
                <p>{outfitName}</p>
                <p>${price}</p>
                <div className="counter">
                    <button onClick={()=> removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(event) => newCartCounter(+(event.target.value), id)} />
                    <button onClick={()=> addToCart(id)}> + </button>
                </div>
            </div>
        </div>
     );
}
 
export default CartList;