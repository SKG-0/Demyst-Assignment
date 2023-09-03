import { configureStore } from '@reduxjs/toolkit'
import balanceSheetReducer from "./slices/balanceSheetSlice.ts"
import businessDetailsReducer from "./slices/bussinessDetailsSlice.ts"
import decisionReducer from './slices/decisionSlice.ts'

export const store = configureStore({
  reducer: {
    balanceSheet: balanceSheetReducer,
    businessDetails: businessDetailsReducer,
    decision:decisionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch