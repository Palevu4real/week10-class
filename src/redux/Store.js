import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Cart/Cart'

export default configureStore({
  reducer: {
    cart:cartReducer,
  },
});