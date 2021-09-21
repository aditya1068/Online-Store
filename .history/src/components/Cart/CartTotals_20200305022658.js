import React from 'react'
import {Link} from 'react-router-dom'
export default function CartTotals({value}) {
    const{cartSubTotal, cartTax, CartTotal, clearCart}= value;
    return (
       <React.Fragment>
           <div className="container">
            <div className="row">
        <div className="col-10 nt-2 nl-sn-5 nl-nd-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
    type="button" onClick={()=> clearCart()}
    >clear Cart</button>
            </Link>
            <h5>
                <span className="text-title">
                    subtotal: </span>
                    <strong>$ {cartSubTotal} </strong>
            </h5>
            <h5>
                <span className="text-title">
                    tax: </span>
                    <strong>$ {cartTax} </strong>
            </h5>
            <h5>
                <span className="text-title">
                    total: </span>
                    <strong>$ {CartTotal} </strong>
            </h5>
        </div>
         </div>
           </div>
       </React.Fragment>
    )
}
