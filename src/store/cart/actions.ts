import { Pizza, CartActionTypes, ADD_CART, REMOVE_CART, INCREMENT_CART, DECREMENT_CART } from "./types";

export function addCart(newPizza: Pizza): CartActionTypes {
  return {
    type: ADD_CART,
    payload: newPizza
  }
}

export function removeCart(id: string): CartActionTypes {
  return {
    type: REMOVE_CART,
    payload: {
      id
    }
  }
}

export function incrementCart(id: string): CartActionTypes {
  return {
    type: INCREMENT_CART,
    payload: {
      id
    }
  }
}

export function decrementCart(id: string): CartActionTypes {
  return {
    type: DECREMENT_CART,
    payload: {
      id
    }
  }
}