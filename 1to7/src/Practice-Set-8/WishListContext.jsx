import { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishListItem, setWishListItem] = useState([]);

  const addToWishList = (product) => {
    setWishListItem([...wishListItem, product]);
  };

  const wishListQuantity = wishListItem.length;

  return (
    <WishListContext.Provider
      value={{wishListItem, addToWishList, wishListQuantity}}
    >
      {children}
    </WishListContext.Provider>
  );
};
