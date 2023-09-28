import React from 'react';
import './Cart.css'
import outfits from '../Home/outfits';
import HomeContextProvider, {HomeContext} from '../../Context/HomeContext';
import {useContext} from 'react';
import CartList from './CartList';
import {useNavigate} from 'react-router-dom';
import Button from '../../UI/Button';


const Cart = () => {
    const {cartItems, totalCartAmount} = useContext(HomeContext)
    const totalAmount = totalCartAmount()

    const navigate = useNavigate()
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
       {totalAmount > 0 ?     
            <div className="checkout">
                <p> TOTAL: ${totalAmount}</p>
                <div className="button">
                <Button onClick={()=> navigate("/")}> CONTINUE SHOPPING </Button>
                <Button> CHECKOUT </Button>
                </div>
            </div>
        : <h1>Empty Cart (Kindly Add Items to Cart)</h1>}
        </div>
     );
}
 
export default Cart;