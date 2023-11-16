import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { PostCard, PostSkeleton } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { useStyles } from './styleTimeline'
import { MStatusType } from '$exporter/type'
import { postReducer } from '$exporter/func'
import { MPOST_STATUS_DATA } from '$exporter/fakedata'

export default function Timeline() {
    //
    const { styles } = useStyles()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isLoading, isFetching, handleRefresh } = queryPublicTimeline()

    const flatlistRender = ({ item }: { item: MStatusType }) => {
        return <PostCard  data={item} />
    }
    const renderSeparator = useCallback(() => <Text style={styles.separator}></Text>, [styles])
    const Skeleton = useCallback(
        () => (
            <View style={styles.skeleton}>
                <PostCard skeleton data={MPOST_STATUS_DATA[0]} />
            </View>
        ),
        [styles],
    )

    console.log('=====================')
    console.log('FROM TIMELINE ', data.length)
    console.log('=====================')

    return (
        <View style={styles.container}>
            <FlatList
                // estimatedItemSize={600}
                onRefresh={handleRefresh}
                onEndReached={handleRefresh}
                refreshing={isLoading || isFetching}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={Skeleton}
                data={data}
                keyExtractor={item => item.id}
                renderItem={flatlistRender}
            />
        </View>
    )
}
