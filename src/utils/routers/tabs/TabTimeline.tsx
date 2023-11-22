import React, { useState } from 'react'
import { SceneMap } from 'react-native-tab-view'

import { AddPostScreen, TimelineScreen } from '$exporter/screen'
import { TabBar } from './TabBar'
import { ROUTERS } from '../ConstRoute'

const { TABS } = ROUTERS.HOME.TIMELINE

const renderScene = SceneMap({
    [TABS.HOME.path]: TimelineScreen,
    [TABS.LOCAL.path]: AddPostScreen,
})

export default function TabTimeline() {
    //
    const [routes] = useState([
        { key: [TABS.HOME.path], title: [TABS.HOME.name] },
        { key: [TABS.LOCAL.path], title: [TABS.LOCAL.name] },
    ])

    return <TabBar routes={routes} renderScene={renderScene} />
}
