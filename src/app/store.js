import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '@/slices/basketSlice'
import modalReducer from '@/slices/modalSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    modal: modalReducer,
  },
})
