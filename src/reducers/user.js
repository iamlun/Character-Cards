
import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:{value: {head:0,face:0,body:0,accessory:0,skinColor:0,clothesColor:0,name:''}},
    reducers:{
        setHead:(state,action)=>{
            state.value.head=action.payload;
        },
        setFace:(state,action)=>{
            state.value.face=action.payload;
        },
        setBody:(state,action)=>{
            state.value.body=action.payload;
        },
        setAcc:(state,action)=>{
            state.value.accessory=action.payload;
        },
        setSkin:(state,action)=>{
            state.value.skinColor=action.payload;
        },
        setClothe:(state,action)=>{
            state.value.clothesColor=action.payload;
        },
        setName:(state,action)=>{
            state.value.name=action.payload;
        },
        initAll:(state)=>{
            state.value.name='';
            state.value.head=0;
            state.value.face=0;
            state.value.body=0;
            state.value.accessory=0;
            state.value.skinColor=0;
            state.value.clothesColor=0;
        }
    }
});

export const {setHead,setFace,setBody,setAcc,setSkin,setClothe,setName,initAll} =userslice.actions;
export default userslice.reducer;