import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import initReducer from './initSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        init: initReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
