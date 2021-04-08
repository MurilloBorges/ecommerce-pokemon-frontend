const initialState = false;

type ACTIONTYPE =
  | { type: 'LOADING'; payload: boolean };

function loader(state = initialState, action: ACTIONTYPE): boolean {
  switch (action.type) {
    case 'LOADING':
      return action.payload;
    default:
      return state;
  }
}

export default loader;
