import { combineReducers } from 'redux';
import { FoodReducer as Food } from './FoodReducer';
import { CartReducer as Cart } from './Cart.reducer';
export default combineReducers( { Food, Cart} );
