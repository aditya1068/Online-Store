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
                  
     {/* column2 */}
     <div className= "col">
     <div className="col-sm">
                          &copy;{(new Date().getFullYear())} Company Name | All Right Reserved | Terms & Sevice | Privacy Policy |
                      </div>
                        </div>
                     </div>
                  </div>
                 </div>
             </div>
            
        
      )
    }
}