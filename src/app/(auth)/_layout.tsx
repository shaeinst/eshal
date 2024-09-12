import { Stack } from '@expo'

import { ROUTES, useColors } from '$exporter'

export default function Layout() {
    //
    const { COLORS } = useColors()

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: 'transparent' },
            }}
            //
        >
            <Stack.Screen name={ROUTES.AUTH.LOGIN.name} />
            <Stack.Screen name={ROUTES.AUTH.REGISTER.name} />
        </Stack>
    )
}
