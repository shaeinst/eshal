import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'

import { SplashScreen, AuthInitialScreen, HomeInitialScreen, Onboarding } from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

export default function App() {
    //
    const { isAppLaunching, isFreshApp, isSignedIn, linking, theme, queryClient } = useAppInit()

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer theme={theme.navTheme} linking={linking}>
                <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} />
                {isAppLaunching ? (
                    <SplashScreen />
                ) : (
                    <QueryClientProvider client={queryClient}>
                        {isSignedIn ? (
                            <HomeInitialScreen />
                        ) : isFreshApp ? (
                            // TODO: implement Onboarding screen(s); for now just goto initial Authentication process
                            //<Onboarding />
                            <AuthInitialScreen />
                        ) : (
                            <AuthInitialScreen />
                        )}
                    </QueryClientProvider>
                )}
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
