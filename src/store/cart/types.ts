export interface Pizza {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  amount: number;
}

export interface CartState {
  pizzas: Pizza[];
  subtotal: number;
}

export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const INCREMENT_CART = 'INCREMENT_CART'
export const DECREMENT_CART = 'DECREMENT_CART'

interface AddCartAction {
  type: typeof ADD_CART
  payload: Pizza
}

interface RemoveCartAction {
  type: typeof REMOVE_CART
  payload: {
    id: string;
  }
}

interface IncrementCartAction {
  type: typeof INCREMENT_CART
  payload: {
    id: string;
  }
}

interface DecrementCartAction {
  type: typeof DECREMENT_CART
  payload: {
    id: string;
  }
}

export type CartActionTypes = AddCartAction | RemoveCartAction | IncrementCartAction | DecrementCartAction
