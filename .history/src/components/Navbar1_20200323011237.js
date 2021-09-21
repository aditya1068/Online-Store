import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';

 class Navbar1 extends Component{
  render() {
    return (
      <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
        </Navbar.Header>
        </Navbar>
    );
  }
}
export default Navbar1

       
      