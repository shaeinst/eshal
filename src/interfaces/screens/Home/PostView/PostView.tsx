import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'

import { MStatusType } from '$exporter/type'
import { ROUTERS } from '$exporter/constant'
import { useZustandStore } from '$exporter'
import { useStyles } from './stylePostView'

const { POSTVIEW } = ROUTERS.HOME.TIMELINE

type PropsType = {
    route: RouteProp<
        {
            [POSTVIEW.path]: { data?: MStatusType; postId?: string }
        },
        typeof POSTVIEW.path
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
        data?.media_attachments
            ? data.media_attachments[0]
            : {
                  url: undefined,
                  description: undefined,
              },
    )

    // console.log("====================================")
    // console.log('PostView Screen: id=', route.params?.postId)
    // console.log("====================================")

    const { styles } = useStyles()

    useEffect(() => {
        setHideBottomTab(true)
        return () => setHideBottomTab(false)
    }, [])

    return (
        <View style={styles.container}>
            <Text>POST VIEW SCREEN</Text>
            <Text>{data?.account?.display_name}</Text>
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
