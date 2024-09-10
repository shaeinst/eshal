import { Stack } from 'expo-router'

import { ROUTES } from '$exporter'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
            }}
            //
        >
            <Stack.Screen name={ROUTES.AUTH.LOGIN.name} />
            <Stack.Screen name={ROUTES.AUTH.REGISTER.name} />
        </Stack>
    )
}
