export interface Product {
  id: string;
  type: string;
  name: string;
  voteAverage: number;
  description: string;
  smallPrice: number;
  mediumPrice: number;
  largerice: number;
}

export interface ShopState {
  products: Product[]
}

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

interface AddProductAction {
  type: typeof ADD_PRODUCT
  payload: Product
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT
  payload: {
    id: string;
  }
}

export type ShopActionsTypes = AddProductAction | RemoveProductAction
