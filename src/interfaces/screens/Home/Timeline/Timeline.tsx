import React, { useCallback, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { PostCard, PostSkeleton, ProfileModal } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { MStatusType } from '$exporter/type'
import { postReducer } from '$exporter/func'
import { useStyles } from './styleTimeline'

function Timeline() {
    //

    const { styles } = useStyles()

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

    return (
        <FlatList
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
}

export default React.memo(Timeline)
