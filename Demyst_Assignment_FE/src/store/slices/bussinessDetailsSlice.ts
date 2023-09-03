import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DataObjectType } from '../../helper/simulateBackendCall'


const initialState:DataObjectType = {
    businessName:"",
    yearEstablished: 0,
    loanAmount: 0,
    accountingProvider: ""
}

const businessDetailsSlice = createSlice({
    name: "businessDetails",
    initialState,
    reducers:{
        fetchBusinessDetails:(state, action:PayloadAction<DataObjectType>) => {
            return {...state, ...action.payload}
        }
    }
})

export const {fetchBusinessDetails} = businessDetailsSlice.actions;
export default businessDetailsSlice.reducer