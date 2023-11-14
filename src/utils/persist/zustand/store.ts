import { create } from 'zustand'
import { AuthStateType } from '$exporter/type'

interface StoreInterface {
    init: {
        isFreshApp: boolean
    }
    auth: AuthStateType
    nav: string
    hideBottomTab: boolean
    //
    setIsFreshApp: (prop: boolean) => void
    setAuth: (prop: AuthStateType) => void
    resetAuth: () => void
    setNav: (prop: string) => void
    setHideBottomTab: (prop: boolean) => void
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
    nav: 'Eshal',
    hideBottomTab: false,
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
    setNav: (prop: string) => {
        set(state => ({ nav: prop }))
    },
    setHideBottomTab: (prop: boolean) => {
        set(state => ({ hideBottomTab: prop }))
    },
}))
