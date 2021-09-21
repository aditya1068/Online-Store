import React, { Component } from "react";
import Title from '../Title';
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
imort {ProductConsumer} from '../../context';
export default class Cart extends Component {
  render() {
    return(
    <section>
      <Title name ="Your" title ="Cart" />
      <CartColumns />
      <EmptyCart />
    </section>
    );
  }
}