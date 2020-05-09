import {Dispatch} from "react";
import { GetFoodProducts } from '../requests/Food.request';
import {FOOD_ACTIONS} from "../shared/constants/actions.constants";

export const GetFood = () => {
    return async ( dispatch: Dispatch<SharedTypes.Action> ) => {
        const products: Array<FoodTypes.FoodProduct> = await GetFoodProducts();
        dispatch( {
          payload: products,
          type: FOOD_ACTIONS.FOOD_PRODUCTS_FETCHED
        } )
    }
}
export const SearchTextChange = ( value: string ): SharedTypes.Action => {
    return {
        type: FOOD_ACTIONS.FOOD_SEARCH_TEXT_CHANGED,
        payload: value
    };
}

export const RatingChange= ( value: number ): SharedTypes.Action => {
    return {
        type: FOOD_ACTIONS.RATING_CHANGED,
        payload: value
    };
}
