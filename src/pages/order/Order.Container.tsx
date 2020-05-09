import React, {Component} from 'react';
import { Layout, Breadcrumb, Rate } from 'antd';

import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import {GetFood, RatingChange} from '../../actions/food.actions';
import FoodCardComponent from "./components/FoodCard.component";
import SearchTextComponent from "./components/SearchText.component";
import {CartComponent} from "./components/Cart.component";
import RangeSliderComponent from "./components/RangeSlider.component";


type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>  ;
const { Content } = Layout;

class OrderContainer extends Component<IProps> {
    componentDidMount(): void {
        const { actions: { GetFood } } = this.props;
        GetFood();
    }
    onRateChange(value: number) {
        const { actions: {RatingChange}} = this.props;
        RatingChange(value);
    }

    render() {
        const { products, searchText, filters, cartItems } = this.props;

        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Order</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <CartComponent cartItems={cartItems} />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <SearchTextComponent searchText={ searchText }/>
                        Rating Filter: <Rate value={filters.rating} onChange={ (value ) => this.onRateChange( value )} />
                        {/*<RangeSliderComponent max={ filters.priceRange.high } min={ filters.priceRange.low } />*/}
                        <FoodCardComponent data={ products } searchText={ searchText } rating={ filters.rating} />
                    </Content>
                </Layout>

            </Content>
        )
    }
}
const mapStateToProps = ( { Food, Cart } : { Food: FoodTypes.FoodState, Cart: CartTypes.CartStore } ) => (
    {
        products: Food.data,
        searchText: Food.searchText,
        filters: Food.filter,
        cartItems: Cart.items
    }
);

const mapDispatchToProps = (dispatch: Dispatch<SharedTypes.Action>) => (
    {
        actions: bindActionCreators(
            {
                GetFood,
                RatingChange
            }, dispatch
        )
    }
)
export default connect( mapStateToProps, mapDispatchToProps )( OrderContainer );
