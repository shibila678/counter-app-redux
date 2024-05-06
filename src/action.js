// export const INCRE = "INCREMENT"
// export const DECRE = "DECREMENT"
// export const incre = () => (
//     { type: INCRE }
// )
// export const decre = () => ({
//     type: DECRE }
//     )
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

export const {increment,decrement}=counterSlice.actions;