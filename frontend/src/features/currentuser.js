import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    Authenticate:false,
} 
  export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers:{
        CurrentUser:(state,action)=>{
            state.currentUser=action.payload
        },
        Authenticated:(state,action)=>{
          state.Authenticate=action.payload
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {CurrentUser,Authenticated} = userSlice.actions
  
  export default userSlice.reducer
//   this is a slice of a store. slice is just like a small piece of store in which we write operation for a particluar portion like we did this for CurrentUser.the functions written the slice are used to chnage the state according to us . there are two para mter (action and state). state symbolysis the initial state and action symbolyese the operaton that user send us 