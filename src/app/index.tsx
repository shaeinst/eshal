import { Redirect } from '@expo'

import { ROUTES } from '$exporter'
import { useAppInit } from '$exporter/hooks'

export default function Index() {
    const { isSignedIn } = useAppInit()

    if (!isSignedIn) {
        return <Redirect href={ROUTES.HOME.TIMELINE.path} />
    } else {
        return <Redirect href={ROUTES.AUTH.LOGIN.path} />
    }
}
