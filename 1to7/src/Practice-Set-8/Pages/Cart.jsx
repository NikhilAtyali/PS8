import React, {useContext, useState} from 'react'
import { cartContext } from '../cartContext'
const Cart = () => {
  const {cartItem, cartItemCount} = useContext(cartContext);
  const [itemList, setItemList] = useState(cartItem)
  const [quantity, setQuantity] = useState(cartItemCount)
  const removeHandeler =(id)=>{
    const filteredList = cartItem.filter(item=>item.id !== id);
    setItemList(filteredList);
    setQuantity(filteredList.length)
  }
  return (
    <div>
      <h1>Cart</h1>
      <h3>{quantity} Items added to cart</h3>
      <ul>
        {
          itemList.map((product=>{
            return <li>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.brand}</p>
              <button onClick={()=>removeHandeler(product
                .id)}>Remove From Cart</button>
            </li>
          }))
        }
      </ul>
    </div>
  )
}

export default Cart
