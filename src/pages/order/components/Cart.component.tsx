import React, {Component} from 'react';
import {CartComponentUI} from "../presentational/CartComponentUI";

type IProps = {
    cartItems: Array<CartTypes.Cart>
}
export class CartComponent extends Component<IProps> {
    render() {
        const { cartItems } = this.props;
        const gridView = [
                {
                    title: 'name',
                    key: 'item.name'
                },
                {
                    price: 'price',

                }
            ]
        return (
            <CartComponentUI cartItems={cartItems}/>
        )
    }
}
