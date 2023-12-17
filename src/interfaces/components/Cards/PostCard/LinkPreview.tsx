import React, { useCallback, useMemo } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import FastImage from 'react-native-fast-image'

import { FONTS, useColors } from '$exporter'
import { MPreviewCardType } from '$exporter/type'

export default React.memo(function LinkPreview({ card }: { card: MPreviewCardType }) {
    //
    const { styles } = useSyles()

    const handleClick = useCallback(() => {
        Linking.openURL(card.url)
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer} onPress={handleClick}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.cardDescription}>
                {card.description}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardLink}>
                {card.url}
            </Text>
            {card.image ? (
                <TouchableWithoutFeedback>
                    <FastImage style={styles.postPreview} source={{ uri: card.image }} />
                </TouchableWithoutFeedback>
            ) : null}
        </TouchableOpacity>
    )
})

const useSyles = () => {
    //
    const { COLORS } = useColors()

    const styles = StyleSheet.create({
        //
        cardContainer: {
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.seperator,
            overflow: 'hidden',
            padding: 4,
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
            textDecorationLine: 'underline',
            marginBottom: 2,
        },
    })

    return { styles }
}
