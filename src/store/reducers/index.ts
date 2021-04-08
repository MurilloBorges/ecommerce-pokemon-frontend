import { combineReducers } from 'redux';
import loading from './loader';
import shoppingCart from './shoppingCart';
import pokemon from './pokemon';

export default combineReducers({
  loading,
  shoppingCart,
  pokemon,
});
