import React, { Component } from 'react';

export default class Footer2 extends Component {
    render() {
      return (
        <div className="second-footer">
            <h1 style={{backgroundColor: "black"}}>
              <div className= "container">
              <div className= "row">
                  {/* column1 */}
                  <div className= "col">
                      <ul className="list-unstyled">
                        <h4> <i className="fab fa-paypal"> Paypal </i> {""} 
                          <i className="fab fa-paypal"> Master Card </i> {""}
                          <i className="fab fa-paypal"> Rupay </i> {""}</h4> 
                      </ul>
                  </div>
                          {/* column2 */}
                   <div className= "col">
                      
                      <ul className="list-unstyled">
                         <h5>  &copy;{(new Date().getFullYear())} Company Name | All Right Reserved |
                           Terms & Sevice | Privacy Policy |    </h5>                   
                      </ul>
                  </div>
                  
                        {/*Column 3*/}
                        <div className= "col">
                      <ul className="list-unstyled">
                     <h4><i className="fab fa-paypal"> Facebook </i> {""} 
                          <i className="fab fa-paypal"> Google+ </i> {""}
                          <i className="fab fa-paypal"> Twitter </i> {""}
                          <i className="fab fa-paypal"> Pintrest </i> {""} 
                          <i className="fab fa-paypal"> Linkden </i> {""}</h4> 
                          
                      </ul>
                  </div>
                     </div>
                  </div></h1>
                 </div>
             
            
        
      )
    }
}