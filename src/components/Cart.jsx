import React, { useContext, useEffect } from 'react'
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