import React, { useContext } from 'react'
import { useRef } from 'react';
import { FormGroup,FormControl, Form, Col, FormLabel, Row, FormText, Button} from 'react-bootstrap'
import { ItemContext } from '../store/ItemContext';
 

const AddProduct = () => {
  const shoeRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();

  const { addProduct } = useContext(ItemContext);

  const submitHandler=(e)=>{
    e.preventDefault();
    const newProduct = {
      shoe: shoeRef.current.value,
      description: descRef.current.value,
      price: priceRef.current.value,
      L: largeRef.current.value,
      M: mediumRef.current.value,
      S: smallRef.current.value,
    }
    
    addProduct(newProduct);
    console.log(newProduct);
  };


  return (
    <Form onSubmit={submitHandler}>
      <Row className='mb-2'>
        <FormGroup as={Col}>
          <FormLabel>Shoe</FormLabel>
          <FormControl ref={shoeRef} />
        </FormGroup>
        <FormGroup as={Col}>
          <FormLabel>Description</FormLabel>
          <FormControl ref={descRef}/>
        </FormGroup>
        <FormGroup as={Col}>
          <FormLabel>Price</FormLabel>
          <FormControl type='number' ref={priceRef}/>
        </FormGroup>
      </Row>
      <Row className='mb-3'>
        <FormLabel>Size and Availablity</FormLabel>
        <FormGroup as={Col} sm={2}>
          <FormLabel>Large</FormLabel>
          <FormControl type='number'  defaultValue={0} min={0}  ref={largeRef}/>
        </FormGroup>
        <FormGroup as={Col} sm={2}>
          <FormLabel>Medium</FormLabel>
          <FormControl type='number' defaultValue={0} min={0} ref={mediumRef} />
        </FormGroup>
        <FormGroup as={Col} sm={2}>
          <FormLabel>Small</FormLabel>
          <FormControl type='number' defaultValue={0} min={0} ref={smallRef}/>
        </FormGroup>
      </Row>
      <Row className='d-flex justify-content-center align-items-center '  >
          <Button type='submit' className='fs-4' variant='primary'>Add to Inventory</Button>
      </Row>
    </Form>
  )
};

export default AddProduct;