import { Redirect } from '@expo'

import { ROUTES } from '$exporter'

export default function Index() {
    //
    return <Redirect href={ROUTES.HOME.BOTTOM_TAB.path} />
}
