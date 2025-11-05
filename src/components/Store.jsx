import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import ItemContext from './Store/CartContext';

const Store = () => {
  const API_Endpoint = "https://crudcrud.com/api/df078ed6c5fc4a3d9031cb3ae3121c4a";
  
  const [items, setItems]= useState([]);
  const { addItem } = useContext(ItemContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_Endpoint}/Products`, { method: 'GET' });
        if (!res.ok) {
          throw new Error("ERROR!!!");
        }

        const data = await res.json();
        console.log(data);
        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Remove items from dependency array to prevent infinite loop

  const addToCartHandler = async (item, size) => {
    // Check if item is in stock
    if (item[size] > 0) {
      const updatedProduct = {
        shoe: item.shoe,
        desc: item.desc,
        price: item.price,
        large: size === 'large' ? item.large - 1 : item.large,
        medium: size === 'medium' ? item.medium - 1 : item.medium,
        small: size === 'small' ? item.small - 1 : item.small,
      };

      try {
        const res = await fetch(`${API_Endpoint}/Products/${item._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        });

        if (!res.ok) {
          throw new Error("Failed to update product quantity.");
        }

        // Update local state to reflect change immediately
        setItems(prevItems => prevItems.map(prevItem => 
          prevItem._id === item._id ? { ...prevItem, [size]: prevItem[size] - 1 } : prevItem
        ));

        // Add item to cart
        addItem({ ...item, size: size });

      } catch (err) {
        console.error("Error updating product:", err);
      }
    } else {
      alert(`Size ${size.toUpperCase()} is out of stock!`);
    }
  };

  return (
    <Container style={{ marginTop: '80px' }}>
      <h1 className="text-center mb-4">Available Shoes</h1>
      {items.map((item) => (
        <Row key={item._id} className="mb-3 p-3 border rounded align-items-center">
          <Col md={3}><h5>{item.shoe}</h5></Col>
          <Col md={3}><p className="m-0">{item.desc}</p></Col>
          <Col md={2}><p className="m-0">${item.price}</p></Col>
          <Col md={1} className="text-center">
            <Button variant="outline-info" size="sm" onClick={() => addToCartHandler(item, 'large')}>L</Button> ({item.large})
          </Col>
          <Col md={1} className="text-center">
            <Button variant="outline-info" size="sm" onClick={() => addToCartHandler(item, 'medium')}>M</Button> ({item.medium})
          </Col>
          <Col md={1} className="text-center">
            <Button variant="outline-info" size="sm" onClick={() => addToCartHandler(item, 'small')}>S</Button> ({item.small})
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Store