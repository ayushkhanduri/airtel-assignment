import {FOOD_ACTIONS} from "../shared/constants/actions.constants";
import {act} from "react-dom/test-utils";

const initialFoodState: FoodTypes.FoodState = {
    data: [],
    filter: {
        priceRange: {
            high: 1000,
            low: 0
        },
        rating: null
    },
    searchText: ''
};

export const FoodReducer = ( state = initialFoodState , action: SharedTypes.Action ) => {
    switch ( action.type ) {
        case FOOD_ACTIONS.FOOD_PRODUCTS_FETCHED: {
            return {
                ...state,
                data: action.payload
            }
        }
        case FOOD_ACTIONS.FOOD_SEARCH_TEXT_CHANGED: {
            return {
                ...state,
                searchText: action.payload
            }
        }
        case FOOD_ACTIONS.RATING_CHANGED: {
            return {
                ...state,
                filter: {
                    rating: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}
