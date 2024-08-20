import { ArrowUpIcon, MoreArrowDownIcon } from '$exporter/asset'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, {  BounceInDown, BounceInUp } from 'react-native-reanimated'

import { useStyles } from './stylesLatestPostIndicator'

type PropsType = {
    urls: string[]
}

export default function LatestPostIndicator({ urls }: PropsType) {
    //
    const { styles, COLORS } = useStyles()

    return (
        <Animated.View style={styles.container} entering={BounceInUp} exiting={BounceInDown}>
            <TouchableOpacity style={styles.touchContainer}>
                <View style={styles.imageContainer}>
                    {urls.map((url, index) => (
                        <Image key={index} source={{ uri: url }} style={styles.authorImage} />
                    ))}
                </View>
                <View style={styles.desContainer}>
                    <Text style={styles.text}>Latest Posts</Text>
                    <ArrowUpIcon fill={COLORS.text} />
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}
