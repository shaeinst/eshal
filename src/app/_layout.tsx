import { Text, StyleSheet } from '@native'
import { SplashScreen, Stack, StatusBar } from '@expo'
import { GestureHandlerRootView, QueryClientProvider, SafeAreaView } from '@3rd'

import { ROUTES } from '$exporter'
import { useAppInit } from '$exporter/hooks'

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 5000)

export default function Layout() {
    const { isAppLaunching, isFreshApp, isSignedIn, theme, queryClient } = useAppInit()

    return (
        <GestureHandlerRootView style={styles.gestureHandler}>
            {
                // NOTE:
                // StatusBar is not workig as expected. it need to be resolved
            }
            {/* <StatusBar style="inverted" backgroundColor="#44f" /> */}
            <QueryClientProvider client={queryClient}>
                <SafeAreaView style={styles.safeAreaView}>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={ROUTES.AUTH.name} options={{ presentation: 'modal' }} />
                        <Stack.Screen name={ROUTES.HOME.name} />
                    </Stack>
                </SafeAreaView>
            </QueryClientProvider>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    gestureHandler: {
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#0f0',
    },
})
