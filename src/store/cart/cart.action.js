import { USER_ACTION_TYPE } from "./cart.types";

export const createAction = (type, payload) => {
  return { type, payload };
};

const addCartItems = (productToAdd, cartitems) => {
  const existingitem = cartitems.find((item) => item.id === productToAdd.id);

  if (!existingitem) {
    return [...cartitems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartitems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
};

const removeCartItem = (productToRemove, cartitems) => {
  const producToreduce = cartitems.find(
    (item) => item.id === productToRemove.id
  );

  if (producToreduce.quantity === 1) {
    return cartitems.filter((items) => items.id !== productToRemove.id);
  } else {
    return cartitems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
};
const clearCartItem = (productToClear, cartitems) => {
  return cartitems.filter((item) => item.id !== productToClear.id);
};

export const setIscartOpen = (bool) => {
  return createAction(USER_ACTION_TYPE.OPEN_CART, bool);
};

export const addItemsToCart = (productToAdd, cartitems) => {
  const newcartItems = addCartItems(productToAdd, cartitems);
  return createAction(USER_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};

export const removeItemFromCart = (productToRemove, cartitems) => {
  const newcartItems = removeCartItem(productToRemove, cartitems);

  return createAction(USER_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};
export const clearItemFromCart = (productToClear, cartitems) => {
  const newcartItems = clearCartItem(productToClear, cartitems);

  return createAction(USER_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};
