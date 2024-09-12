import { StyleSheet } from '@native'
import { Stack } from '@expo'

import { ROUTES } from '$exporter'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: styles.container,
            }}
            //
        >
            <Stack.Screen name={ROUTES.HOME.BOTTOM_TAB.name} />
            <Stack.Screen name={ROUTES.HOME.POST_DETAILS.name} />
            <Stack.Screen name={ROUTES.HOME.SETTING.name} />
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
})
