// import { INCRE, DECRE } from "./action";
// import React from 'react'


// export const counterReducer = (state = 1, action) => {
//     switch (action.type) {
//         case INCRE:
//             return state +1
//         case DECRE:
//             return state -1
//     }
// }
import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice(
    {
        name: "Counter",
        initialState: 0,
        reducers:{
            increment:state=>state+1,
            decrement:state=>state-1
        }
    }
) 
export default counterSlice.reducer;