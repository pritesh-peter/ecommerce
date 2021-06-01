import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (state = {cartItem: []}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {...state, cartItem: [...state.cartItem, item]};
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
