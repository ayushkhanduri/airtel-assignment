import {CART_ACTION} from "../shared/constants/actions.constants";

export const ModifyCart = ( item: CartTypes.Cart ) => {
    return {
        type: CART_ACTION.ITEM_MODIFIED,
        payload: item
    }
}
