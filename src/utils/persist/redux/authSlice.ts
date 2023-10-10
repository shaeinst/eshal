import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthStateType } from '$exporter/type'

const initialState: AuthStateType = {
    token: null,
    isSignedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<AuthStateType>) => {
            state.token = action.payload.token
            state.isSignedIn = action.payload.isSignedIn
        },
        resetAuthState: state => {
            state.token = null
            state.isSignedIn = false
        },
    },
})

export const { setAuthState, resetAuthState } = authSlice.actions
export default authSlice.reducer
