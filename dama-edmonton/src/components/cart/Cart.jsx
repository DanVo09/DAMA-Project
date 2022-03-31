import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import CartItem from '../cartItem/CartItem'

export default function Cart() {
    
    const { cartItems, showCart, showHideCart } = useContext(CartContext)
    let opts = {format: '%s%v', symbol: '$'}

    return (
        <>
            {showCart && (
                <div className='cart-wrapper'>
                    <div className="cart-showhide-container">
                        <HighlightOffIcon onClick={showHideCart}/>
                    </div>
                    <div className="cart-inner-wrapper">
                        {cartItems.length === 0 ? (<h4>Cart is Currently Empty</h4>) : (<ul>
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item}/>
                            ))}
                        </ul>)}
                    </div>
                    <div className="cart-total">
                        <p>Cart Total</p>
                        <div></div>
                        <div className="cart-currency">
                            {/* {formatCurrency(cartItems.reduce((amount, item) => item.price + amount, 0), opts)} */}
                        </div>
                    </div>
                </div>
               
            )}
        </>
    )
}
