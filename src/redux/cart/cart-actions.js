import { cartActionTypes } from "./cart-types";

// we don't need to pass a payload
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
