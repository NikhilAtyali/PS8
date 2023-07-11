import react, {createContext, useState} from 'react';

export const  cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (product) =>{
            setCartItem([...cartItem, product])
    };

    const cartItemCount = cartItem.length;

    return(
        <cartContext.Provider value={{cartItem, addToCart, cartItemCount }}>
            {children}
        </cartContext.Provider>
    )
}