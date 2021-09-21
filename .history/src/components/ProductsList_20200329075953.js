import React, { Component } from 'react';
import Products from "./Products";
import Title from  './Title';

import {ProductConsumer} from '../context';
export default class ProductsList extends Component{
  
    render(){
        
        return(
            <React.Fragment>
                <div className ="py-5">
                <div className ="container">
                    <Title name ="our" title ="products" />
                <div className="row">
                <ProductConsumer>
                {value =>{
                   return value.products.map(product =>{
                       return <Products key={product.id} product= {product} />;
                   })

                }}
                   <iframe width="727" height="409" src="https://www.youtube.com/embed/fm8MGPKgUPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ProductConsumer>
                </div>
             </div>
            </div>
            
              </React.Fragment>    
        );
    }
}