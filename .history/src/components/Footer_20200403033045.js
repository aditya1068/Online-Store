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
                  <h4 style={{color: "#fffff"}}>Information</h4>
                      <ul className="list-unstyled" style={{color: "#ffffe6"}} >
                         <h6> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/* column2 */}
                  <div className= "col">
                      <h4>Customer Service</h4>
                      <ul className="list-unstyled">
                         <h6> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/* column3 */}
                  <div className= "col">
                      <h4>Extras</h4>
                      <ul className="list-unstyled">
                         <h6> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/*column 4 */}
                  <div className= "col">
                      <h4>My Account</h4>
                      <ul className="list-unstyled">
                        <h6>  <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                   {/*column 5 */}
                   <div className= "col">
                      <h4>Contact Us</h4>
                      <ul className="list-unstyled">
                        <h6>  <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                 
                  
                
                  </div>
              </div></h1>
          </div>
          
      )
      }}