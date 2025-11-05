import React, { useContext, useEffect } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { ItemContext } from '../store/ItemContext';

const HomePage = () => {

  // const items=[{_id:1, shoe:"adidas", description: "good shoes", price:"20", la:"2", me:"3", sm:"4"}];
  
  const { products,updateProduct, fetchProducts, addItemCart } = useContext (ItemContext);

  useEffect(()=>{
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const addToCartHandler = (product, size)=>{
      addItemCart(product, size);
      updateProduct(product, size);
  }

  return (
    <>
      <Container className='text-center mt-4 mb-2 fs-4'>
        {products && products.map((item)=>{
          return (<Row key={item._id}>
            <Col >{item.shoe}</Col>
            <Col >{item.description}</Col>
            <Col>{item.price}</Col>
            <Col><Button onClick={()=>addToCartHandler(item, "L")}>L</Button>({item.L})</Col>
            <Col><Button onClick={()=>addToCartHandler(item, "M")}>M</Button>({item.M})</Col>
            <Col><Button onClick={()=>addToCartHandler(item, "S")}>S</Button>({item.S})</Col>
        </Row>
        )}
        )}
      </Container>
    </>
  )
}

export default HomePage