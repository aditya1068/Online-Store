import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {Navbar} from 'react-bootstrap/Navbar';
export default class Navbar1 extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Dropdown className="mr-auto">
          <Dropdown.Link href="#home">Home</Dropdown.Link>
          <Dropdown.Link href="#link">Link</Dropdown.Link>
          <Dropdown title="Dropdown" id="basic-nav-dropdown">
            <Dropdown.Item href="#action/3.1">Action </Dropdown.Item>
            <Dropdown.Item href="#action/3.2">Another action</Dropdown.Item>
            <Dropdown.Item href="#action/3.3">Something</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#action/3.4">Separated link</Dropdown.Item>
          </Dropdown>
        </Dropdown>
        
      </Navbar.Collapse>
    </Navbar>
 
    );
  }
}
