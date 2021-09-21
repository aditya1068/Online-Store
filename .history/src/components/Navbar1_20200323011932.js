import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';

 class Navbar1 extends Component{
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar1


<Navbar.Brand>
  <a href="#">React-Bootstrap</a>
</Navbar.Brand>
<Navbar.Toggle /> 
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
      