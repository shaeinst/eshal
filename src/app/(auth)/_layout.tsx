import { Stack } from '@expo'

import { ROUTES } from '$exporter'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        //
        >
            <Stack.Screen name={ROUTES.AUTH.LOGIN.name} />
            <Stack.Screen name={ROUTES.AUTH.REGISTER.name} />
        </Stack>
    )
}
