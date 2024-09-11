import { configureStore} from '@reduxjs/toolkit'
// import userReducer from "../features/userSlice.js"
// import  modeReducer from '../features/modeSlice.js'
import menuReducer from './features/menuitems.js'
import userReducer from './features/currentuser.js'
import modeReducer from './features/theme.js'
import cartReducer from "./features/Cart.js"
export const store = configureStore({
  reducer:{
    FoodItem:menuReducer,
    User:userReducer,
    theme:modeReducer,
    CartItems:cartReducer,
  },
})