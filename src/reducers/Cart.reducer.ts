import {CART_ACTION} from "../shared/constants/actions.constants";

const initialValue: CartTypes.CartStore = {
    items: []
}

export const CartReducer = ( state = initialValue, action: SharedTypes.Action ) => {
    console.log(action);
    switch ( action.type ) {
        case CART_ACTION.ITEM_MODIFIED: {
            let total = state.items.filter( item => item.item.id !== action.payload.item.id );
            if ( action.payload.quantity) {
                total.push( action.payload );
            }
            return  {
                ...state,
                items: [ ...total ]
            }
        }
        default: {
            return state;
        }
    }
}
