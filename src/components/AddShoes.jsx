import React, { useRef } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const AddShoes = () => {
    const shoeNameRef = useRef();
    const descRef = useRef();
    const pricRef = useRef();
    const largeRef = useRef();
    const mediumRef = useRef();
    const smallRef = useRef();

    const API_Endpoint = "https://crudcrud.com/api/df078ed6c5fc4a3d9031cb3ae3121c4a";

    const submitHandler= async (e)=>{
        e.preventDefault();
        // console.log(e);
        try{
            const res = await fetch (`${API_Endpoint}/Products`,{
                method:'POST',
                body:JSON.stringify({
                    shoe: shoeNameRef.current.value ,
                    desc: descRef.current.value,
                    price: pricRef.current.value,
                    large: largeRef.current.value,
                    medium: mediumRef.current.value,
                    small: smallRef.current.value,
                    
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            
            const data = await res.json();
            if(res.ok){
                console.log(data);
            }else{
                throw new Error("error !!!!!!")
            }
        }catch(err){
            console.log(err);
        }


    }
  return (
    <>
        <Form onSubmit={submitHandler}>
            <Row className='mb-3'>
                <FormGroup as={Col}>
                    <FormLabel>ShoeName</FormLabel>
                    <FormControl ref={shoeNameRef}/>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel>Description</FormLabel>
                    <FormControl ref={descRef}/>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel>Price</FormLabel>
                    <FormControl ref={pricRef}/>
                </FormGroup>
            </Row>
            <Row className='mb-3'>
                <FormGroup as={Col} sm="2">
                    <FormLabel>Large</FormLabel>
                    <FormControl type='Number' min={0} defaultValue={0} ref={largeRef}/>
                </FormGroup>
                <FormGroup as={Col} sm="2">
                    <FormLabel>Medium</FormLabel>
                    <FormControl type='Number' min={0} defaultValue={0} ref={mediumRef}/>
                </FormGroup>
                <FormGroup as={Col} sm="2">
                    <FormLabel>Small</FormLabel>
                    <FormControl type='Number' min={0} defaultValue={0} ref={smallRef}/>
                </FormGroup>
            </Row>
                <Button type='Submit'>Add to Inventory</Button>
            
        </Form>
    </>
  )
}

export default AddShoes