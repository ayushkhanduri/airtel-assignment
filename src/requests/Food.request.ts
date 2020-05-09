import {API_CONSTANTS} from "../shared/constants/api.contants";

export const GetFoodProducts = (): Promise<Array<FoodTypes.FoodProduct>> =>  {
    const url = API_CONSTANTS.GET_PRODUCTS;
    return fetch( url ).then( ( response ) => {
        return response.json();
    }  ).then( ( ( response: FoodTypes.FoodProductResponse ) => {
        return response.data;
    } ) );
}
