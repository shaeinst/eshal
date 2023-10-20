import { create } from 'zustand'
import { AuthStateType } from '$exporter/type'

interface StoreInterface {
    init: {
        isFreshApp: boolean
    }
    auth: AuthStateType
    setIsFreshApp: (prop: boolean) => void
    setAuth: (prop: AuthStateType) => void
    resetAuth: () => void
}

export const useStore = create<StoreInterface>(set => ({
    /**
     * Initial Values
     */
    init: {
        isFreshApp: false,
    },
    auth: {
        token: null,
        isSignedIn: false,
    },
    /**
     * Actions
     */
    setIsFreshApp: (prop: boolean) => {
        set(state => ({ init: { isFreshApp: prop } }))
    },
    setAuth: (prop: AuthStateType) => {
        set(state => ({ auth: prop }))
    },
    resetAuth: () => {
        set(state => ({ auth: { token: null, isSignedIn: false } }))
    },
}))
