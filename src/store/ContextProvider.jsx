import React, { useState } from "react";
import { ItemContext } from "./ItemContext"

export const ContextProvider = (props)=>{
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const API_EP="https://crudcrud.com/api/f1092230b7194a83b6d4adf0470e6a46";

    const addProduct= async (newProduct)=>{
        try{
            await fetch(`${API_EP}/Products`,{
                method:'POST',
                body: JSON.stringify(newProduct),
                headers:{
                    'Content-Type':'application/json',
                }
            });
        }catch(err){
            console.log(err);
        }
    };
    
    const updateProduct= async (product, size)=>{
        let modifiedProduct;

        if(product[size]>0){
            modifiedProduct = {
                ...product,
                L: size === 'L' ? product.L - 1 : product.L,
                M: size === 'M' ? product.M - 1 : product.M,
                S: size === 'S' ? product.S - 1 : product.S,
            }
        } else {
            return;
        }
        const { _id, ...updatedProduct } = modifiedProduct; //destructuring to avoid _id

        try{
            await fetch(`${API_EP}/Products/${product._id}`,{
                method:'PUT',
                body: JSON.stringify(updatedProduct),
                headers:{
                    'Content-Type':'application/json'
                }
            });
        }catch(err){
            console.log(err);
        }
        fetchProducts();
    };

    const addItemCart = async (product, size) => {
        // Find if the item already exists in the cart
        const existingCartItem = items.find((item) => item.shoe === product.shoe);
    
        try {
            if (existingCartItem) {
                // Item exists, so update it (PUT)
                const updatedItem = {
                    ...existingCartItem,
                    [size]: (existingCartItem[size] || 0) + 1,
                };
    
                const { _id, ...itemToUpdate } = updatedItem; // Don't send _id in body
    
                await fetch(`${API_EP}/Cart/${_id}`, {
                    method: 'PUT',
                    body: JSON.stringify(itemToUpdate),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
    
                // Update local state
                setItems(prevItems => prevItems.map(item => item._id === _id ? updatedItem : item));
    
            } else {
                // Item does not exist, create it (POST)
                const newItem = {
                    shoe: product.shoe,
                    price: product.price,
                    L: size === 'L' ? 1 : 0,
                    M: size === 'M' ? 1 : 0,
                    S: size === 'S' ? 1 : 0,
                };
    
                const response = await fetch(`${API_EP}/Cart`, {
                    method: 'POST',
                    body: JSON.stringify(newItem),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const createdItem = await response.json();
    
                // Update local state with the new item from the server (which includes _id)
                setItems(prevItems => [...prevItems, createdItem]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const removeItem=()=>{};

    const fetchCartItem= async ()=>{
        try{
            const res = await fetch(`${API_EP}/Cart`, { method: 'GET' });
            if(!res.ok){
                throw new Error("Error fetching data");                
            }
            const data = await res.json();
            setItems(data);
        }catch(err){
            console.log(err);
        }
    };

    const fetchProducts= async()=>{
        try{
            const res = await fetch(`${API_EP}/Products`,{ method: 'GET' });
            if(!res.ok){
                throw new Error("Error fetching data");                
            }
            const data = await res.json();
            setProducts(data);
        }catch(err){
            console.log(err);
        }
    };

    const initialItems={
        items:items,
        products:products,
        addProduct:addProduct,
        updateProduct:updateProduct,
        addItemCart:addItemCart,
        removeItem:removeItem,
        fetchCartItem:fetchCartItem,
        fetchProducts:fetchProducts,
    }

    return(
        <ItemContext.Provider value={initialItems}>
            {props.children}
        </ItemContext.Provider>
    )
}