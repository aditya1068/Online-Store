import React, { Component } from 'react';

export default class Footer2 extends Component {
    render() {
      return (
        <div className="main-footer">
              <div className= "container">
              <div className= "row">
                  {/* column1 */}
                  <div className= "col">
                  <i class="fab fa-paypal"></i>
                  <i class="fab fa-paypal"></i>
                  <i class="fab fa-paypal"></i>
                  <i class="fab fa-paypal"></i>
                  <i class="fab fa-paypal"></i>
                 
                   {/* column2 */}
                   <div className= "col">
                      <h4>Information</h4>
                      <ul className="list-unstyled">
                          <li>About US</li>
                          <li>Delivery Information</li>
                          <li>Privacy Policy</li>
                      </ul>
                  </div>

                     </div>
                  </div>
                 </div>
             </div>
            
        
      )
    }
}