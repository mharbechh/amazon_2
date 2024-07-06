import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  basketItems: [],
  itemsNumber: 0,
  totalPrice: 0,
}
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basketItems = [...state.basketItems, action.payload]
    },
    removeProducts: (state, action) => {
      state.basketItems = []
    },
    removeSingle: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload
      )
    },
    increase: (state, { payload }) => {
      const product = state.basketItems.find((item) => item.id === payload.id)
      product.singleItemQuantity = product.singleItemQuantity + 1
    },
    decrease: (state, action) => {
      const product = state.basketItems.find(
        (item) => item.id === action.payload
      )
      product.singleItemQuantity = product.singleItemQuantity - 1
    },
    calculTotal: (state) => {
      let total = 0
      let amount = 0
      state.basketItems.forEach((item) => {
        amount += item.singleItemQuantity
        total += item.price * item.singleItemQuantity
      })
      state.itemsNumber = amount
      state.totalPrice = total
    },
  },
})

export default basketSlice.reducer
export const {
  addToBasket,
  removeProducts,
  removeSingle,
  increase,
  decrease,
  calculTotal,
} = basketSlice.actions
