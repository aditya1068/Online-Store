import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {CartList} = value;
    console.log(CartList);
    return (
        <div className="container-fluid">
            {CartList.map(item => {
   return <CartItem key={item.id} item={item} value={value} />;
            })}
       </div>
    );
}
