import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
export default class Navbar1 extends Component {
  render() {
    return (
      <Dropdown className="navbar navbar-dark bg-white mb-3">
      <>
      {['Mobile', 'Television', 'laptop', 'headphone', 'Poerbank', 'battery'].map(
        (variant) => (
          <>
            <DropdownButton
              //as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Actiooooooooooon</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>{' '}
            
 </>

        ),
      )}
    </>
    <Link to= "/" className= "nav-link"> Offer Zone </Link>
    </Dropdown>
    );
  }
}



