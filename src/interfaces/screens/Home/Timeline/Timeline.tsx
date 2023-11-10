import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

import { PostCard } from '$exporter/component'
import { queryHomeTimeline } from '$exporter/backend'
import { useStyles } from './styleTimeline'
import { FlashList } from '@shopify/flash-list'

export default function Timeline() {
    //
    const { styles, COLORS } = useStyles()

    const { data, error, isLoading, isFetching, refetch } = queryHomeTimeline()

    return (
        <View style={styles.container}>
            <FlashList
                estimatedItemSize={600}
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
    )
}
