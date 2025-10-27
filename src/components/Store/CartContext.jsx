
import React, { useState } from "react";

const ItemContext= React.createContext(
    {
        items:[],
        // eslint-disable-next-line no-unused-vars
        addItem:(item)=>{},
        // eslint-disable-next-line no-unused-vars
        removeItem:(id)=>{},
        fetchCartItems: ()=>{},
    }
);

export default ItemContext;


export const ContextProvider= (props)=>{
    const [items, setItems] = useState([]);
    const API_ENDPOINT = `https://crudcrud.com/api/cd9e19036cd04ad880d70a8f5fa235e7`;

    const postCartItems = async (updatedItems) => {
        try {
            await fetch(`${API_ENDPOINT}/cart`, {
                method: 'POST',
                body: JSON.stringify({ items: updatedItems }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (err) {
            console.log("Error posting cart items:", err);
        }
    };

    const fetchCartItems = async () => {
        try {
            const res = await fetch(`${API_ENDPOINT}/cart`, { method: 'GET' });
            if (!res.ok) {
                throw new Error('Failed to fetch cart items.');
            }
            const data = await res.json();
            // crudcrud returns an array of all POSTs. We want the most recent one.
            if (data && data.length > 0) {
                const lastCart = data[data.length - 1];
                setItems(lastCart.items || []);
            } else {
                setItems([]);
            }
        } catch (err) {
            console.log("Error fetching cart items:", err);
        }
    };

    const addItem= async (item)=>{
        let updatedItems;
        setItems((prevItems) => {
            // Check for item with same shoe name and size
            const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.shoe === item.shoe && prevItem.size === item.size);
            const existingCartItem = prevItems[existingItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: Number(existingCartItem.quantity) + 1, // Ensure quantity is a number
                };
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = [...prevItems, { ...item, quantity: 1, id: `${item._id}-${item.size}` }];
            }
            postCartItems(updatedItems);
            return updatedItems;
        });
    };

    const removeItem = (id) => {
        let updatedItems;
        setItems(prevItems => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === id);
            const existingItem = prevItems[existingItemIndex];

            if (!existingItem) return prevItems;

            if (existingItem.quantity === 1) {
                updatedItems = prevItems.filter(item => item.id !== id);
            } else {
                const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            }
            postCartItems(updatedItems);
            return updatedItems;
        });
    };

    
    const initialItems={
        items:items,
        addItem:addItem,
        removeItem:removeItem,
        fetchCartItems: fetchCartItems,
    }
    
    return(
        <ItemContext.Provider value={initialItems}>
            {props.children}
        </ItemContext.Provider>
    )
}
