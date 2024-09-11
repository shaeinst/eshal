import { useEffect } from '@native'
import { StatusBarStyle } from '@expo'
import { QueryClient } from '@3rd'

import { useColors, useZustandStore } from '$exporter'
import { wdbLocalStorage } from '$exporter/persist'
import { TokenType } from '$exporter/type'

const { get: getToken, KEYS } = wdbLocalStorage
const queryClient = new QueryClient()

export default function useAppInit() {
    //

    const { themeMode, COLORS } = useColors()
    const { setAuth, setIsFreshApp } = useZustandStore()
    const barStyle: StatusBarStyle = themeMode === 'dark' ? 'dark' : 'light'

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
    }, [])

    return {
        theme: { background: COLORS.background, barStyle },
        queryClient,
    }
}
