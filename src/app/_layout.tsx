import { StyleSheet } from '@native'
import { SplashScreen, Stack, StatusBar } from '@expo'
import { GestureHandlerRootView, QueryClientProvider, SafeAreaView } from '@3rd'

import { ROUTES } from '$exporter'
import { useAppInit } from '$exporter/hooks'

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 200)

export default function Layout() {
    //
    const { COLORS, queryClient, statusBarStyle } = useAppInit()

    return (
        <GestureHandlerRootView style={styles.gestureHandler}>
            {
                // NOTE:
                // StatusBar is not workig as expected. it need to be resolved
            }
            <StatusBar style={statusBarStyle} />
            <QueryClientProvider client={queryClient}>
                <SafeAreaView style={styles.safeAreaView}>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            contentStyle: { backgroundColor: COLORS.background },
                        }}>
                        <Stack.Screen name={ROUTES.INTRO.name} />
                        <Stack.Screen name={ROUTES.AUTH.name} />
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
