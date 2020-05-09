import React, {FC, Fragment} from 'react';
import {Layout, Descriptions, Button, Divider} from "antd";
const { Sider } = Layout;

const { Item } = Descriptions;
type IProps = {
    cartItems: Array<CartTypes.Cart>
}
export const CartComponentUI: FC<IProps> = ( {cartItems}) => (
    <Sider style={{padding: "10px"}} className="site-layout-background" width={200}>
        {
            cartItems.map( item => {
                return (
                    <Fragment>
                        <Descriptions title={item.item.name }>
                            <Item label='price'> { item.item.price }</Item><br/>
                            <Item label='quantity'> { item.quantity }</Item>
                            <Item label='total'> { item.item.price * item.quantity } </Item>
                        </Descriptions>
                        <Divider />
                    </Fragment>

                )
            })
        }
        { cartItems.length ? <Button type={"primary"} >Buy (Rs {getTotal(cartItems)} ) </Button>: null}
    </Sider>
);
function getTotal( items: Array<CartTypes.Cart> ) {
    return items.reduce( (total, item ) => {
        total += item.quantity * item.item.price;
        return total;
    },0)
}
