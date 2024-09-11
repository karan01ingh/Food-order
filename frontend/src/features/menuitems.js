import { createSlice } from '@reduxjs/toolkit'
import { food_list } from '../assets/assets'
const initialState = {
    currentList:food_list,
} 
  export const FoodItemSlice = createSlice({
    name: 'FoodItem',
    initialState,
    reducers:{
        CurrentList:(state,action)=>{
            state.currentList=action.payload
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {CurrentList} = FoodItemSlice.actions
  
  export default FoodItemSlice.reducer
//   this is a slice of a store. slice is just like a small piece of store in which we write operation for a particluar portion like we did this for CurrentUser.the functions written the slice are used to chnage the state according to us . there are two para mter (action and state). state symbolysis the initial state and action symbolyese the operaton that user send us 