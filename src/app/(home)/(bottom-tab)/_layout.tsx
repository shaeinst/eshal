import { StyleSheet } from '@native'
import { Stack, Tabs } from '@expo'

import { ROUTES, useColors } from '$exporter'

const { BOTTOM_TAB } = ROUTES.HOME

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
            sceneContainerStyle={styles.container}
            //
        >
            <Stack.Screen name={BOTTOM_TAB.INDEX.name} />
            <Stack.Screen name={BOTTOM_TAB.ADD_POST.name} />
            <Stack.Screen name={BOTTOM_TAB.SEARCH.name} />
            <Stack.Screen name={BOTTOM_TAB.ALERT.name} />
            <Stack.Screen name={BOTTOM_TAB.PROFILE.name} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    },
})
