import React, { Component } from 'react'

export default class Navbar1 extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-blue bg-dark mb-1">
          <a className="navbar-brand" href="#">
            <h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
