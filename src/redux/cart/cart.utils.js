export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Check if Item already Existing in our Cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If it exists, return an array with incremented quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //Otherwise, return array with all pre existing elements + new cart item with quantity key set to 1.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
