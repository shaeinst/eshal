import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { FONTS, useColors } from '$exporter'
import { MCustomEmojiType } from '$exporter/type'
import { parseDisplayName as parseName } from '$exporter/func'

type PropsType = {
    displayName: string
    emojis: MCustomEmojiType[]
}

export default React.memo(function AuthorName({ displayName, emojis }: PropsType) {
    //
    const { styles } = useStyles()
    const parsedName = useMemo(() => parseName(displayName, emojis), [displayName, emojis])

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
})

const useStyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        //
        container: {},
        authorNameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        authorName: {
            ...FONTS.Inter['SB-14'],
            color: COLORS.text,
        },
        emoji: {
            width: 12,
            height: 12,
        },
    })

    return { styles }
}
