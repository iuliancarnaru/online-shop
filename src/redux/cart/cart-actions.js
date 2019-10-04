import { cartActionTypes } from "./cart-types";

// we don't need to pass a payload
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});
