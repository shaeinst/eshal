import React from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

import { useColors } from '$exporter'
import { useStyles } from './stylePostSkeleton'

export default React.memo(function PostSkeleton({ inReply }: { inReply?: boolean }) {
    //
    const { styles } = useStyles()

    return (
        <View style={[styles.container, inReply ? styles.border : null]}>
            <View style={styles.authorContainer}>
                <Animated.View style={styles.author} />
                <Animated.View style={styles.authorInfo} />
            </View>
            <Animated.View style={[styles.body, inReply ? styles.inReplyMargin : null]} />
        </View>
    )
})
