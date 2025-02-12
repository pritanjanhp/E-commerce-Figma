import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type itemType = {
  quantity: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
};

interface ProductsState {
  items: itemType[];
  cart: itemType[];
  fav: itemType[];
  status: "idle" | "loading" | "success" | "failed";
  productQuantity: number;
  addedProducts: Set<string>;
}

const cartSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    cart: [],
    fav: [],
    status: "idle",
    productQuantity: 0,
    addedProducts: new Set()
  } as ProductsState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<itemType>) => {
      const productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity += 1;
        state.productQuantity += 1;
      } else {
        // state.addedProducts.add(action.payload);
        state.cart.push({ ...action.payload, quantity: 1 });
        state.productQuantity += 1;
      }
    },
    addProductToFavourite: (state, action: PayloadAction<itemType>) => {
      // state.fav.push({...action.payload.id, quantity:1});
      const productInFav = state.fav.find(
        (item) => item.id === action.payload.id
      );
      if (productInFav) {
        productInFav.quantity += 1;
      } else {
        state.fav.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (productIndex >= 0) {
        state.productQuantity -= state.cart[productIndex].quantity;
        state.cart.splice(productIndex, 1);
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && action.payload.quantity >= 0) {
        const diff = action.payload.quantity - product.quantity;
        product.quantity = action.payload.quantity;
        state.productQuantity += diff;
      }
    }
  }
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateQuantity,
  addProductToFavourite
} = cartSlice.actions;
export default cartSlice.reducer;
