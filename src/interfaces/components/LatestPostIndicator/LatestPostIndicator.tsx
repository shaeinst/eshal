import { ArrowUpIcon, MoreArrowDownIcon } from '$exporter/asset'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useStyles } from './stylesLatestPostIndicator'

type PropsType = {
    urls: string[]
}

export default function LatestPostIndicator({ urls }: PropsType) {
    //
    const { styles, COLORS } = useStyles()

    return (
        <TouchableOpacity style={styles.container}>
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
    )
}
