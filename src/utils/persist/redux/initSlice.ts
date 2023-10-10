import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SliceType = {
    isFreshApp: boolean
}

const initialState: SliceType = {
    isFreshApp: false,
}

export const initSlice = createSlice({
    name: 'init',
    initialState: initialState,
    reducers: {
        setInitState: (state, action: PayloadAction<SliceType>) => {
            state.isFreshApp = action.payload.isFreshApp
        },
    },
})

export const { setInitState } = initSlice.actions
export default initSlice.reducer
