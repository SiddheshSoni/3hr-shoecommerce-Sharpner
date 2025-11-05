import React, { useContext } from 'react'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router';
import "./Navigation.css"
import { ItemContext } from '../../store/ItemContext';

const Navigation = (props) => {
  const {items} = useContext(ItemContext);
  const totalItem = items ? items.length :0;
  return (
    <Navbar className='navbar-dark bg-dark fixed-top'>
      <Container className='d-flex justify-content-between align-items-center'>
        <Nav className='mx-auto'>
            <Nav.Link as={NavLink} to="/AddProduct">Add Product</Nav.Link>
            <Nav.Link as={NavLink} to="/">Store</Nav.Link>
        </Nav>
            <Button onClick={props.onShowCart}> 
              Cart <Badge pill bg='primary'>{totalItem}</Badge> 
            </Button>
      </Container>
    </Navbar>
  )
}

export default Navigation