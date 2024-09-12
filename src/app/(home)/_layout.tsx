import { Stack, Tabs } from '@expo'

import { ROUTES } from '$exporter'

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
            //
        >
            <Stack.Screen name={ROUTES.HOME.TIMELINE.name} />
            <Stack.Screen name={ROUTES.HOME.PROFILE.name} />
        </Tabs>
    )
}
