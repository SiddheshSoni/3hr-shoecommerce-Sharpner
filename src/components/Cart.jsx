import React, { useContext, useEffect } from 'react'
<<<<<<< HEAD
import "./Cart.css"
import Modal from './Modal/Modal'
import { Table } from 'react-bootstrap'
import { ItemContext } from '../store/ItemContext'

const Cart = (props) => {
  const { items, fetchCartItem} = useContext(ItemContext);
  
  const finalAmount = items.reduce((currentTotal, item)=>{
    return currentTotal + (Number(item.price) * (Number(item.L) + Number(item.M) + Number(item.S)));
  }, 0)

  useEffect( () => {
    fetchCartItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Modal onClick={props.onClose} >
      <div className='cart'>
        <h1>Cart</h1>
        <div>
          <Table>
            <thead>
              <tr>
                <th>Shoe</th>
                <th colSpan={3}>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
             {/* These are example values to map overcart items */}
             {items && items.map((item)=>(
               <tr key={item._id}>
                <td>{item.shoe}</td>
                <td>L ({item.L || 0})</td>
                <td>M ({item.M || 0})</td>
                <td>S ({item.S || 0})</td>
                <td>{item.price}</td>
              </tr>
              ))}
              {/* -------------------------------------------- */}
              <tr>
                <th colSpan={4}>Total</th>
                <th>{finalAmount} $</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>  
    </Modal>
  )
}

export default Cart
=======
import Table from 'react-bootstrap/Table';
import "./Cart.css"
import Button from 'react-bootstrap/esm/Button'
import Modal from './UI/Modal/Modal';
import ItemContext from './Store/CartContext';

const Cart = (props) => {
  const { items, removeItem, fetchCartItems } = useContext(ItemContext);

  useEffect(() => {
      fetchCartItems();
  }, [ fetchCartItems]);

  const quantityChangeHandler=(e)=>{
    e.preventDefault();
  }
  
  // Calculate totalAmount using reduce for a more robust and functional approach
  const totalAmount = items.reduce((currentTotal, item) => {
    // Ensure price and quantity are numbers before multiplication to prevent issues if they are strings
    return currentTotal + (Number(item.price) * Number(item.quantity));
  }, 0);

  const dummy = items && items.map((item)=>{
    return(
      <tr key={item.id} className="cart-row" >
        <td className='cart-item'><span className="cart-title">{item.shoe}</span></td>
        <td>${item.price}</td>
        <td>
          <input value={item.quantity} onChange={quantityChangeHandler}/> 
          <Button variant='danger' className='m-0' onClick={()=>removeItem(item.id)} >REMOVE</Button> 
        </td>
      </tr>
    )
  });

  return (
      <Modal>
        <div className='cart-container'>
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h1>Cart</h1>
            <Button variant='danger' onClick={props.onClose}>Close</Button>
          </div>
            <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummy}
                  </tbody>
                </Table>
            </div>
            <div className='d-flex justify-content-end align-items-baseline gap-lg-3' >
              <h3>Total</h3> <span className=' fw-medium'>${totalAmount}</span>
            </div>
            <Button variant="info" size="lg" className='purchase-btn text-white fw-bold fs-4  ' onClick={()=>alert("Thanks for the purchase")}>
              Purchase
            </Button>
        </div>
      </Modal>
    
  
  )
}

export default Cart;
>>>>>>> 97862ddfa1dc2d8933930039482150a37e521b7a
