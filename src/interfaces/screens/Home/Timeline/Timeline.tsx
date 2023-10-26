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
]

export default function Timeline() {
    //
    const { styles } = useStyles()

    return (
        <View style={styles.container}>
            <FlashList
                data={DATA}
                renderItem={({ item }) => <PostCard />}
                estimatedItemSize={200}

            />
        </View>
    )
}
