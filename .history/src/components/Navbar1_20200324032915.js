import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonContainer} from './button';
export default class Navbar1 extends Component {
  render() {
    return (
      <Dropdown className="navbar navbar-dark bg-white mb-3">
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
  </DropdownButton>

     <DropdownButton id="dropdown-item-button" title="Dropdown button2">
     <Dropdown.Item as="button">Action2</Dropdown.Item>
     <Dropdown.Item as="button">Another action2</Dropdown.Item>
     <Dropdown.Item as="button">Something else2</Dropdown.Item>
     
    

     
   </DropdownButton>

     <DropdownButton id="dropdown-item-button" title="Dropdown button3">
     <Dropdown.Item as="button">Action3</Dropdown.Item>
     <Dropdown.Item as="button">Another action2</Dropdown.Item>
     <Dropdown.Item as="button">Something else2</Dropdown.Item>
   </DropdownButton>

   <DropdownButton id="dropdown-item-button" title="Dropdown button3">
     <Dropdown.Item as="button">Action3</Dropdown.Item>
     <Dropdown.Item as="button">Another action2</Dropdown.Item>
     <Dropdown.Item as="button">Something else2</Dropdown.Item>
   </DropdownButton>

   <DropdownButton id="dropdown-item-button" title="Dropdown button3">
     <Dropdown.Item as="button">Action3</Dropdown.Item>
     <Dropdown.Item as="button">Another action2</Dropdown.Item>
     <Dropdown.Item as="button">Something else2</Dropdown.Item>
   </DropdownButton>


   <ButtonContainer to= "/" className= "nav-link"> Offer Zone </ButtonContainer>
   </Dropdown>
    );
  }
}



