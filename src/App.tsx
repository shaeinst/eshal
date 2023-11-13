import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'

import { SplashScreen, AuthInitialScreen, HomeInitialScreen, Onboarding } from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'
import { LINKING } from '$exporter/constant'

export default function App() {
    //
    const { isAppLaunching, isFreshApp, isSignedIn, theme, queryClient } = useAppInit()

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer theme={theme.navTheme} linking={LINKING}>
                <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} />
                {isAppLaunching ? (
                    <SplashScreen />
                ) : (
                    <QueryClientProvider client={queryClient}>
                        {
                            // TODO:
                            !isSignedIn ? (
                                <HomeInitialScreen />
                            ) : isFreshApp ? (
                                // TODO: implement Onboarding screen(s); for now just goto initial Authentication process
                                //<Onboarding />
                                <AuthInitialScreen />
                            ) : (
                                <AuthInitialScreen />
                            )
                        }
                    </QueryClientProvider>
                )}
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
