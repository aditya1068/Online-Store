import React, { Component } from 'react'
import { Nav, NavItem, Badge } from 'react-bootstrap/Navbar';
import Navbar from 'react-bootstrap/Navbar';

export default class Navbar1 extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        )
    }
}
