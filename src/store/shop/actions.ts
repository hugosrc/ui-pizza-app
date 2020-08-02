import { Product, ShopActionsTypes, ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

export function addProduct(newProduct: Product): ShopActionsTypes {
  return {
    type: ADD_PRODUCT,
    payload: newProduct
  }
}

export function removeProduct(id: string): ShopActionsTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id
    }
  }
}