import React from 'react'
import { Text, View } from 'react-native'

import { PostCard, PrimaryButton } from '$exporter/component'
import { useStyles } from './styleTimeline'
import { FlashList } from '@shopify/flash-list'

// https://loremflickr.com/640/480/person
const DATA = [
    {
        title: 'First Item',
    },
    {
        title: 'First Item',
    },
]

export default function Timeline() {
    //
    const { styles, COLORS } = useStyles()

    return (
        <View style={styles.container}>
            <FlashList
                data={DATA}
                estimatedItemSize={200}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.whiteSpace}>
                    <View style={styles.seperator}></View>
                </View>}
                ListFooterComponentStyle={{
                    height: 200,
                    backgroundColor: COLORS.background,
                }}
                renderItem={({ item }) => <PostCard />}
            />
        </View>
    )
}
