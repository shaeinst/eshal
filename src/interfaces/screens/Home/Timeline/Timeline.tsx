import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { useFocusEffect } from '@react-navigation/native'

import { PostCard, PostSkeleton, ProfileModal } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { MStatusType } from '$exporter/type'
import { postReducer } from '$exporter/func'
import { useZustandStore } from '$exporter'
import { useStyles } from './styleTimeline'

export default React.memo(function Timeline() {
    //
    const refFlatlist = useRef<FlatList>(null)

    const { styles } = useStyles()
    const { activeBottomTab } = useZustandStore()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isError, isLoading, isFetching, handleRefresh, handleOnScroll, handleEndReached } =
        queryPublicTimeline()

    const flatlistRender = ({ item }: { item: MStatusType }) => <PostCard data={item} />

    const Skeleton = useCallback(
        () => (
            <View style={styles.skeleton}>
                {isLoading || isFetching ? <Text style={styles.skeletonText}> Loading...</Text> : null}
                {isError ? <Text style={styles.skeletonText}>{error.message}</Text> : null}
            </View>
        ),
        [styles],
    )

    useFocusEffect(
        useCallback(() => {
            // go to top of flatlist
            if (activeBottomTab.pressedTime > 0) {
                refFlatlist.current?.scrollToOffset({ animated: true, offset: 0 })
            }
        }, [activeBottomTab]),
    )

    return (
        <FlatList
            ref={refFlatlist}
            // estimatedItemSize={600}
            refreshing={false}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            ListFooterComponent={Skeleton}
            data={data}
            keyExtractor={item => item.id}
            renderItem={flatlistRender}
            onRefresh={handleRefresh}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.4}
            onScroll={handleOnScroll}
        />
    )
})
