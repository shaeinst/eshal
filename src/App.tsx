import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { SplashScreen, AuthInitialScreen, HomeInitialScreen, Onboarding } from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

export default function App() {
    //
    const { isAppLaunching, isFreshApp, isSignedIn, linking, theme } = useAppInit()

    if (isAppLaunching) return <SplashScreen />
    return (
        <NavigationContainer theme={theme.navTheme} linking={linking}>
            <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} />

            {isSignedIn ? (
                <HomeInitialScreen />
            ) : isFreshApp ? (
                <Onboarding />
            ) : (
                <AuthInitialScreen />
            )}
        </NavigationContainer>
    )
}
