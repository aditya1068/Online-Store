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
                          <li><i class="fab fa-paypal"></i></li>
                          <i class="fab fa-paypal"></i>
                          <li><i class="fab fa-paypal"></i></li>
                      </ul>
                  </div>
                          {/* column2 */}
                   <div className= "col">
                      
                      <ul className="list-unstyled">
                          <li> &copy;{(new Date().getFullYear())} Company Name | All Right Reserved | Terms & Sevice | Privacy Policy |</li>
                          
                      </ul>
                  </div>
                  
     {/* column2 */}
     <div className= "col">
     <p className="col-sm">
                          &copy;{(new Date().getFullYear())} Company Name | All Right Reserved | Terms & Sevice | Privacy Policy |
                      </p>
                        </div>
                     </div>
                  </div>
                 </div>
             
            
        
      )
    }
}