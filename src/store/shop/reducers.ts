import { ShopState, ShopActionsTypes, ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

const initialState: ShopState = {
  products: [
    {
      id: "1",
      type: "Classic",
      name: "Cheesy bites trio shrimp pizza",
      voteAverage: 4.9,
      description: "Shrimp, onion, red capsicum, pineapple, black olive, parsley, Mozzarella cheese, string cheese two color, Sweet chili sauce. Cheesy Bites Trio.",
      smallPrice: 15,
      mediumPrice: 25,
      largerice: 33
    },
    {
      id: "2",
      type: "Modern",
      name: "Mushall rite shirmp pizza",
      voteAverage: 4.9,
      description: "Shrimp, onion, red capsicum, pineapple, black olive, parsley, Mozzarella cheese, string cheese two color, Sweet chili sauce. Cheesy Bites Trio.",
      smallPrice: 15,
      mediumPrice: 25,
      largerice: 33
    },
    {
      id: "3",
      type: "Modern",
      name: "Seafood black ri pepper",
      voteAverage: 4.9,
      description: "Shrimp, onion, red capsicum, pineapple, black olive, parsley, Mozzarella cheese, string cheese two color, Sweet chili sauce. Cheesy Bites Trio.",
      smallPrice: 15,
      mediumPrice: 25,
      largerice: 33
    },
    {
      id: "4",
      type: "Classic",
      name: "Cheesy bites trio shrimp pizza",
      voteAverage: 4.9,
      description: "Shrimp, onion, red capsicum, pineapple, black olive, parsley, Mozzarella cheese, string cheese two color, Sweet chili sauce. Cheesy Bites Trio.",
      smallPrice: 15,
      mediumPrice: 25,
      largerice: 33
    },
    {
      id: "5",
      type: "Modern",
      name: "Seafood black ri pepper",
      voteAverage: 4.9,
      description: "Shrimp, onion, red capsicum, pineapple, black olive, parsley, Mozzarella cheese, string cheese two color, Sweet chili sauce. Cheesy Bites Trio.",
      smallPrice: 15,
      mediumPrice: 25,
      largerice: 33
    },
  ]
} 

export function shopReducer(
  state = initialState, 
  action: ShopActionsTypes
) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload]
      }

    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(product => product.id !== action.payload.id)
      }

    default:
      return state
  }
}