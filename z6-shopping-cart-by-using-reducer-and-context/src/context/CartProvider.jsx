import React from 'react'
import { useContext , createContext, useReducer } from 'react'

export const  cartContext = createContext();

function cartReducer(cart, action){
    console.log("useReducer");
    switch(action.type){
        case "ADD_ITEM": {
            return [...cart, action.payload];
        }
    }
    console.log(cart);
    return cart;
}

function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, [])
  return (
    <cartContext.Provider value={{cart: cart, dispatch : dispatch}}>
        <div>{children}</div>
    </cartContext.Provider>
  )
}

// export function useCart(){
//     return useContext(createContext);
// }

export default CartProvider
