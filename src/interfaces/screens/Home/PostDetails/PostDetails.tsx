import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp, useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

import { useZustandStore } from '$exporter'
import { MStatusType } from '$exporter/type'
import { ROUTERS } from '$exporter/constant'
import { Comment, PostCard } from '$exporter/component'
import { BackIcon, BoostIcon } from '$exporter/asset'
import { useStyles } from './stylePostDetails'
import { MPOST_STATUS_DATA } from '$exporter/fakedata'

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

    const flatListData = MPOST_STATUS_DATA

    useEffect(() => {
        setHideBottomTab(true)
        return () => setHideBottomTab(false)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <BackIcon stroke={COLORS.text} />
                </TouchableOpacity>
            </View>
            {data ? (
                <FlatList
                    // keyExtractor={item => item.id}
                    data={flatListData}
                    ListHeaderComponent={() => <PostCard isViewMode data={data} />}
                    renderItem={({ item }) => <Comment data={item} />}
                />
            ) : null}
        </View>
    )
}
