import { StatusBar } from 'react-native'
import {
    NavigationContainer,
    DefaultTheme,
    Theme,
} from '@react-navigation/native'

import { useColors } from '$exporter'
import {
    SplashScreen,
    AuthInitialScreen,
    HomeInitialScreen,
    Onboarding,
} from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

function App() {
    //
    const { isAppLaunching, isSignedIn, isFreshApp } = useAppInit()
    const { COLORS, themeMode: theme } = useColors()

    const navTheme: Theme = {
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: COLORS.background },
    }

    if (isAppLaunching) return <SplashScreen />
    return (
        <NavigationContainer theme={navTheme}>
            <StatusBar
                backgroundColor={COLORS.background}
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            />

            {isSignedIn ? (
                <HomeInitialScreen />
            ) : !isFreshApp ? (
                <Onboarding />
            ) : (
                <AuthInitialScreen />
            )}
        </NavigationContainer>
    )
}
export default App
