import { useEffect } from '@native'
import { SplashScreen, StatusBarStyle } from '@expo'
import { QueryClient } from '@3rd'

import { useColors, useZustandStore } from '$exporter'
import { useLocalStorage } from '$exporter/persist'

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 200)

const queryClient = new QueryClient()

export default function useAppInit() {
    //

    const { themeMode } = useColors()
    const { setAuth, setIsFreshApp } = useZustandStore()
    const { authToken } = useLocalStorage()

    const statusBarStyle: StatusBarStyle = themeMode === 'dark' ? 'dark' : 'light'

    useEffect(() => {
        const token = authToken.get
        const hasToken = token ? true : false
        if (hasToken) setAuth({ token, isSignedIn: true })
        setIsFreshApp(!hasToken)
    }, [])

    return {
        statusBarStyle,
        queryClient,
    }
}
