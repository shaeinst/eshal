import { useEffect, useState } from 'react'
import { StatusBarStyle } from 'react-native/types'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultTheme, Theme } from '@react-navigation/native'

import { RootState, setAuthStateRedux, setInitStateRedux, useColors } from '$exporter'
import { storageFreshApp, storageToken } from '$exporter/persist'
import { LINKING } from '$exporter/constant'

function useInit() {
    //
    const [isAppLaunching, setIsAppLaunching] = useState(true)
    const { isFreshApp } = useSelector((state: RootState) => state.init)
    const { isSignedIn } = useSelector((state: RootState) => state.auth)

    const {
        themeMode,
        COLORS: { background },
    } = useColors()
    const barStyle: StatusBarStyle = themeMode === 'dark' ? 'light-content' : 'dark-content'
    const navTheme: Theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background } }

    const dispatch = useDispatch()
    const { get: getToken } = storageToken()

    useEffect(() => {
        // storageFreshApp.set(true)
        getToken()
            .then(token => {
                const isSignedIn = token ? true : false
                dispatch(setAuthStateRedux({ token, isSignedIn }))

                if (isSignedIn) dispatch(setInitStateRedux({ isFreshApp: false }))
                else dispatch(setInitStateRedux({ isFreshApp: true }))
            })
            .finally(() => {
                setIsAppLaunching(false)
            })
    }, [])

    return {
        isAppLaunching,
        isSignedIn,
        isFreshApp,
        theme: { background, navTheme, barStyle },
        linking: isSignedIn ? LINKING.home : LINKING.auth,
    }
}

export default useInit
