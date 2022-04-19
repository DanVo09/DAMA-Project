import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyFormat from 'react-currency-format';


export default function Cartitem({item}) {
    
    const { removeItem } = useContext(CartContext);

    return (
        <>
            <li className='cartItem-item'>
              <div className="cart-item-content">
                  <p className='cartItem-title'>

                    {item.event_title}
                    {item.course_name}
                  </p>
                  <p>
                    {item.eventSpeaker} {item.course_type_name}
                  </p>
                  <p>
                    {item.event_date}
                  </p>
                  <p>
                    {item.event_type}
                  </p>
                  <div className="cartItem-price-container">
                    {item.event_price?
                      <CurrencyFormat className='cartItem-currency' value={item.event_price} displayType="text" prefix="$ " thousandSeparator="," decimalSeparator="." fixedDecimalScale={true} decimalScale={2}/>
                      :
                      <CurrencyFormat className='cartItem-currency' value={item.course_price} displayType="text" prefix="$ " thousandSeparator="," decimalSeparator="." fixedDecimalScale={true} decimalScale={2}/>
                    }
                    
                    <DeleteIcon className='CartItem-delete' onClick={() => removeItem(item.id)}>
                      Remove
                    </DeleteIcon>
                  </div>
              </div>
            </li>
        </>
    )
}
