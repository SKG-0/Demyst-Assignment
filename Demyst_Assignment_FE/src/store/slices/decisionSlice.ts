import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DecisionType {
    preAssessment: number,
}

const initialState:DecisionType = {
    preAssessment: 0
}

const decisionSlice = createSlice({
    name:"decision",
    initialState,
    reducers:{
        setDecision:(state,action:PayloadAction<DecisionType>)=>{
            if(action.payload) state = action.payload
            else return state
            return state
        }
    }
})

export const {setDecision} = decisionSlice.actions;
export default decisionSlice.reducer