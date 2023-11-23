import React, { useState } from 'react'
import { SceneMap } from 'react-native-tab-view'

import { AddPostScreen, TimelineScreen } from '$exporter/screen'
import TabBar from './TabBar'
import { ROUTERS } from '../ConstRoute'

const {
    TABS: { HOME, LOCAL },
} = ROUTERS.HOME.TIMELINE

const renderScene = SceneMap({
    [HOME.path]: TimelineScreen,
    [LOCAL.path]: AddPostScreen,
})

export default function TabTimeline() {
    //
    const [routes] = useState([
        { key: [HOME.path].toString(), title: [HOME.name].toString(), lazyLoad: false },
        { key: [LOCAL.path].toString(), title: [LOCAL.name].toString(), lazyLoad: true },
    ])

    return <TabBar routes={routes} renderScene={renderScene} />
}
