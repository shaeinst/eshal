import React, { useCallback, useMemo } from 'react'
import { StyleSheet, Linking, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Image } from 'expo-image'

import { MPreviewCardType } from '$exporter/type'
import { LinkIcon } from '$exporter/asset'
import { FONTS, WHITESPACE, useColors } from '$exporter'

export default function LinkPreview({ card, inReply }: { card: MPreviewCardType; inReply?: boolean }) {
    //
    const { styles } = useStyles(inReply)

    const handleClick = () => {
        Linking.openURL(card.url)
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handleClick}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.cardDescription}>
                {card.description}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardLink}>
                {card.url}
            </Text>
            {card.image ? <Image style={styles.postPreview} source={{ uri: card.image }} /> : null}
        </TouchableOpacity>
    )
}

const useStyles = (inReply?: boolean) => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        container: {
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.seperator,
            overflow: 'hidden',
            padding: 4,
            marginLeft: inReply ? 0 : WHITESPACE.postCardIndent,
        },
        postPreview: {
            height: 140,
            width: '100%',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
        },
        cardDescription: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.weakText,
        },
        cardLink: {
            ...FONTS.Inter['Lt-12'],
            color: COLORS.link,
            fontStyle: 'italic',
        },
    })
    return { styles, COLORS }
}
