import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{num:0},
    reducers:{
        add:(state)=>{
            state.num+=1;
        }
    }
});

export const {add} =counterSlice.actions;
export default counterSlice.reducer;