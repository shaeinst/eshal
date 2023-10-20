import { useEffect, useState } from 'react'
import { StatusBarStyle } from 'react-native'
import { DefaultTheme, Theme } from '@react-navigation/native'

import { storageToken } from '$exporter/persist'
import { LINKING } from '$exporter/constant'
import { useColors, useZustandStore } from '$exporter'

export default function useInit() {
    //
    const [isAppLaunching, setIsAppLaunching] = useState(true)
    const { init, auth } = useZustandStore()
    const { get: getToken } = storageToken()
    const {
        themeMode,
        COLORS: { background },
    } = useColors()
    const barStyle: StatusBarStyle = themeMode === 'dark' ? 'light-content' : 'dark-content'
    const navTheme: Theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background } }

    useEffect(() => {
        // storageFreshApp.set(true)
        getToken()
            .then(token => {
                const isSignedIn = token ? true : false
                useZustandStore(state => state.setAuth({ token, isSignedIn }))
                useZustandStore(state => state.setIsFreshApp(!isSignedIn))
            })
            .finally(() => {
                setTimeout(() => {
                    setIsAppLaunching(false)
                }, 100)
            })
    }, [])

    return {
        isAppLaunching,
        isSignedIn: auth.isSignedIn,
        isFreshApp: init.isFreshApp,
        theme: { background, navTheme, barStyle },
        linking: auth.isSignedIn ? LINKING.home : LINKING.auth,
    }
}
