import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cartitem({item}) {
    
    const { removeItem } = useContext(CartContext);

    return (
        <>
            <li className='CartItem__item'>
      <img src={item.image} alt='' />
      <div>
        
      </div>
      <DeleteIcon className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </DeleteIcon>
    </li>
        </>
    )
}
