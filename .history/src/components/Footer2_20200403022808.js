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
                          <i class="fab fa-paypal"> Paypal </i> {""} 
                          <i class="fab fa-paypal"> Master Card </i> {""}
                          <i class="fab fa-paypal"> Rupay </i> {""}
                      </ul>
                  </div>
                          {/* column2 */}
                   <div className= "col">
                      
                      <ul className="list-unstyled">
                          <li> &copy;{(new Date().getFullYear())} Company Name | All Right Reserved |
                          <li> Terms & Sevice | Privacy Policy |</li></li>                        
                      </ul>
                  </div>
                  
                        {/*Column 3*/}
                        <div className= "col">
                      <ul className="list-unstyled">
                       <  i class="fab fa-paypal"> Facebook </i> {""} 
                          <i class="fab fa-paypal"> Google+ </i> {""}
                          <i class="fab fa-paypal"> Twitter </i> {""}
                          <i class="fab fa-paypal"> Pintrest </i> {""} 
                          <i class="fab fa-paypal"> Linkden </i> {""}
                          
                      </ul>
                  </div>
                     </div>
                  </div>
                 </div>
             
            
        
      )
    }
}