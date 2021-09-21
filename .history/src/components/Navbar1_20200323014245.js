import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { nav } from 'react-bootstrap';
export default class Navbar1 extends Component {
  render() {
    return (
     
      <Dropdown className="navbar navbar-dark bg-white mb-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
    
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
  }
}
