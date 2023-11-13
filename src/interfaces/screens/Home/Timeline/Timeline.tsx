import React, { useMemo } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { PostCard } from '$exporter/component'
import { queryHomeTimeline, queryPublicTimeline } from '$exporter/backend'
import { useStyles } from './styleTimeline'

export default function Timeline() {
    //
    const { styles } = useStyles()

    // const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()
    const { data, error, isLoading, isFetching, refetch } = queryPublicTimeline()

    return useMemo(
        () => (
            <View style={styles.container}>
                <FlatList
                    // estimatedItemSize={600}
                    onRefresh={() => {
                        refetch()
                    }}
                    refreshing={isLoading || isFetching}
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    ItemSeparatorComponent={() => (
                        <View style={styles.separatorContainer}>
                            <View style={styles.seperator}></View>
                        </View>
                    )}
                    ListFooterComponent={<View style={{ height: 200 }}> </View>}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <PostCard key={item.id} data={item} />}
                />
            </View>
        ),
        [data, isLoading, isFetching, styles],
    )
}
