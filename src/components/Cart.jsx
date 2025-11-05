import React, { useContext, useEffect } from 'react'
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