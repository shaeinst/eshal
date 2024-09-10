import { Redirect } from 'expo-router'

import { ROUTES } from '$exporter'

export default function Index() {
    return <Redirect href={ROUTES.AUTH.LOGIN.name} />
}
