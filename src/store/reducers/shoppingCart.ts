import { ShoppingCartProps } from 'src/@types/ShoppingCart';

const initialState = [];

type ACTIONTYPE = { type: 'SHOPPING_CART'; payload: ShoppingCartProps[] };

function shoppingCart(
  state = initialState,
  action: ACTIONTYPE,
): ShoppingCartProps[] {
  switch (action.type) {
    case 'SHOPPING_CART':
      return [...action.payload];
    default:
      return state;
  }
}

export default shoppingCart;
