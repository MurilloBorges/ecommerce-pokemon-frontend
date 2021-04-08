import { ProductProps } from 'src/@types/ProductTypes';

const initialState = {
  productList: [],
};

type ACTIONTYPE = { type: 'PRODUCT_LIST'; payload: ProductProps[] };

function category(
  state = initialState,
  action: ACTIONTYPE,
): Record<string, unknown> {
  switch (action.type) {
    case 'PRODUCT_LIST':
      return { productList: action.payload };
    default:
      return state;
  }
}

export default category;
