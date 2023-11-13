import { useEffect, useState } from 'react'
import { StatusBarStyle } from 'react-native'
import { DefaultTheme, Theme } from '@react-navigation/native'

import { storageToken } from '$exporter/persist'
import { useColors, useZustandStore } from '$exporter'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function useInit() {
    //
    const [isAppLaunching, setIsAppLaunching] = useState(true)

    const {
        themeMode,
        COLORS: { background },
    } = useColors()
    const { init, auth, setAuth, setIsFreshApp } = useZustandStore()
    const { get: getToken } = storageToken()
    const barStyle: StatusBarStyle = themeMode === 'dark' ? 'light-content' : 'dark-content'
    const navTheme: Theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background } }

    useEffect(() => {
        // storageFreshApp.set(true)
        getToken()
            .then(token => {
                const hasToken = token ? true : false
                setAuth({ token, isSignedIn: hasToken })
                setIsFreshApp(!hasToken)
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
        queryClient,
    }
}
