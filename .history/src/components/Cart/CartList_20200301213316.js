import React from 'react'
import CartItem from './CartItem';
import Cart from './Cart';
export default function CartList({value}) {
    const {Cart} = value
    console.log(value,Cart);
    return (
        <div>
            Hello from cart list
            <CartItem />
        </div>
    )
}
