import React, { useMemo } from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { MCustomEmojiType } from '$exporter/type'
import { parseDisplayName as parseName } from '$exporter/func'

import { useStyles } from './stylePostCard'

type PropsType = {
    displayName: string
    emojis: MCustomEmojiType[]
}

export default function AuthorName({ displayName, emojis }: PropsType) {
    //
    const { styles } = useStyles()
    const parsedName = parseName(displayName, emojis)

    return (
        <View style={styles.authorNameContainer}>
            {parsedName.map((type, index) =>
                type.name ? (
                    <Text key={`${type.url} + ${Math.random()}0`} style={styles.authorName}>
                        {type.name}
                    </Text>
                ) : (
                    <FastImage
                        key={`${type.url} + ${Math.random()}1`}
                        source={{ uri: type.url }}
                        style={styles.emoji}
                    />
                ),
            )}
        </View>
    )
}
