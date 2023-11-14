import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

import { MStatusType } from '$exporter/type'
import { useStyles } from './stylePostView'
import { RouteProp } from '@react-navigation/native'
import { ROUTERS } from '$exporter/constant'
import { useZustandStore } from '$exporter'

type PropsType = {
    route: RouteProp<
        {
            [ROUTERS.HOME.TIMELINE.POSTVIEW.path]: { data: MStatusType }
        },
        typeof ROUTERS.HOME.TIMELINE.POSTVIEW.path
    >
}

type ActivePreviewType = {
    url: string | undefined
    description: string | undefined
}

export default function PostView({ route }: PropsType) {
    //
    const { data } = route.params

    const { setHideBottomTab } = useZustandStore()

    const [activePreview, setActivePreview] = useState<ActivePreviewType>(
        data.media_attachments
            ? data.media_attachments[0]
            : {
                  url: undefined,
                  description: undefined,
              },
    )

    const { styles } = useStyles()

    useEffect(() => {
        setHideBottomTab(true)
        return () => setHideBottomTab(false)
    }, [])

    return (
        <View style={styles.container}>
            <Text>POST VIEW SCREEN</Text>
            <Text>{data.account?.display_name}</Text>
            <View style={styles.mediaContainer}>
                <Image
                    resizeMode="cover"
                    source={{ uri: activePreview?.url }}
                    style={styles.postPreview}
                />
            </View>
        </View>
    )
}
