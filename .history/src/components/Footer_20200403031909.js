import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
      return (
          <div className="main-footer"  >
             <h1 style={{backgroundColor: "black"}}>
              <div className= "container">
              <div className= "row">
                  {/* column1 */}
                  <div className= "col">
                      <h2>Information</h2>
                      <ul className="list-unstyled">
                         <h4> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h4>
                      </ul>
                  </div>
                  {/* column2 */}
                  <div className= "col">
                      <h2>Customer Service</h2>
                      <ul className="list-unstyled">
                         <h4> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h4>
                      </ul>
                  </div>
                  {/* column3 */}
                  <div className= "col">
                      <h2>Extras</h2>
                      <ul className="list-unstyled">
                         <h4> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h4>
                      </ul>
                  </div>
                  {/*column 4 */}
                  <div className= "col">
                      <h4>My Account</h4>
                      <ul className="list-unstyled">
                          <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li>
                      </ul>
                  </div>
                   {/*column 5 */}
                   <div className= "col">
                      <h4>Contact Us</h4>
                      <ul className="list-unstyled">
                          <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li>
                      </ul>
                  </div>
                 
                  
                
                  </div>
              </div></h1>
          </div>
          
      )
      }}