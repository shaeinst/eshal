import { Stack, Tabs } from '@expo'

import { ROUTES } from '$exporter'

const { BOTTOM_TAB } = ROUTES.HOME

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
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
