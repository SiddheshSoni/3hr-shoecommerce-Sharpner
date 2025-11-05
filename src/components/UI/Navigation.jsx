<<<<<<< HEAD
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
=======
import React, { useContext } from 'react';
import { Nav, Navbar, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ItemContext from '../Store/CartContext';
import "./Navigation.css"
import Container from 'react-bootstrap/Container';



const Navigation = (props) => {
  const {items} = useContext(ItemContext);
  const totalItems = items ? items.length : 0; // Added null check and removed function call

  return (
     <Navbar className='navbar-dark bg-dark fixed-top' >
        <Container fluid className="d-flex justify-content-between align-items-center">

          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to='/Store'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/'>Add Shoes</Nav.Link>
          </Nav>
            
            <Button className='d-flex align-items-center gap-1' variant='info' onClick={props.onShowCart}>
              Cart <Badge pill bg="dark">{totalItems}</Badge>
            </Button>
        </Container>
      </Navbar>
  );
};

export default Navigation;
>>>>>>> 97862ddfa1dc2d8933930039482150a37e521b7a
