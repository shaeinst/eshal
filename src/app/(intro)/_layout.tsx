import { Stack } from '@expo'

import { ROUTES } from '$exporter'

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.INTRO.ONBOARDING.name} />
        </Stack>
    )
}
