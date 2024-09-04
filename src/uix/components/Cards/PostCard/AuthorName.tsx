import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'

import { FONTS, WHITESPACE, useColors } from '$exporter'
import { MCustomEmojiType } from '$exporter/type'
import { parseDisplayName as parseName } from '$exporter/func'

type PropsType = {
    displayName: string
    emojis: MCustomEmojiType[]
    reblog?: boolean
}

export default function AuthorName({ displayName, emojis, reblog }: PropsType) {
    //
    const { styles } = useStyles(reblog)
    const parsedName = parseName(displayName, emojis)

    return (
        <View style={styles.container}>
            {parsedName.map((type, index) =>
                type.name ? (
                    <Text key={`${type.url} + ${Math.random()}0`} style={styles.authorName}>
                        {type.name}
                    </Text>
                ) : (
                    <Image
                        key={`${type.url} + ${Math.random()}1`}
                        source={{ uri: type.url }}
                        style={styles.emoji}
                    />
                ),
            )}
        </View>
    )
}
const useStyles = (reblog?: boolean) => {
    const { COLORS } = useColors()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: WHITESPACE.postCardIndent,
        },
        authorName: {
            ...FONTS.Inter['SB-14'],
            color: COLORS.text,
        },
        avatar: {
            borderRadius: 50,
            borderWidth: 0.5,
            height: 40,
            width: 40,
            marginBottom: -40,
        },
        emoji: {
            width: 12,
            height: 12,
        },
    })

    const inReplyStyle = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    })

    return useMemo(() => ({ styles: reblog ? { ...styles, ...inReplyStyle } : styles }), [COLORS])
}
