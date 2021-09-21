import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as  Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {Link,Switch} from 'react-router-dom';
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonContainer} from './button';
import Videos from './Videos';
export default class Navbar1 extends Component {
  
  render() {
    return (
      <Router>
     
      <Dropdown className="navbar navbar-dark bg-white mb-3 margin-left -38px;
      display: none">
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
      
    
  </DropdownButton>

     <DropdownButton id="dropdown-item-button" title="Dropdown button2">
    

     
   </DropdownButton>

     <DropdownButton id="dropdown-item-button" title="Dropdown button3">
     <Dropdown.Item as="button">Action3</Dropdown.Item>
     <Dropdown.Item as="button">Another action2</Dropdown.Item>
     <Dropdown.Item as="button">Something else2</Dropdown.Item>
     <Dropdown.Item as="button">Action3</Dropdown.Item>
    

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
     <Link to ="/videos">Videos</Link>
     <Switch>
          <Route path="/videos">Videos<Videos />
          </Route> </Switch>
    </Router>
   
    );
  }

}




