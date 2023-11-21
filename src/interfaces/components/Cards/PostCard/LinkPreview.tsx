import React, { useMemo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

import { FONTS, useColors } from '$exporter'
import { MPreviewCardType } from '$exporter/type'

export default React.memo(function LinkPreview({ card }: { card: MPreviewCardType }) {
    //
    const { styles } = useSyles()

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
            <Text style={styles.cardDescription}> {card.description.slice(0, 120)}...</Text>
            <Text style={styles.cardLink}> {card.url}</Text>
            {card.image ? (
                <FastImage style={styles.postPreview} source={{ uri: card.image }} />
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
            color: COLORS.primary,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
        },
    })

    return { styles }
}
