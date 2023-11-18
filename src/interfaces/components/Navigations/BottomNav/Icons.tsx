import React from 'react'
import { ROUTERS } from '$exporter/constant'
import { AddPostIcon, AlertIcon, HomeIcon, ProfileIcon, SearchIcon } from '$exporter/asset'

const { HOME } = ROUTERS

type PropsType = {
    routeName: string
    color: string
}

function Icons({ routeName, color }: PropsType) {
    //
    switch (routeName) {
        case HOME.path:
            return <HomeIcon stroke={color} />
        case HOME.ADDPOST.path:
            return <AddPostIcon stroke={color} />
        case HOME.SEARCH.path:
            return <SearchIcon stroke={color} />
        case HOME.ALERT.path:
            return <AlertIcon stroke={color} />
        case HOME.PROFILE.path:
            return <ProfileIcon fill={color} />
        default:
            return null
    }
}

export default React.memo(Icons)
