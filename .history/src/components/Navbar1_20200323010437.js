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
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right
        <Badge>1</Badge></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navbar1
