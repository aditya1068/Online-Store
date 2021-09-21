import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import styled from "styled-components";
export default class Navbar1 extends Component {
  render() {
    return (
      <Dropdown className="navbar navbar-dark bg-white mb-3">
      <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button 1
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Aditya</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another aditya</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu>

 <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button 2
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu>

 <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button 3
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu>

  <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu>

  <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu>

 <Dropdown.Toggle  id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Actiooooon</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 </Dropdown.Menu> 

 <Link to= "/" className= "nav-link"> Offer Zone </Link>
    
     


    </Dropdown>

    
    );
  }
}
