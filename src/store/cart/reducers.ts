import { CartState, CartActionTypes, ADD_CART, REMOVE_CART, INCREMENT_CART } from './types'

const initialState: CartState = {
  pizzas: [],
  subtotal: 0
}

export function cartReducer(
  state = initialState, 
  action: CartActionTypes
): CartState {
  const subtotal = 0

  switch (action.type) {
    case ADD_CART: 
      return {
        pizzas: [...state.pizzas, action.payload],
        subtotal
      }

    case REMOVE_CART:
      return {
        pizzas: state.pizzas.filter(pizza => pizza.id !== action.payload.id),
        subtotal
      }

    case INCREMENT_CART:
      const pizza = state.pizzas.find(pizza => pizza.id === action.payload.id)
      pizza.amount++
      pizza.price = pizza.amount * pizza.originalPrice

      return {
        pizzas: state.pizzas,
        subtotal
      }

    default:
      return state
  }
}