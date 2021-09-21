import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
      return (
          <div className="main-footer"  >
             <h1 style={{backgroundColor: "#333333"}}>
              <div className= "container">
              <div className= "row">
                  {/* column1 */}
                  <div className= "col">
                  <h4 style={{color: "#ffffff"}}>Information</h4>
                      <ul className="list-unstyled" style={{color: "#cccccc"}} >
                         <h6> <li>About US </li> 
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/* column2 */}
                  <div className= "col">
                      <h4 style={{color: "#ffffff"}}>Customer Service</h4>
                      <ul className="list-unstyled" style={{color: "#cccccc"}}>
                         <h6> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/* column3 */}
                  <div className= "col">
                      <h4 style={{color: "#ffffff"}}>Extras</h4>
                      <ul className="list-unstyled" style={{color: "#cccccc"}}>
                         <h6> <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                  {/*column 4 */}
                  <div className= "col">
                      <h4 style={{color: "#ffffff"}}>My Account</h4>
                      <ul className="list-unstyled" style={{color: "#cccccc"}}>
                        <h6>  <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li></h6>
                      </ul>
                  </div>
                   {/*column 5 */}
                   <div className= "col">
                      <h4 style={{color: "#ffffff"}} >Contact Us</h4>
                      <ul className="list-unstyled" style={{color: "#cccccc"}}>
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