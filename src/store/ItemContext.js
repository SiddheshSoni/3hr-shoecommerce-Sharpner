import React from "react";

export const ItemContext= React.createContext({
    products:[],
    items:[],
    // eslint-disable-next-line no-unused-vars
    addProduct:(item)=>{},
    // eslint-disable-next-line no-unused-vars
    updateProduct:(item, size)=>{},
    // eslint-disable-next-line no-unused-vars
    addItemCart:(item)=>{},
    // eslint-disable-next-line no-unused-vars
    removeItem:(id)=>{},
    fetchCartItems:()=>{},
    fetchProducts:()=>{}
});
