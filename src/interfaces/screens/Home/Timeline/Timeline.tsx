import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { PostCard } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { useStyles } from './styleTimeline'
import { MStatusType } from '$exporter/type'

export default function Timeline() {
    //
    const { styles } = useStyles()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isLoading, isFetching, refetch } = queryPublicTimeline()

    const handleRefresh = () => {
        refetch()
    }

    const flatlistRender = ({ item }: { item: MStatusType }) => {
        return <PostCard data={item} />
    }
    const renderSeparator = useCallback(
        () => (
            <View style={styles.separatorContainer}>
                <View style={styles.separator}></View>
            </View>
        ),
        [styles],
    )
    const renderFooter = useCallback(() => <View style={styles.footer}> </View>, [styles])

    return (
        <View style={styles.container}>
            <FlatList
                // estimatedItemSize={600}
                onRefresh={handleRefresh}
                refreshing={isLoading || isFetching}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}
                data={data}
                keyExtractor={item => item.id}
                renderItem={flatlistRender}
            />
        </View>
    )
}
