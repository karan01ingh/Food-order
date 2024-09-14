import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    currentCartList:[],
    currentitems:null,
} 
  export const CartItemSlice = createSlice({
    name: 'CartItems',
    initialState,
    reducers:{
        currentCartList:(state,action)=>{
            state.currentCartList=action.payload;
        },
        currentItems:(state,action)=>{
          state.currentitems=action.payload;
        },
        addToCart:(state,action)=>{
            // const index=state.currentCartList.findIndex(item=>item._id===action.payload._id);
            // if(index>=0){
            //   state.currentCartList[index].quantity+=1;
            // }
            // else{
            //   const temparray={...action.payload,quantity:1};
            //   state.currentCartList.push(temparray);
            // }
            state.currentCartList.push(action.payload);
        },
        removefromCart:(state,action)=>{
          state.currentCartList((prev) =>
            prev.filter((post) => post._id !==action.payload._id)
          );
          // state.currentCartList=newarray;
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {currentCartList,currentItems,addToCart,removefromCart} = CartItemSlice.actions
  export default CartItemSlice.reducer