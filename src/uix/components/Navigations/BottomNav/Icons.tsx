import { React } from '@native'

import { ROUTES } from '$exporter'
import { AddPostIcon, AlertIcon, HomeIcon, ProfileIcon, SearchIcon } from '$exporter/asset'

const { BOTTOM_TAB } = ROUTES.HOME

type PropsType = {
    routeName: string
    color: string
    isFocused: boolean
}

function Icons({ routeName, color, isFocused }: PropsType) {
    //
    const toFill = isFocused ? { fill: color, stroke: color } : { stroke: color }
    switch (routeName) {
        case BOTTOM_TAB.INDEX.name:
            return <HomeIcon {...toFill} />
        case BOTTOM_TAB.ADD_POST.name:
            return <AddPostIcon {...toFill} />
        case BOTTOM_TAB.SEARCH.name:
            return <SearchIcon {...toFill} />
        case BOTTOM_TAB.ALERT.name:
            return <AlertIcon {...toFill} />
        case BOTTOM_TAB.PROFILE.name:
            return <ProfileIcon {...toFill} />
        default:
            return null
    }
}

export default React.memo(Icons)
