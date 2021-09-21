import React from 'react';
import CartItem from './CartItem';
import { storeProducts } from '../../data';

export default function CartList({value}) {
    this.state={
        cart: storeProducts || [] }
    }
    return (
        <div className="container-fluid">
            {Cart.map(item => {
   return <CartItem key={item.id} item={item} value={value} />;
            })}
       </div>
    );
}
