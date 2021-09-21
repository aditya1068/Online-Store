import React, { Component } from 'react';

export default class Footer2 extends Component {
    render() {
      return (
        <div className="main-footer">
              <div className= "container">
              <div className= "row">
                  {/* column1 */}
                  <div className= "col">
                      <ul className="list-unstyled">
                          <i className="fab fa-paypal"> Paypal </i> {""} 
                          <i className="fab fa-paypal"> Master Card </i> {""}
                          <i className="fab fa-paypal"> Rupay </i> {""}
                      </ul>
                  </div>
                          {/* column2 */}
                   <div className= "col">
                      
                      <ul className="list-unstyled">
                           &copy;{(new Date().getFullYear())} Company Name | All Right Reserved |
                           Terms & Sevice | Privacy Policy |                       
                      </ul>
                  </div>
                  
                        {/*Column 3*/}
                        <div className= "col">
                      <ul className="list-unstyled">
                       <i className="fab fa-paypal"> Facebook </i> {""} 
                          <i className="fab fa-paypal"> Google+ </i> {""}
                          <i className="fab fa-paypal"> Twitter </i> {""}
                          <i className="fab fa-paypal"> Pintrest </i> {""} 
                          <i className="fab fa-paypal"> Linkden </i> {""}
                          
                      </ul>
                  </div>
                     </div>
                  </div>
                 </div>
             
            
        
      )
    }
}