import { create } from 'zustand'
import { StateStorage, persist, createJSONStorage } from 'zustand/middleware'

import { AuthStateType, MStatusCreateType } from '$exporter/type'
import { storage } from '$exporter/persist'

interface StoreInterface {
    init: {
        isFreshApp: boolean
    }
    auth: AuthStateType
    nav: string
    hideBottomTab: boolean
    activeBottomTab: {
        name: string
        pressedTime: number
    }
    createPost: MStatusCreateType
    //
    setIsFreshApp: (prop: boolean) => void
    setAuth: (prop: AuthStateType) => void
    resetAuth: () => void
    setNav: (prop: string) => void
    setHideBottomTab: (prop: boolean) => void
    setActiveBottomTab: (prop: { name: string }) => void
    setCreatePost: (prop: MStatusCreateType) => void
}

const zustandStorage: StateStorage = {
    setItem: (name, value) => {
        return storage.set(name, value)
    },
    getItem: name => {
        const value = storage.getString(name)
        return value ?? null
    },
    removeItem: name => {
        return storage.delete(name)
    },
}

export const useStore = create<StoreInterface>()(
    persist(
        (set, get) => ({
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
            activeBottomTab: {
                name: '',
                pressedTime: 0,
            },
            createPost: {
                status: undefined,
                media_ids: undefined,
                poll: undefined,
                in_reply_to_id: undefined,
                sensitive: undefined,
                spoiler_text: undefined,
                visibility: undefined,
                language: undefined,
                scheduled_at: undefined,
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
            setNav: (prop: string) => {
                set(state => ({ nav: prop }))
            },
            setHideBottomTab: (prop: boolean) => {
                set(state => ({ hideBottomTab: prop }))
            },
            setActiveBottomTab: (prop: { name: string }) => {
                set(state => ({
                    activeBottomTab: {
                        name: prop.name,
                        pressedTime:
                            prop.name === state.activeBottomTab.name ? state.activeBottomTab.pressedTime + 1 : 0,
                    },
                }))
            },
            setCreatePost: (prop: MStatusCreateType) => {
                set(state => ({
                    createPost: {
                        ...state.createPost,
                        ...prop,
                    },
                }))
            },
        }),
        {
            name: 'ESHAL_MAIN_ZUSTAND_MMKV', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => zustandStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
