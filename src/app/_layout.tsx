import { StyleSheet } from '@native'
import { Stack, StatusBar } from '@expo'
import { GestureHandlerRootView, QueryClientProvider, SafeAreaView } from '@3rd'

import { ROUTES, useColors } from '$exporter'
import { useAppInit } from '$exporter/hooks'

export default function Layout() {
    //
    const { queryClient, statusBarStyle } = useAppInit()
    const { styles } = useStyles()

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
                            contentStyle: styles.container,
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

const useStyles = () => {
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.background,
        },

        gestureHandler: {
            flex: 1,
        },
        safeAreaView: {
            flex: 1,
        },
    })

    return { styles }
}
