import { combineReducers, createStore } from 'redux'
import { cartReducer } from './cart/reducers'
import { shopReducer } from './shop/reducers'

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>