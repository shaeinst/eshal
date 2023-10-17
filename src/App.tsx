import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { SplashScreen, AuthInitialScreen, HomeInitialScreen, Onboarding } from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

export default function App() {
    //
    const { isAppLaunching, isFreshApp, isSignedIn, linking, theme } = useAppInit()

    return (
        <NavigationContainer theme={theme.navTheme} linking={linking}>
            {isAppLaunching ? (
                <SplashScreen />
            ) : (
                <>
                    <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} />

                    {isSignedIn ? (
                        <HomeInitialScreen />
                    ) : isFreshApp ? (
                        // TODO: implement Onboarding screen(s); for now just goto initial Authentication process
                        //<Onboarding />
                        <AuthInitialScreen />
                    ) : (
                        <AuthInitialScreen />
                    )}
                </>
            )}
        </NavigationContainer>
    )
}
