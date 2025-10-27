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