import { createSlice } from "@reduxjs/toolkit";
const initialState={
    theme:'light'
}
export const modeSlice=createSlice(
    {
        name:'theme',
        initialState,
        reducers:{
            setTheme:(state,action)=>{
                state.theme=state.theme==='light'?'dark':'light'
            }
        }

    }
)
export const {setTheme}=modeSlice.actions
export default modeSlice.reducer
