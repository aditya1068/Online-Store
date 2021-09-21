import React from 'react';
import CartItem from './CartItem';
export default function CartList({ Cart }) {
 const { value } = Cart;
 console.log(value,Cart);
  return (
    <div className="container-fluid">
         { Cart.map(item => {
return <CartItem key={item.id} item={item} value={value} />;
        })}
      </div>
);
}

  
    
    
