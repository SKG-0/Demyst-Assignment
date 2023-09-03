import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

//Scalable structure for Balance sheet objects
export interface BalanceSheetItemType {
    [name:string]: string
}

interface BalanceSheetType {
    list: BalanceSheetItemType[]
}

const initialState:BalanceSheetType = {
    list: []
}

const balanceSheetSlice = createSlice({
    name: "balanceSheet",
    initialState,
    reducers:{
        fetchBalanceSheet:(state, action:PayloadAction<BalanceSheetItemType[]>) => {
            state.list = action.payload
            return state
        }
    }
})

export const {fetchBalanceSheet} = balanceSheetSlice.actions;
// export const selectList = (state: RootState) => state.balanceSheet.list
export default balanceSheetSlice.reducer