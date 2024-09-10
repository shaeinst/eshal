import { Redirect } from 'expo-router'
import { useAppInit } from '$exporter/hooks'

import { ROUTES } from '$exporter'

export default function Index() {
    const { isSignedIn } = useAppInit()

    if (!isSignedIn) {
        return <Redirect href={ROUTES.HOME.name} />
    } else {
        return <Redirect href={ROUTES.AUTH.name} />
    }
}
