import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    currentCartList:null,
} 
  export const CartItemSlice = createSlice({
    name: 'CartItems',
    initialState,
    reducers:{
        currentCartList:(state,action)=>{
            state.currentCartList=action.payload
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {currentCartList} = CartItemSlice.actions
  
  export default CartItemSlice.reducer