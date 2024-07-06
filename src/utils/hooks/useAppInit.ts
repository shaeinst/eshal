import { useEffect, useState } from 'react'
import { StatusBarStyle } from 'react-native'
import { QueryClient } from '@tanstack/react-query'
import { DefaultTheme, Theme } from '@react-navigation/native'

import { useColors, useZustandStore } from '$exporter'
import { wdbLocalStorage } from '$exporter/persist'
import { TokenType } from '$exporter/type'

const { get: getToken, KEYS } = wdbLocalStorage
const queryClient = new QueryClient()

export default function useInit() {
    //
    const [isAppLaunching, setIsAppLaunching] = useState(true)

    const {
        themeMode,
        COLORS: { background },
    } = useColors()
    const { init, auth, setAuth, setIsFreshApp } = useZustandStore()
    const barStyle: StatusBarStyle = themeMode === 'dark' ? 'light-content' : 'dark-content'
    const navTheme: Theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background } }

    useEffect(() => {
        getToken<TokenType>(KEYS.TOKEN)
            .then(token => {
                const hasToken = token ? true : false
                if (token) setAuth({ token, isSignedIn: hasToken })
                setIsFreshApp(!hasToken)
            })
            .catch(e => {
                console.log('ERROR from useAppInit.ts: \n', e)
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
