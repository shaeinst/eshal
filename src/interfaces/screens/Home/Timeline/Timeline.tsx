import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { PostCard, PostSkeleton } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { useStyles } from './styleTimeline'
import { MStatusType } from '$exporter/type'

export default function Timeline() {
    //
    const { styles } = useStyles()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isLoading, isFetching, fetchNextPage } = queryPublicTimeline()

    const handleRefresh = () => {
        fetchNextPage()
    }

    const flatlistRender = ({ item }: { item: MStatusType }) => {
        return <PostCard data={item} />
    }
    const renderSeparator = useCallback(() => <Text style={styles.separator}></Text>, [styles])
    const renderFooter = useCallback(() => <Text style={styles.footer}> </Text>, [styles])

    console.log('=====================')
    console.log('FROM TIMELINE ', data?.pages.length)
    console.log('=====================')

    if (!data?.pages || error) {
        return <PostSkeleton />
    }

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
                ListFooterComponent={renderFooter}
                data={data.pages.reduce(
                    (accumulator, currentValue) => accumulator.concat(currentValue),
                    [],
                )}
                keyExtractor={item => item.id}
                renderItem={flatlistRender}
            />
        </View>
    )
}
