import { createSlice } from "@reduxjs/toolkit";

let countNumberSlice = createSlice(
    {
        name : 'countnumber',
        initialState : 100,
        reducers :  {
            handleIncrease : (state, action)=>{
                state = state+1
                return state

            },
            handleDecrease : (state, action)=>{
                state = state-1
                return state

            }
        }
    }
    
)

export const {handleIncrease,handleDecrease } = countNumberSlice.actions

export default countNumberSlice.reducer
