import React, {Component} from 'react';
import {FoodCardUI} from "../presentational/FoodCard.ComponentUI";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {ModifyCart} from "../../../actions/cart.action";


type IProps =  {
    data: Array<FoodTypes.FoodProduct>,
    searchText: string,
    rating: number
} & ReturnType< typeof mapDispatchToProps >;

class FoodCardComponent extends Component<IProps> {
    onQuantityChanged = ( item: FoodTypes.FoodProduct, quantity: number | undefined ) => {
        const { actions: { ModifyCart } } = this.props;
        const payload: CartTypes.Cart = {
            item: item,
            quantity: quantity
        }
        ModifyCart( payload );
    }
    render() {
        let { data,searchText, rating } = this.props;
        if ( searchText ) {
            data = data.filter( item => item.name.toLowerCase().includes( searchText.toLowerCase() ) );
        }
        if ( rating ) {
            data = data.filter( item => item.rating >= rating );
        }
        return <FoodCardUI data={data} onQuantityChanged={ this.onQuantityChanged }/>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SharedTypes.Action>) => (
    {
        actions: bindActionCreators(
            {
                ModifyCart,
            }, dispatch
        )
    }
)
export default connect( null, mapDispatchToProps )( FoodCardComponent );
