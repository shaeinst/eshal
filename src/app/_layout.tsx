import { StyleSheet } from '@native'
import { SplashScreen, Stack, StatusBar } from '@expo'
import { GestureHandlerRootView, QueryClientProvider, SafeAreaView } from '@3rd'

import { ROUTES } from '$exporter'
import { useAppInit } from '$exporter/hooks'

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 200)

export default function Layout() {
    const { theme, queryClient } = useAppInit()

    return (
        <GestureHandlerRootView style={styles.gestureHandler}>
            {
                // NOTE:
                // StatusBar is not workig as expected. it need to be resolved
            }
            <StatusBar style={theme.barStyle} backgroundColor={theme.background} />
            <QueryClientProvider client={queryClient}>
                <SafeAreaView style={styles.safeAreaView}>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={ROUTES.INTRO.name} />
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
    },
})
