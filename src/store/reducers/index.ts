import { combineReducers } from 'redux';
import loading from './loader';
import shoppingCart from './shoppingCart';
import product from './product';

export default combineReducers({
  loading,
  shoppingCart,
  product,
});
