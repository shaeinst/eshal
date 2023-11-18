import React, { useCallback, useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp, useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

import { useZustandStore } from '$exporter'
import { MStatusType } from '$exporter/type'
import { ROUTERS } from '$exporter/constant'
import { Comment, PostCard } from '$exporter/component'
import { BackIcon, BoostIcon } from '$exporter/asset'
import { useStyles } from './stylePostDetails'

const { POSTVIEW } = ROUTERS.HOME.TIMELINE

type PropsType = {
    route: RouteProp<
        {
            [POSTVIEW.path]: { data?: MStatusType; postId?: string }
        },
        typeof POSTVIEW.path
    >
}

export default function PostDetails({ route }: PropsType) {
    //
    const { data } = route.params

    const { styles, COLORS } = useStyles()
    const { setHideBottomTab } = useZustandStore()
    const { goBack } = useNavigation()

    // console.log("====================================")
    // console.log('PostView Screen: id=', route.params?.postId)
    // console.log("====================================")

    useEffect(() => {
        setHideBottomTab(true)
        return () => setHideBottomTab(false)
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goBack}>
                        <BackIcon stroke={COLORS.text} />
                    </TouchableOpacity>
                </View>
                {data ? <PostCard isViewMode data={data} /> : null}

                {data ? <Comment data={data} /> : null}
            </View>
        </ScrollView>
    )
}
