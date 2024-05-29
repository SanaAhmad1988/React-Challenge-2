import {createContext, useState } from 'react';
import itemsData from '../itemsData.json';
 
export const CartContext = createContext();

export function CartProvidr ({child}){

    const [itemInCart, setItemsInCart] = useState ([])
    
    function addToCart(itemid){

        const item = itemsData.find((item)) => item.id ===itemid
        setItemsInCart ((prev) => [...prev,item])
    
    }

    const contextValue = {
        itemInCart,
        addToCart
    }



    return(
        <div>
            <CartContext.Provider value={contextValue()}
        </div>

    )
}