import React, { Component } from 'react';
import {Nav, NavItem,Navbar, NavDropdown, } from 'react-dom';



export default class Navbar1 extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
  <Navbar href="#home">React-Bootstrap</Navbar>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
    
  </Navbar.Collapse>
</Navbar>
        )
    }
}
