import React, { useContext, useState } from "react";
import { WishListContext } from "../WishListContext";
const WishList = () => {
  const { wishListItem, wishListQuantity } = useContext(WishListContext);
  const [wishList, setWishList] = useState(wishListItem);
  const [wishListLength, setwishListLength] = useState(wishListQuantity);
  const removeHandeler =(id)=>{
    const filteredList = wishList.filter(item=>item.id !== id);
    setWishList(filteredList);
    setwishListLength(filteredList.length)
  }
  return (
    <div>
      My WishList
      <h4>{wishListLength} Itms in the WishList</h4>
      <ul>
        {wishList.map((product) => {
          return (
            <li>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.brand}</p>
              <button onClick={()=>removeHandeler(product
                .id)}>Remove From WishList</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WishList;
