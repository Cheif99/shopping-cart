import React from 'react';
import './Cart.css'
import outfits from '../Home/outfits';
import HomeContextProvider, {HomeContext} from '../../Context/HomeContext';
import {useContext} from 'react';
import CartList from './CartList';

const Cart = () => {
    const {cartItems} = useContext(HomeContext)
    return ( 
        <div className='cart'>
            <div>
                <h1>YOUR ITEMS</h1>
            </div>
            <div className="cart-items">
                {outfits.map((outfit) => {
                if (cartItems[outfit.id] !== 0) {
                    return <CartList items={outfit} key={outfit.id}/>
                }
                })}
            </div>
        </div>
     );
}
 
export default Cart;