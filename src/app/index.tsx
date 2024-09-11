import { Redirect } from '@expo'

import { ROUTES, useZustandStore } from '$exporter'

export default function Index() {
    //
    const { init, auth } = useZustandStore()

    if (auth.isSignedIn) return <Redirect href={ROUTES.HOME.TIMELINE.path} />
    // TODO: implement Onboarding screen(s)
    // if (init.isFreshApp) return <Redirect href={ROUTES.INTRO.ONBOARDING.path} />
    return <Redirect href={ROUTES.AUTH.LOGIN.path} />
}
