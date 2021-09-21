import React from 'react'
import CartItem from './CartItem';
import Cart from './Cart';
export default function CartList({value}) {
    const {Cart} = value
    console.log(value,Cart);
    return (
        <div className="container-fluid">
            {Cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value} />;
            })}
           
        </div>
    )
}
