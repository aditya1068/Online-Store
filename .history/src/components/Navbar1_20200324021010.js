import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {DropdownButton} from 'react-bootstrap/DropdownButton';
export default class Navbar1 extends Component {
  render() {
    return (
      <>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
          <>
            <DropdownButton
              //as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
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
    );
  }
}



