import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar, StyleSheet, Text } from 'react-native'

import { ROUTES } from '$exporter'
// import { SplashScreen } from '$exporter/screen'
import { useAppInit } from '$exporter/hooks'

export default function Layout() {
    const { isAppLaunching, isFreshApp, isSignedIn, theme, queryClient } = useAppInit()

    return (
        <GestureHandlerRootView style={styles.gestureHandler}>
            <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} />
            {isAppLaunching ? (
                //<SplashScreen />
                <Text>splash screen </Text>
            ) : (
                <QueryClientProvider client={queryClient}>
                    <Stack
                        screenOptions={{
                            headerShown: true,
                        }}
                        initialRouteName={isSignedIn ? ROUTES.HOME.TIMELINE.path : ROUTES.AUTH.LOGIN.path}
                        //
                    >
                        <Stack.Screen name={ROUTES.AUTH.name} options={{ presentation: 'modal' }} />
                        <Stack.Screen name={ROUTES.HOME.name} />
                    </Stack>
                </QueryClientProvider>
            )}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    gestureHandler: {
        flex: 1,
    },
})
