import React from 'react'
import { ROUTERS } from '$exporter/constant'
import { AddPostIcon, AlertIcon, HomeIcon, ProfileIcon, SearchIcon } from '$exporter/asset'

const { HOME } = ROUTERS

type PropsType = {
    routeName: string
    color: string
    isFocused: boolean
}

function Icons({ routeName, color, isFocused }: PropsType) {
    //
    const toFill = isFocused ? { fill: color, stroke: color } : { stroke: color }
    switch (routeName) {
        case HOME.path:
            return <HomeIcon {...toFill} />
        case HOME.ADDPOST.path:
            return <AddPostIcon {...toFill} />
        case HOME.SEARCH.path:
            return <SearchIcon {...toFill} />
        case HOME.ALERT.path:
            return <AlertIcon {...toFill} />
        case HOME.PROFILE.path:
            return <ProfileIcon {...toFill}  />
        default:
            return null
    }
}

export default React.memo(Icons)
