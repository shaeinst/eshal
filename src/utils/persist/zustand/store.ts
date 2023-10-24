import { create } from 'zustand'
import { AuthStateType } from '$exporter/type'

interface StoreInterface {
    init: {
        isFreshApp: boolean
    }
    auth: AuthStateType
    nav: string
    //
    setIsFreshApp: (prop: boolean) => void
    setAuth: (prop: AuthStateType) => void
    resetAuth: () => void
    setNav: (prop: string)=> void
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
        set(state => ({nav: prop}))
    },
}))
