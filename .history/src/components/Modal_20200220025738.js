import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer } from './button';
import {Link} from "react-router-dom";


export default class  extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                       <ModalContainer>
                           
                       </ModalContainer>
                }
            }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div
