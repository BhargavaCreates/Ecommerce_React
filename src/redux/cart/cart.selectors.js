import { createSelector } from "reselect";

// Selects a part of whole state i.e cart in this case.
const selectCart = (state) => state.cart;

// selectCartItems Selector which returns CartItems from whole of State. It takes in two params, 1) array of input selectors i.e selectCart(part of whole state) 2) fuction that returns the Items we need.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Selector for Total Item Count in selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// Selector HiddenCart Value
export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
