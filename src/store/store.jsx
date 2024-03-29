import { configureStore } from '@reduxjs/toolkit'
import userSlice from './createSlice'

export const store =  configureStore({
  reducer: {
    user:userSlice
  }
})