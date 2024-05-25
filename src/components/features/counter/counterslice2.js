import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:1
}

const counterslice2=createSlice({
    name:'counter2',
    initialState,
    reducers:{
        increment1(state){
            state.count+=1
        },
        decrement(state){
            if(state.count>1){

                state.count-=1
            }
        },
        reset(state){
            state.count=1
        }

    }
})

export const{increment,decrement,reset}=counterslice2.actions
export default counterslice2.reducer